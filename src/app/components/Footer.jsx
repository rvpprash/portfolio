"use client";

import { CogIcon, StarIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleMessage = () => {
    setIsVisible((prevState) => !prevState);
  };
  console.log("CogIcon: ", StarIcon);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="footer-content max-w-4xl mx-auto text-center">
      <p
        ref={triggerRef}
        className="easter-egg-trigger cursor-pointer text-blue-400 font-semibold mt-4 hover:text-blue-500 flex justify-center items-center space-x-2"
        onClick={toggleMessage}
      >
        Site creation secrets
        <CogIcon className="w-6 h-6" />
      </p>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="easter-egg-tooltip mt-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-sm font-semibold rounded-lg shadow-lg relative max-w-xs mx-auto"
        >
          <p>
            Designed in Figma, built with React, Next.js, and styled with
            Tailwind CSS.
          </p>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-700 rotate-45"></div>
        </div>
      )}

      <footer className="footer">
        &copy; {new Date().getFullYear()} Vishnu Priya Rajagopal{" "}
      </footer>
    </div>
  );
};

export default Footer;
