import { useEffect, useRef, useState } from "react";

import Contact from "./Contact";
import Portfolio from "./Portfolio";
import WorkExperience from "./WorkExperience";

export default function PortfolioLayout() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="">
        <Portfolio />
      </div>

      <div
        onClick={() => setShowForm(!showForm)}
        className="flex items-center justify-center gap-2 cursor-pointer text-blue-400 hover:text-blue-500 transition"
      >
        <span className="text-lg font-semibold">
          {showForm ? "Close Contact" : "Let's Connect"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transform transition-transform ${
            showForm ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div
        ref={formRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out  mx-auto ${
          showForm ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0 rounded-lg">
          <Contact />
        </div>
      </div>
    </div>
  );
}
