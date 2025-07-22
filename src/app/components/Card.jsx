"use client";

import { useState } from "react";

const Card = ({ title, description, link, image, extraContent }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="bg-[#1e2939] p-6 rounded-xl hover:shadow-lg transition-all ease-in-out duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold mb-2 text-green-400">{title}</h3>
      <p className="text-gray-300 mb-2">{description}</p>
      <a href={link} className="text-sm text-green-400">
        View project →
      </a>

      <div
        className={`extra-content transition-all duration-300 p-4 mt-4 text-white ${isHovered ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}`}
        style={{
          overflow: "hidden",
          maxHeight: isHovered ? "500px" : "0px", // or any max height value you prefer
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {extraContent}
        {image && (
          <div className="card-image mt-4">
            <img src={image} alt="Expanded Image" className="rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
