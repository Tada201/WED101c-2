import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [showGladosQuote, setShowGladosQuote] = useState(false);

  const handleLoginClick = () => {
    setShowGladosQuote(true);
    setTimeout(() => setShowGladosQuote(false), 5000);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-black bg-opacity-70 shadow-md border-b border-gray-700 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <NavLink to="/" className="flex items-center">
            <img
              src="/Aperture-Science-Logo.png"
              alt="Aperture Science Logo"
              className="h-10 w-auto"
            />
          </NavLink>
          <ul className="hidden md:flex space-x-6 text-gray-300 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-apertureOrange" : "hover:text-apertureOrange"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-apertureOrange" : "hover:text-apertureOrange"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/images"
                className={({ isActive }) =>
                  isActive ? "text-apertureOrange" : "hover:text-apertureOrange"
                }
              >
                Image Library
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive ? "text-apertureOrange" : "hover:text-apertureOrange"
                }
              >
                Info
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="bg-apertureOrange text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <button
              onClick={handleLoginClick}
              className="bg-apertureTeal text-white px-4 py-2 rounded shadow-lg hover:bg-teal-600 focus:outline-none"
              aria-label="Mock Login"
            >
              Mock Login
            </button>
          </div>
        </div>
      </nav>
      {showGladosQuote && (
        <div className="fixed bottom-20 right-4 bg-black bg-opacity-80 text-apertureOrange p-4 rounded shadow-lg max-w-xs z-50">
          <p>
            "Welcome, test subject. Remember, the cake is a lie."
          </p>
        </div>
      )}
    </>
  );
}
