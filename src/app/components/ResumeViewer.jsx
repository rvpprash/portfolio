"use client";

import { useState } from "react";

const ResumeViewer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-2 rounded-md border border-white text-white hover:bg-teal-600 transition"
      >
        View Resume
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-1 text-white hover:text-blue-500 text-3xl font-bold z-10"
            >
              ×
            </button>

            <iframe
              src="/documents/Resume.pdf"
              className="w-full h-full"
              frameBorder="0"
              title="Resume PDF"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeViewer;
