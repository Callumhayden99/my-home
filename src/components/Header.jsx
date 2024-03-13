import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              SKY ESTATE
            </Link>
            {/* Burger menu button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            {/* Navigation links for larger screens */}
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                HOME
              </Link>
              <Link
                to="/houses"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                HOUSES
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                SERVICE
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                CONTACT
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                ABOUT US
              </Link>
            </nav>
            {/* Sign In and Sign Up buttons for larger screens */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/signin">
                <button className="text-blue-500 hover:text-blue-600 transition duration-300">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                HOME
              </Link>
              <Link
                to="/houses"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                HOUSES
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                SERVICE
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                CONTACT
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                ABOUT US
              </Link>
              <Link to="/signin">
                <button className="text-blue-500 hover:text-blue-600 transition duration-300">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
                  Sign Up
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/houses" />
        <Route path="/service" />
        <Route path="/contact" />
        <Route path="/about" />
        <Route path="/signup" />
        <Route path="/signin" />
      </Routes>
    </>
  );
}