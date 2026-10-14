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

import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";
import WhisperlyLogo from "./WhisperlyLogo";

const Sidebar = ({ notificationCount = 0, onNotificationClick }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const mainMenu = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "Messages", path: "/dashboard/messages", icon: MessageCircle },
    { name: "Favourites", path: "/dashboard/favourites", icon: Star },
    { name: "My Link", path: "/dashboard/my-link", icon: LinkIcon },
  ];

  const accountMenu = [
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
    { name: "Delete Account", path: "/dashboard/delete-account", icon: Trash2 },
  ];

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      const response = await logout();
      toast.success(response.message || "Logged out successfully!");

      setSidebarOpen(false);
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to logout. Please try again.",
      );
    } finally {
      setLoggingOut(false);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-3 border-l-[3px] px-3 py-3 text-sm transition-colors duration-150 ${
      isActive
        ? "border-[#064E3B] bg-[#F8E7C9]/60 font-bold text-[#064E3B]"
        : "border-transparent font-medium text-zinc-500 hover:border-[#064E3B]/40 hover:bg-[#F8E7C9]/30 hover:text-[#064E3B]"
    }`;

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-[68px] items-center justify-between border-b-2 border-[#064E3B] bg-white px-4 md:hidden">
        <Link to="/" className="outline-none">
          <WhisperlyLogo />
        </Link>

        <div className="flex items-center gap-2">
          {/* Mobile notifications */}
          <button
            type="button"
            onClick={onNotificationClick}
            aria-label="Open notifications"
            className="relative flex h-10 w-10 items-center justify-center border border-transparent text-[#064E3B] transition hover:border-[#064E3B] hover:bg-[#F8E7C9]/50"
          >
            <Bell size={19} strokeWidth={1.8} />

            {notificationCount > 0 && (
              <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center bg-[#064E3B] px-1 text-[9px] font-bold text-white">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center border border-transparent text-[#064E3B] transition hover:border-[#064E3B] hover:bg-[#F8E7C9]/50"
          >
            <Menu size={21} />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-[#064E3B]/20 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r-2 border-[#064E3B] bg-white transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* LOGO */}
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b-2 border-[#064E3B] px-5">
          <Link to="/" className="outline-none">
            <WhisperlyLogo />
          </Link>

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center text-zinc-500 transition hover:bg-[#F8E7C9] hover:text-[#064E3B] md:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Main */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-zinc-400">
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
                    className={navLinkClass}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Account */}
          <div className="mt-8">
            <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-zinc-400">
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
                    className={navLinkClass}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="shrink-0 border-t-2 border-[#064E3B] p-4">
          {/* Desktop notifications */}
          <button
            type="button"
            onClick={onNotificationClick}
            aria-label="Open notifications"
            className="mb-4 hidden w-full items-center justify-between border border-transparent px-3 py-3 text-sm text-zinc-600 transition hover:border-[#064E3B] hover:bg-[#F8E7C9]/50 hover:text-[#064E3B] md:flex"
          >
            <span className="flex items-center gap-3">
              <Bell size={18} strokeWidth={1.8} />
              Notifications
            </span>

            {notificationCount > 0 && (
              <span className="bg-[#064E3B] px-2 py-1 text-[10px] font-bold text-white">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </button>

          {/* User profile */}
          <div className="flex items-center gap-3 border border-[#064E3B]/15 bg-[#F8E7C9]/35 px-3 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#064E3B] text-sm font-extrabold text-[#F8E7C9]">
              {user?.username?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-[#064E3B]">
                {user?.username || "User"}
              </p>

              <p className="truncate text-xs text-zinc-500">
                {user?.email || ""}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              aria-label="Log out"
              className="flex h-8 w-8 shrink-0 items-center justify-center text-zinc-500 transition hover:bg-[#064E3B] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loggingOut ? <Loader /> : <LogOut size={17} />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;