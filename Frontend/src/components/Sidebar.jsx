import React, { useContext, useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Star,
  Link,
  Settings,
  Trash2,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react";
import WhisperlyLogo from "./WhisperlyLogo";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loggoingOut, setLoggingOut] = useState(false);

  // Temporary active navigation item.
  // Later, React Router's useLocation() can handle this.
  const [activeItem, setActiveItem] = useState("Overview");

  // Temporary notification count.
  // Later this will come from your backend/API.
  const [notificationCount, setNotificationCount] = useState(5);

  // Controls the small notification message.
  const [notificationOpen, setNotificationOpen] = useState(false);

  const menuItems = [
    {
      name: "Overview",
      icon: LayoutDashboard,
    },
    {
      name: "Messages",
      icon: MessageCircle,
    },
    {
      name: "Favourites",
      icon: Star,
    },
    {
      name: "My Link",
      icon: Link,
    },
  ];

  const accountItems = [
    {
      name: "Settings",
      icon: Settings,
    },
    {
      name: "Delete Account",
      icon: Trash2,
      danger: true,
    },
  ];

  const handleNavigation = (name) => {
    setActiveItem(name);
    setSidebarOpen(false);
  };

  // Open / close notification message.
  const handleNotificationClick = () => {
    if (notificationCount > 0) {
      setNotificationOpen((previous) => !previous);
    }
  };

  // Mark every notification as read.
  const markNotificationsAsRead = () => {
    setNotificationCount(0);
    setNotificationOpen(false);
  };

  // logout function
  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      const response = await logout();
      toast.success(response.message || "Logout successful!");

      navigate("/login", {replace: true});

    } catch (error) {
      toast.error(
        toast.response?.data?.message ||
        toast.message ||
        "Unable to logout. Please try again."
      )
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <>
      {/* =====================================================
          MOBILE TOP NAVBAR
      ===================================================== */}
      <div
        className="
          fixed inset-x-0 top-0 z-40
          flex h-[68px] items-center justify-between
          border-b border-gray-200
          bg-white
          px-4
          md:hidden
        "
      >
        {/* Logo */}
        <WhisperlyLogo />

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* ---------------- NOTIFICATIONS ---------------- */}
          <div className="relative">
            <button
              type="button"
              onClick={handleNotificationClick}
              aria-label="Notifications"
              className="
                relative flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-gray-200
                bg-white
                text-gray-600
              "
            >
              <Bell size={19} strokeWidth={1.8} />

              {/* Count */}
              {notificationCount > 0 && (
                <span
                  className="
                    absolute -right-1 -top-1
                    flex h-[18px] min-w-[18px]
                    items-center justify-center
                    rounded-full
                    bg-violet-600
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                    ring-2 ring-white
                  "
                >
                  {notificationCount > 99 ? "99+" : notificationCount}
                </span>
              )}
            </button>

            {/* Notification message */}
            {notificationOpen && notificationCount > 0 && (
              <NotificationMessage
                count={notificationCount}
                onRead={markNotificationsAsRead}
              />
            )}
          </div>

          {/* ---------------- MENU ---------------- */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-gray-200
              text-gray-700
            "
          >
            <Menu size={21} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE SIDEBAR OVERLAY
      ===================================================== */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/30
            md:hidden
          "
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-dvh w-[260px]
          flex-col
          border-r border-gray-200
          bg-white
          transform
          transition-transform duration-200 ease-out

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* =====================================================
            SIDEBAR HEADER
        ===================================================== */}
        <div
          className="
            flex h-[72px] shrink-0
            items-center justify-between
            border-b border-gray-100
            px-5
          "
        >
          <WhisperlyLogo />

          {/* Mobile close */}
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-gray-500
              md:hidden
            "
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <nav className="flex-1 overflow-y-auto px-3 py-6">

          {/* ---------------- MAIN ---------------- */}
          <div>
            <p
              className="
                mb-2 px-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-gray-400
              "
            >
              Main
            </p>

            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavigation(item.name)}
                    className={`
                      flex min-h-[44px] w-full
                      items-center gap-3
                      rounded-xl
                      px-3.5
                      text-left
                      text-sm
                      font-medium
                      cursor-pointer

                      ${
                        isActive
                          ? "bg-violet-50 text-violet-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2 : 1.8}
                      className="shrink-0"
                    />

                    <span>{item.name}</span>

                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------------- ACCOUNT ---------------- */}
          <div className="mt-8">
            <p
              className="
                mb-2 px-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-gray-400
              "
            >
              Account
            </p>

            <div className="space-y-1">
              {accountItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavigation(item.name)}
                    className={`
                      flex min-h-[44px] w-full
                      items-center gap-3
                      rounded-xl
                      px-3.5
                      text-left
                      text-sm
                      font-medium
                      cursor-pointer

                      ${
                        item.danger
                          ? "text-red-500 hover:bg-red-50"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />

                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* =====================================================
            DESKTOP NOTIFICATIONS
        ===================================================== */}
        <div className="hidden border-t border-gray-100 px-3 py-3 md:block">
          <div className="relative">
            <button
              type="button"
              onClick={handleNotificationClick}
              className="
                flex min-h-[44px] w-full
                items-center gap-3
                rounded-xl
                px-3.5
                text-sm font-medium
                text-gray-600
                hover:bg-gray-50
                hover:text-gray-900
              "
            >
              <Bell size={18} strokeWidth={1.8} />

              <span>Notifications</span>

              {notificationCount > 0 && (
                <span
                  className="
                    ml-auto
                    flex h-5 min-w-5
                    items-center justify-center
                    rounded-full
                    bg-violet-600
                    px-1.5
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  {notificationCount > 99 ? "99+" : notificationCount}
                </span>
              )}
            </button>

            {/* Desktop notification message */}
            {notificationOpen && notificationCount > 0 && (
              <NotificationMessage
                count={notificationCount}
                onRead={markNotificationsAsRead}
                desktop
              />
            )}
          </div>
        </div>

        {/* =====================================================
            USER PROFILE
        ===================================================== */}
        <div className="shrink-0 border-t border-gray-100 p-3">
          <div
            className="
              flex items-center gap-3
              rounded-xl
              bg-gray-50
              px-3 py-3
            "
          >
            {/* Avatar */}
            <div
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full
                bg-gray-900
                text-xs font-semibold
                text-white
              "
            >
              A
            </div>

            {/* User */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900">
                Ashirwad
              </p>

              <p className="truncate text-[11px] text-gray-400">
                ash@example.com
              </p>
            </div>

            {/* Logout */}
            <button
              type="button"
              disabled={loggoingOut}
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-gray-400
                hover:bg-white
                hover:text-gray-800
              "
            >
              <LogOut size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

/* ============================================================
   NOTIFICATION MESSAGE

   This is intentionally NOT a notification list.

   It only tells the user how many new notifications exist.
   Clicking the message marks everything as read.
============================================================ */

const NotificationMessage = ({
  count,
  onRead,
  desktop = false,
}) => {
  return (
    <div
      className={`
        absolute z-[70]
        w-[280px]
        overflow-hidden
        rounded-2xl
        border border-gray-200
        bg-white
        shadow-[0_15px_50px_rgba(0,0,0,0.12)]

        ${
          desktop
            ? "bottom-[52px] left-0"
            : "right-0 top-[48px]"
        }
      `}
    >
      <button
        type="button"
        onClick={onRead}
        className="
          flex w-full
          items-start gap-3
          p-4
          text-left
          hover:bg-gray-50
        "
      >
        {/* Bell */}
        <div
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-xl
            bg-violet-50
            text-violet-600
          "
        >
          <Bell size={17} strokeWidth={1.8} />
        </div>

        {/* Message */}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">
            You have {count} new{" "}
            {count === 1 ? "notification" : "notifications"}.
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-400">
            Tap here to mark them all as read.
          </p>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;