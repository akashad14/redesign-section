"use client"; // Add this directive if using Next.js and encountering client-side hook issues.

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto sm:px-6 ">
          <div className="flex items-center  h-16">
            <div className="flex items-center ">
              <div className="flex gap-2 items-center text-xl font-semibold">
                <img
                  className="h-8 w-8 "
                  src="/image/logo-dark.webp"
                  alt="Workflow"
                />
                Everything Talent
              </div>
              <div className=" ml-[10rem] hidden md:block">
                <div className=" flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:text-gray-900 cursor-pointer text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                   About
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Use Cases
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Support
                  </a>
                </div>
              </div>
              <div className="ml-[7rem]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
      </div>
        <button className="flex gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-10">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
      </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu for small screens */}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Use Cases
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Support
              </a>
            </div>
          </div>
        </Transition>
      </nav>

      
    </div>
  );
}

export default Nav;


