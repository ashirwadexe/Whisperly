import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="min-h-screen md:ml-[260px]">

        {/* Header */}
        <Header />

        {/* Page */}
        <div className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default DashboardLayout;