import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-grow w-full md:w-7/12 lg:w-2/3 space-y-4 px-4 md:px-6">
      {items.map(
        (
          { title, dateRange, content, tags, logo, location, website },
          index
        ) => (
          <div key={index} className="rounded-lg overflow-hidden">
            {/* Header */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center border-indigo-400 bg-indigo-900  px-6 py-4 font-semibold rounded-lg  transition"
            >
              <span>{title}</span>
              <div className="flex items-center space-x-4">
                <span className="font-normal">{dateRange}</span>
                <span className="w-6 h-6 flex items-center justify-center bg-[#3b4668] rounded-full text-white text-xl select-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className=" p-6  bg-[#1a1f2e]  text-green-400 space-y-4">
                <div className="flex items-center space-x-4">
                  {logo && (
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <div>
                    {location && (
                      <p className="text-sm text-gray-400 flex items-center space-x-1">
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>{location}</span>
                      </p>
                    )}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm underline"
                      >
                        {website.replace(/^https?:\/\//, "")}
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300">{content}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-700 text-indigo-300 px-3 py-1 rounded-full text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Accordion;
