"use client";

import { useEffect, useRef, useState } from "react";

const Typewriter = ({
  text = "",
  shouldDelete = false,
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const charIndexRef = useRef(0);
  const pauseRef = useRef(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pauseRef.current) return;

    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndexRef.current + 1));
        console.log(
          "text.substring(0, charIndexRef.current + 1): ",
          text.substring(0, charIndexRef.current + 1)
        );
        charIndexRef.current += 1;

        if (charIndexRef.current === text.length) {
          pauseRef.current = true;
          setTimeout(() => {
            setIsDeleting(true);
            pauseRef.current = false;
          }, pause);
        }
      }, typingSpeed);
    } else if (shouldDelete && deletingSpeed) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndexRef.current - 1));
        charIndexRef.current -= 1;

        if (charIndexRef.current === 0) {
          pauseRef.current = true;
          setTimeout(() => {
            setIsDeleting(false);
            pauseRef.current = false;
            onComplete();
          }, pause);
        }
      }, deletingSpeed);
    } else {
      console.log("inside else");
      clearInterval(timeout);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pause]);

  return (
    <h1
      className={`typewriter ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {displayedText}
    </h1>
  );
};
export default Typewriter;
