import React, { useContext, useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Star,
  Link as LinkIcon,
  Settings,
  Trash2,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";
import WhisperlyLogo from "./WhisperlyLogo";

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Temporary unread count.
  // Later this will come from notification API.
  const notificationCount = 5;

  const mainMenu = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Messages",
      path: "/dashboard/messages",
      icon: MessageCircle,
    },
    {
      name: "Favourites",
      path: "/dashboard/favourites",
      icon: Star,
    },
    {
      name: "My Link",
      path: "/dashboard/my-link",
      icon: LinkIcon,
    },
  ];

  const accountMenu = [
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
    {
      name: "Delete Account",
      path: "/dashboard/delete-account",
      icon: Trash2,
    },
  ];

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      const response = await logout();

      toast.success(
        response.message || "Logged out successfully!"
      );

      setSidebarOpen(false);

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to logout. Please try again."
      );
    } finally {
      setLoggingOut(false);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-[68px] items-center justify-between border-b border-violet-100 bg-white px-4 md:hidden">

        <WhisperlyLogo />

        <div className="flex items-center gap-2">

          {/* Notification */}
          <button
            type="button"
            className="
              relative flex h-10 w-10
              items-center justify-center
              rounded-xl
              text-gray-600
              transition
              hover:bg-violet-50
              hover:text-violet-600
            "
          >
            <Bell size={19} />

            {notificationCount > 0 && (
              <span
                className="
                  absolute right-1 top-1
                  flex h-4 min-w-4
                  items-center justify-center
                  rounded-full
                  bg-violet-600
                  px-1
                  text-[9px]
                  font-semibold
                  text-white
                "
              >
                {notificationCount > 9
                  ? "9+"
                  : notificationCount}
              </span>
            )}
          </button>

          {/* Menu */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              text-gray-700
              transition
              hover:bg-violet-50
              hover:text-violet-600
            "
          >
            <Menu size={21} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="
            fixed inset-0 z-40
            bg-gray-900/20
            backdrop-blur-[2px]
            md:hidden
          "
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[260px]
          flex-col
          border-r border-violet-100
          bg-white
          shadow-[4px_0_20px_rgba(124,58,237,0.03)]
          transition-transform duration-300
          md:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* ================= LOGO ================= */}
        <div
          className="
            flex h-[72px]
            items-center justify-between
            border-b border-violet-50
            px-5
          "
        >
          <WhisperlyLogo />

          <button
            type="button"
            onClick={closeSidebar}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-gray-500
              transition
              hover:bg-violet-50
              hover:text-violet-600
              md:hidden
            "
          >
            <X size={19} />
          </button>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="flex-1 overflow-y-auto px-4 py-6">

          {/* Main */}
          <div>
            <p
              className="
                mb-3 px-3
                text-[11px]
                font-semibold
                uppercase
                tracking-wider
                text-gray-400
              "
            >
              Main
            </p>

            <nav className="space-y-1">
              {mainMenu.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/dashboard"}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-3
                      rounded-xl
                      px-3 py-2.5
                      text-sm font-medium
                      transition
                      ${
                        isActive
                          ? "bg-violet-50 text-violet-700"
                          : "text-gray-500 hover:bg-violet-50/60 hover:text-violet-700"
                      }
                      `
                    }
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />

                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Account */}
          <div className="mt-8">
            <p
              className="
                mb-3 px-3
                text-[11px]
                font-semibold
                uppercase
                tracking-wider
                text-gray-400
              "
            >
              Account
            </p>

            <nav className="space-y-1">
              {accountMenu.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-3
                      rounded-xl
                      px-3 py-2.5
                      text-sm font-medium
                      transition
                      ${
                        isActive
                          ? "bg-violet-50 text-violet-700"
                          : "text-gray-500 hover:bg-violet-50/60 hover:text-violet-700"
                      }
                      `
                    }
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />

                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-violet-50 p-4">

          {/* Desktop notification */}
          <button
            type="button"
            className="
              mb-3 hidden w-full
              items-center justify-between
              rounded-xl
              px-3 py-2.5
              text-sm
              text-gray-600
              transition
              hover:bg-violet-50
              hover:text-violet-700
              md:flex
            "
          >
            <span className="flex items-center gap-3">
              <Bell size={18} />
              Notifications
            </span>

            {notificationCount > 0 && (
              <span
                className="
                  rounded-full
                  bg-violet-100
                  px-2 py-0.5
                  text-[10px]
                  font-semibold
                  text-violet-700
                "
              >
                {notificationCount > 9
                  ? "9+"
                  : notificationCount}
              </span>
            )}
          </button>

          {/* User */}
          <div
            className="
              flex items-center gap-3
              rounded-xl
              bg-violet-50/60
              px-3 py-3
            "
          >
            <div
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full
                bg-violet-600
                text-sm font-semibold
                text-white
              "
            >
              {user?.username
                ?.charAt(0)
                ?.toUpperCase() || "U"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900">
                {user?.username || "User"}
              </p>

              <p className="truncate text-xs text-gray-400">
                {user?.email || ""}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-gray-500
                transition
                hover:bg-white
                hover:text-violet-600
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loggingOut ? (
                <Loader />
              ) : (
                <LogOut size={17} />
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;