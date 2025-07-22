"use client";

import { HiMenu, HiX } from "react-icons/hi";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // <nav className="fixed top-0 right-0 w-80 rounded-md  z-50 p-4 flex flex-col space-y-3 ">
    <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 border-b border-gray-800  md:px-8 py-4 flex flex-col">
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="text-white hover:text-green-400 transition "
        // self-end
      >
        {!isOpen && <HiMenu size={24} />}
      </button>

      {isOpen && (
        <div className="w-80 flex flex-col items-start space-y-4 mt-8 text-right shadow-lg">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="absolute top-4 right-4 rounded-full border border-white p-1 hover:bg-white hover:text-gray-900 transition"
          >
            <HiX size={24} />
          </button>
          <a
            href="#work"
            onClick={toggleMenu}
            className="hover:text-green-400 transition text-lg font-medium self-start"
          >
            My Work
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="hover:text-green-400 transition text-lg font-medium self-start"
          >
            Projects
          </a>

          <a
            href="#projects"
            onClick={toggleMenu}
            className="hover:text-green-400 transition text-lg font-medium self-start"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
