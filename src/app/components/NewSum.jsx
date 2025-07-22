"use client";

import { motion } from "framer-motion";

const NewSum = () => {
  return (
    <>
      <div className="pt-24">
        <section className="h-screen flex flex-col justify-center items-start px-8 md:px-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-400 text-sm mb-2"
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-2"
          >
            Your Name
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-2xl md:text-4xl text-gray-400 mb-6"
          >
            I build accessible, delightful web apps.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 max-w-xl mb-8"
          >
            I'm a front-end engineer with experience in React, TypeScript, and
            creating intuitive UIs. Currently looking for new opportunities to
            contribute and grow.
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-green-400 border border-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-gray-900 transition"
          >
            Check out my work
          </motion.a>
        </section>
      </div>
    </>
  );
};

export default NewSum;
