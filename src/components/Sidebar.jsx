import React from "react";
import { NavLink, Link } from "react-router";
import { CiLogout } from "react-icons/ci";
import { MdDashboard, MdMessage, MdSettings } from "react-icons/md";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: MdDashboard },
    { name: "Appointments", path: "/dashboard/schedule", icon: BiCalendar },
    { name: "Resources", path: "/dashboard/resources-dash", icon: FaUserFriends },
    { name: "Profile", path: "/dashboard/profile-therapist", icon: FaUserCircle },
  ];

  return (
    <div className="flex flex-col w-60 bg-[#073180] h-screen px-4 py-6 fixed top-0 left-0 gap-y-8">
      <span className="text-white text-xl font-bold">Aya-Health</span>

      <div className="flex flex-col gap-y-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-white font-semibold transition ${
                isActive ? "bg-[#315bb0]" : "hover:bg-[#5c6064]"
              }`
            }
          >
            <item.icon className="text-xl" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-2 rounded-md text-white font-semibold hover:bg-[#5c6064]"
        >
          <CiLogout className="text-xl" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
