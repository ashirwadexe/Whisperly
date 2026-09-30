import React, { useState } from "react";
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
} from "lucide-react";
import WhisperlyLogo from "./WhisperlyLogo";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:hidden">
        <div>
            <WhisperlyLogo/>
          </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72
          flex-col border-r border-gray-200 bg-white
          transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* ================= LOGO ================= */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6">
          <div>
            <WhisperlyLogo />
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 md:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex-1 px-4 py-6">
          {/* Main */}
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex w-full items-center gap-3 rounded-xl
                    px-3 py-3 text-sm font-medium
                    text-gray-600 transition
                    hover:bg-gray-100 hover:text-gray-900 cursor-pointer

                  `}
                >
                  <Icon size={19} strokeWidth={1.8} />

                  <span>{item.name}</span>

                </button>
              );
            })}
          </div>

          {/* Account */}
          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Account
          </p>

          <div className="space-y-1">
            {accountItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex w-full items-center gap-3 rounded-xl
                    px-3 py-3 text-sm font-medium transition cursor-pointer

                    ${
                      item.danger
                        ? "text-red-500 hover:bg-red-50"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon size={19} strokeWidth={1.8} />

                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* ================= USER PROFILE ================= */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
              A
            </div>

            {/* User Info */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900">
                Ashirwad
              </p>

              <p className="truncate text-xs text-gray-400">
                ash@example.com
              </p>
            </div>

            {/* Logout */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white hover:text-gray-900 cursor-pointer"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;