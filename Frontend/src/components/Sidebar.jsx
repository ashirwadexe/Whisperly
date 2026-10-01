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

  // Temporary active item.
  // Later, this can be connected with React Router.
  const [activeItem, setActiveItem] = useState("Overview");

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

  // Close sidebar when a navigation item is selected.
  const handleNavigation = (name) => {
    setActiveItem(name);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MOBILE TOP BAR
          Visible only on mobile screens.
      ===================================================== */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-[68px] items-center justify-between border-b border-gray-200 bg-white px-4 md:hidden">
        <WhisperlyLogo />

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700"
        >
          <Menu size={21} strokeWidth={1.8} />
        </button>
      </div>

      {/* =====================================================
          MOBILE BACKDROP
          Clicking outside the sidebar closes it.
      ===================================================== */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-dvh w-[260px] flex-col
          border-r border-gray-200 bg-white

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
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-gray-100 px-5">
          <WhisperlyLogo />

          {/* Mobile close button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 md:hidden"
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
            <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
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
                      flex min-h-[44px] w-full items-center gap-3
                      rounded-xl px-3.5
                      text-left text-sm font-medium
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

                    {/* Small active indicator */}
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
            <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
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
                      flex min-h-[44px] w-full items-center gap-3
                      rounded-xl px-3.5
                      text-left text-sm font-medium
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
            USER PROFILE
        ===================================================== */}
        <div className="shrink-0 border-t border-gray-100 p-3">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3">

            {/* Avatar */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
              A
            </div>

            {/* User information */}
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
              onClick={() => setSidebarOpen(false)}
              aria-label="Logout"
              title="Logout"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-white hover:text-gray-800 cursor-pointer"
            >
              <LogOut size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
