import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="px-5 mt-5">
        {/* Header section with logo and burger menu button */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">SKY ESTATE</h1>
          {/* Burger menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
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
        </div>

        {/* Conditional rendering and centering for burger menu content on small screens */}
        {isOpen && (
          <div className="flex flex-col items-center md:hidden mt-5">
            <nav className="flex flex-col items-center gap-5">
              <Link to="/">
                <h2>HOME</h2>
              </Link>
              <Link to="/houses">
                <h2>HOUSES</h2>
              </Link>
              <Link to="/services">
                <h2>SERVICE</h2>
              </Link>
              <Link to="/contact">
                <h2>CONTACT</h2>
              </Link>
              <Link to="/about">
                <h2>ABOUT US</h2>
              </Link>
              <button className="text-blue-500">Sign In</button>
              <button className="text-white bg-blue-500 p-2 rounded-xl">
                Sign Up
              </button>
            </nav>
          </div>
        )}

        {/* Navigation links and buttons for larger screens, remain unaffected */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-center mt-5 md:mt-0">
          <nav className="flex flex-row justify-between items-center gap-7">
            <Link to="/">
              <h2>HOME</h2>
            </Link>
            <Link to="/houses">
              <h2>HOUSES</h2>
            </Link>
            <Link to="/services">
              <h2>SERVICE</h2>
            </Link>
            <Link to="/contact">
              <h2>CONTACT</h2>
            </Link>
            <Link to="/about">
              <h2>ABOUT US</h2>
            </Link>
            <div className="flex ml-20 gap-5">
              <button className="text-blue-500">Sign In</button>
              <button className="text-white bg-blue-500 p-2 rounded-xl">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/"/>
          <Route path="/houses"/>
          <Route path="/service"/>
          <Route path="/contact"/>
          <Route path="/about"/>
        </Routes>
      </div>
    </>
  );
}
