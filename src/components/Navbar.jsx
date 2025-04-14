import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react"; // Optional: icons for menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link to="/" className="hover:text-blue-200">
        Home
      </Link>
      <Link to="/chat" className="hover:text-blue-200">
        Chat
      </Link>
      <Link to="/community" className="hover:text-blue-200">
        Community
      </Link>
      <Link to="/match-therapist" className="hover:text-blue-200">
        Find Therapist
      </Link>
      <Link to="/resources" className="hover:text-blue-200">
        Resources
      </Link>
      <Link to="/profile" className="hover:text-blue-200">
        Profile
      </Link>
      <div className="bg-white text-blue-600 px-5 py-2 rounded-3xl flex items-center gap-2 hover:bg-blue-100">
        <Link
          to="/login"
          className="hover:text-[#325799] hover:font-semibold hover:text-[18px]"
        >
          Login
        </Link>
        <p>/</p>
        <Link
          to="/signup"
          className="hover:text-[#325799] hover:font-semibold hover:text-[18px]"
        >
          Signup
        </Link>
      </div>
    </>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-600 text-white shadow-md" : "bg-[#99C5C7] text-black"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-5 md:px-10">
        <div className="text-xl font-bold">Aya Health</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">{navLinks}</div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden flex flex-col items-start space-y-4 px-6 pb-6 pt-4 bg-blue-600 text-white`}
        >
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
