"use client";

import Link from "next/link";
import ResumeViewer from "./ResumeViewer";
import Typewriter from "./Typewriter";
import TypewriterLines from "./TypewriterLines";
import { useState } from "react";

const effectsText = [
  'console.log("Initializing component tree...")',

  'console.log("Hydrating app with data...")',

  'console.log("Mounting <Portfolio />...")',

  'console.log("Syncing UI state...")',

  ' console.log("useEffect(() => loadProjects(), [])")',

  ' console.log("Fetching data from /api/experience")',

  'console.log("Rendering <App /> to DOM...")',

  'console.log("await deploy(portfolio)")',

  ' console.log("Resolved: UI ready for interaction")',
];

const Summary = () => {
  return (
    <>
      <div
        className="animate-fadeIn "
        // style={{ filter: "brightness(70%)" }}
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-2"
          style={{
            animationFillMode: "forwards",
            // color: "rgba(255, 255, 255, 0.7)",
            textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
          }}
        >
          Vishnu Priya Rajagopal
        </h2>
        <h3
          className="text-2xl md:text-4xl text-gray-400 mb-6"
          style={{ animationFillMode: "forwards" }}
        >
          I love turning complex problems into simple, beautiful interfaces.
        </h3>
        <div className="flex gap-4" style={{ animationFillMode: "forwards" }}>
          <ResumeViewer />
          <Link
            href="#projects"
            className="px-6 py-2 rounded-md border border-white text-white hover:bg-teal-600 transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Summary;
