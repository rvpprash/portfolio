"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const InteractivePointer = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y, target } = e;

      const isInteractive = target.closest(
        "a, button, input, textarea, select, label"
      );

      gsap.to(cursorEl, {
        x: x - 15,
        y: y - 15,
        scale: isInteractive ? 2 : 1,
        opacity: isInteractive ? 0.7 : 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorEl, {
        opacity: 0,
        duration: 0.5,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorEl, {
        opacity: 1,
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return <div ref={cursorRef} id="cursor" />;
};

export default InteractivePointer;
