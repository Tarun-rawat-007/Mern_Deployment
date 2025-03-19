import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { LogIn, LogOut } from "lucide-react"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("email"); // Check login state

  return (
    <nav className="bg-gradient-to-r from-black to-[#1f1f1f] p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold text-white">MyApp</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:space-x-6 gap-4 absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent md:w-auto flex-col md:flex-row items-center transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0">
            <Link
              to="/"
              className="relative text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/about"
              className="relative text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/service"
              className="relative text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Services
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/contact"
              className="relative text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Contact
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/dashboard"
              className="relative text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Dashboard
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              to="/admin"
              className="relative text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              Admin
            </Link>
          </li>

          {/* Login/Logout Button */}
          <li className="py-2 md:py-0">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  localStorage.removeItem("email");
                  window.location.reload(); // Refresh after logout
                }}
                className="relative flex items-center gap-2 text-lg font-semibold text-red-500 hover:text-red-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-red-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                <LogOut size={20} /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="relative flex items-center gap-2 text-lg font-semibold hover:text-blue-400 after:absolute after:left-0 after:bottom-[-4px] after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                <LogIn size={20} /> Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
