import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
    <div className="text-xl font-bold text-blue-600">Aya Health</div>
    <div className="space-x-4 hidden md:flex">
      <a href="/" className="hover:text-blue-500">Home</a>
      <a href="/chat" className="hover:text-blue-500">Chat</a>
      <a href="/community" className="hover:text-blue-500">Community</a>
      <a href="/match-therapist" className="hover:text-blue-500">Find Therapist</a>
      <a href="/resources" className="hover:text-blue-500">Resources</a>
      <a href="/profile" className="hover:text-blue-500">Profile</a>
    </div>
  </nav>
  );
};
export default Navbar;
