import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaHome, FaBuilding, FaTools, FaPhoneAlt, FaInfoCircle, FaSignInAlt, FaSignOutAlt, FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is signed in by verifying the token in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from local storage and update the sign-in status
    localStorage.removeItem("token");
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
              <FaBuilding className="mr-2" /> SKY ESTATE
            </Link>
            {/* Burger menu button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars className="w-6 h-6 text-gray-800" />
            </button>
            {/* Navigation links for larger screens */}
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaHome className="mr-2" />
                HOME
              </Link>
              <Link
                to="/houses"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaBuilding className="mr-2" />
                HOUSES
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaTools className="mr-2" />
                SERVICE
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="mr-2" />
                CONTACT
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaInfoCircle className="mr-2" />
                ABOUT US
              </Link>
            </nav>
            {/* Sign In and Logout buttons for larger screens */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {isSignedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-blue-500 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              ) : (
                <Link to="/signin">
                  <button className="text-blue-500 hover:text-blue-600 transition duration-300 flex items-center">
                    <FaSignInAlt className="mr-2" />
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaHome className="mr-2" />
                HOME
              </Link>
              <Link
                to="/houses"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaBuilding className="mr-2" />
                HOUSES
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaTools className="mr-2" />
                SERVICE
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="mr-2" />
                CONTACT
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaInfoCircle className="mr-2" />
                ABOUT US
              </Link>
              {isSignedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-blue-500 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              ) : (
                <Link to="/signin">
                  <button className="text-blue-500 hover:text-blue-600 transition duration-300 flex items-center">
                    <FaSignInAlt className="mr-2" />
                    Sign In
                  </button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/houses" />
        <Route path="/services" />
        <Route path="/contact" />
        <Route path="/about" />
        <Route path="/signin" />
      </Routes>
    </>
  );
}