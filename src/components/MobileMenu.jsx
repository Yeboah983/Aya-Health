import React from "react";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`md:hidden ${
        isOpen ? "block" : "hidden"
      } absolute top-14 left-0 w-full bg-white p-4 z-40`}
    >
      <a href="/landing" className="block py-2">
        Landing
      </a>
      <a href="/resources" className="block py-2">
        Resources
      </a>
      <a href="/community" className="block py-2">
        Community
      </a>
      <a href="/profile" className="block py-2">
        Profile
      </a>
    </div>
  );
};
export default MobileMenu;
