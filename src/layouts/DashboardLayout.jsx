import React from "react";
import Dashbar from "../components/Dashbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 flex flex-col w-full h-full">
        {/* Top Navbar */}
        <div className="fixed top-0 left-60 right-0 z-50">
          <Dashbar />
        </div>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
