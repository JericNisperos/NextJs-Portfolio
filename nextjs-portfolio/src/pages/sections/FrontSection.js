import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function FrontSection() {
  const randomValue = () => Math.floor(Math.random() * 20) - 10;

  return (
    <div>
      <motion.svg
        animate={{
          x: [0, randomValue(), 0, randomValue(), 0],
          y: [0, randomValue(), 0, randomValue(), 0],
          rotate: [0, randomValue(), 0, randomValue(), 0],
        }}
        transition={{ repeat: Infinity, duration: 10 }}
        viewBox="0 0 431.8 178"
        className="absolute top-0 left-0 w-full h-full"
      >
        <motion.path
          d="M322.5,90.8C322.5,140.7,265.6,178,215.9,178S109.3,140.7,109.3,90.8S175,0,215.9,0S322.5,40.9,322.5,90.8z"
          fill="url(#gradient)"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7ad4ff" />
            <stop offset="100%" stopColor="#a084ff" />
          </linearGradient>
        </defs>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl px-8 mt-12 z-20">
          <motion.img
            src="https://media.licdn.com/dms/image/C4D03AQFSw5IUBtJMFQ/profile-displayphoto-shrink_800_800/0/1656220254047?e=1686182400&v=beta&t=J5XvkLlyzNwC7DBRnjh0ny925D_VO0prFlRVq0MufZA" // Replace with your actual image source
            alt="Profile"
            className="col-span-1 w-1000 h-1000 md:w-full md:h-auto md:max-h-1000 rounded-full shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div className="col-span-3 md:flex md:flex-col justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <h1 className="text-4xl md:text-6xl font-semibold md:mb-4 md:leading-3 text-center sm:text-left">
              Hi there! I'm <span className="dark:text-cyan-300 text-cyan-600 duration-500">Jeric</span>,
            </h1>
            <p className="text-2xl md:text-4xl text-center sm:text-left">
              Aspiring <span className="dark:text-cyan-300 text-cyan-600 duration-500">Full Stack Developer</span>
            </p>
            <p className=" md:text-2xl md:mt-4 text-center sm:text-left">Loves to create dynamic and responsive web applications.</p>
          </motion.div>
        </div>
      </motion.svg>
    </div>
  );
}

export default FrontSection;
