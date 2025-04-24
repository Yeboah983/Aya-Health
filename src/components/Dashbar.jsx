import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Make sure react-router is v5, or use `react-router-dom` for v6+
import { Menu, X } from "lucide-react";
import { useAuth } from "../authContext"; // Make sure this path is correct

const Dashbar = () => {
  const { logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link
        to="/dashboard"
        className="hover:text-[#325799] hover:font-semibold text-sm md:text-base"
      >
        Home
      </Link>
      <Link
        to="/dashboard/resources-dash"
        className="hover:text-[#325799] hover:font-semibold text-sm md:text-base"
      >
        Resources
      </Link>
      <Link
        to="/dashboard/profile-therapist"
        className="hover:text-[#325799] hover:font-semibold text-sm md:text-base"
      >
        Profile
      </Link>
      <Link to="/">
        <button
          onClick={logout}
          className="hover:text-[#325799] hover:font-semibold text-sm md:text-base"
        >
          Logout
        </button>
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-60 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-400 text-white shadow-md" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-4 md:px-8">
        <div className="text-lg md:text-xl font-bold">Aya Health – Therapist</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">{navLinks}</div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 px-6 pb-6 pt-4 bg-blue-600 text-white">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Dashbar;
