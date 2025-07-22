"use client";

import React, { useEffect } from "react";

import Particles from "react-tsparticles";

// import Particles from "@tsparticles/react"; // Import from @tsparticles/react

const ParticlesBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle, rgba(29, 78, 216, 0.5), transparent 80%)",
        backgroundColor: "#111826",
        zIndex: -2,
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          detectRetina: true,
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#7c86ff",
            },
            shape: {
              type: "star",
            },
            opacity: {
              value: 0.1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            line_linked: {
              enable: true,
              distance: 80,
              // color: "#00BFFF",
              color: "#7c86ff",
              // color: "#dfadc5",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.1,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
      />
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Background />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "20px",
          color: "white",
        }}
      >
        <h1>Welcome to My Site!</h1>
        <p>This content will appear above the particles background.</p>
      </div>
    </div>
  );
};

export default ParticlesBackground;
