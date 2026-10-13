
import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import toast from "react-hot-toast";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NotificationDialog from "../components/NotificationDialog";
import api from "../api/axios";

const DashboardLayout = () => {
  // Shared notification state
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [markingRead, setMarkingRead] = useState(false);

  // Fetch unread notification count from the backend
  const fetchUnreadCount = useCallback(async () => {
    try {
      const { data } = await api.get("/notifications/unread-count");

      setNotificationCount(data.totalUnreadNotifications ?? 0);
    } catch (error) {
      console.error(
        "Unable to fetch notification count:",
        error
      );
    }
  }, []);

  // Fetch notification count when the dashboard loads
  useEffect(() => {
    fetchUnreadCount();
  }, [fetchUnreadCount]);

  // Open the shared notification dialog
  const openNotifications = async () => {
    setNotificationOpen(true);
    await fetchUnreadCount();
  };

  // Close the notification dialog
  const closeNotifications = () => {
    setNotificationOpen(false);
  };

  // Mark all unread notifications as read
  const handleMarkAllNotificationsRead = async () => {
    if (notificationCount === 0 || markingRead) {
      return;
    }

    try {
      setMarkingRead(true);

      await api.patch("/notifications/read-all");

      // Update the shared count only after API success
      setNotificationCount(0);
      setNotificationOpen(false);

      toast.success("All notifications marked as read");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to mark notifications as read"
      );
    } finally {
      setMarkingRead(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        notificationCount={notificationCount}
        onNotificationClick={openNotifications}
      />

      {/* Main */}
      <main className="min-h-screen md:ml-[260px]">
        {/* Header */}
        <Header
          notificationCount={notificationCount}
          onNotificationClick={openNotifications}
        />

        {/* Page */}
        <div className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* One shared notification dialog */}
      <NotificationDialog
        isOpen={notificationOpen}
        unreadCount={notificationCount}
        markingRead={markingRead}
        onClose={closeNotifications}
        onMarkAllRead={handleMarkAllNotificationsRead}
      />
    </div>
  );
};

export default DashboardLayout;
