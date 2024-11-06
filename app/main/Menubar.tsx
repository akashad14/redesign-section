// NavbarActions.tsx

"use client"; // Directive if using Next.js to specify client component.

import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const NavbarActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state

  // Load theme from localStorage (optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme and update root element class
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark", !isDarkTheme);
    localStorage.setItem("theme", !isDarkTheme ? "dark" : "light"); // Save preference
  };

  return (
    <div >
      <nav className="bg-white shadow-md   dark:bg-gradient-to-r from-black via-blue-800 to-blue-500 dark:text-white dark:shadow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo and Title */}
              <img className="h-8 w-8" src="/image/logo-dark.webp" alt="Logo" />
              <span className="ml-2 text-xl font-semibold">Everything Talent</span>
            </div>

            {/* Primary navigation links */}
            <div className="hidden md:flex items-center space-x-4 ml-10  dark:text-white">
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                Home
              </a>
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                About
              </a>
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                Use Cases
              </a>
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                Pricing
              </a>
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                Resources
              </a>
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                Blog
              </a>
              <a href="#" className="hover:text-gray-900 text-black px-3 py-2 text-sm font-medium dark:text-white">
                Support
              </a>
            </div>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none ml-4"
              aria-label="Toggle Dark Mode"
            >
              {isDarkTheme ? (
                // Sun icon for light mode
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
              ) : (
                // Moon icon for dark mode
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>
              )}
            </button>

            {/* Login button */}
            <button className="ml-4 flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-gradient-to-r from-black via-blue-900">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                Home
              </a>
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                About
              </a>
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                Use Cases
              </a>
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                Pricing
              </a>
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                Resources
              </a>
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                Blog
              </a>
              <a href="#" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium dark:text-white">
                Support
              </a>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default NavbarActions;
