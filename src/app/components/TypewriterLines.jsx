import { useEffect, useState } from "react";

import Typewriter from "./Typewriter";

const TypewriterLines = ({ onComplete }) => {
  const lines = [
    'console.log("Fetching projects...");',
    'console.log("Rendering UI components...");',
    'console.log("Loading complete!!");',
  ];

  const [index, setIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "monospace", whiteSpace: "pre-line" }}>
      <Typewriter
        className="text-teal-400 text-base mb-2"
        text={`${lines[index]}`}
        typingSpeed={60}
        deletingSpeed={50}
        pause={15}
        shouldDelete={true}
        onComplete={() => setDoneTyping(true)}
      />
    </div>
  );
};

export default TypewriterLines;
