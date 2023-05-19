import React from "react";
import { motion } from "framer-motion";
import StarBg from "../components/StarBg";
import Typer from "../components/Typer";
import TypingAnimation from "../components/TypingAnimation";

function HomeSection() {
  return (
    <div className="md:min-h-screen">
      <div>
        <StarBg />
        <div className="flex md:pt-48 ">
          {/* <FrontSection /> */}
          <div className="grid grid-cols-1 xl:grid-cols-4 md:gap-4 max-w-8xl px-8 mt-12 z-20 md:ml-24">
            {/* <motion.img
              src="https://media.licdn.com/dms/image/C4D03AQFSw5IUBtJMFQ/profile-displayphoto-shrink_800_800/0/1656220254047?e=1686182400&v=beta&t=J5XvkLlyzNwC7DBRnjh0ny925D_VO0prFlRVq0MufZA" // Replace with your actual image source
              alt="Profile"
              className="col-span-1 w-1000 h-1000 md:w-full md:h-auto md:max-h-1000 rounded-full shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            /> */}
            <motion.div className="col-span-4 sm:flex sm:flex-col justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <h1 className="text-4xl md:text-8xl font-semibold md:mb-4 text-center md:text-left">
                Hi there! I'm <span className="dark:text-cyan-300 text-cyan-600 duration-500">Jeric</span>,
              </h1>
              <div className="text-6xl md:text-8xl text-center md:text-left font-extrabold">
                {/* <TypingAnimation /> */}
                Aspiring <span className="dark:text-blue-300 text-blue-800">Full Stack Developer</span>
                {/* <Typer
                heading="Aspiring"
                dataText={[
                  "Full Stack Developer.",
                  "Software Engineer.",
                  "Web Developer.",
                  "Front-end Developer.",
                ]}
              /> */}
                {/* Aspiring <span className="dark:text-cyan-300 text-cyan-600 duration-500">Full Stack Developer</span> */}
              </div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className=" md:text-2xl md:mt-4 text-center md:text-left">
                Building dynamic and responsive web applications.
              </motion.p>
              <span className="flex">
              <motion.a className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-white hover:bg-gray-300 shadow-lg mt-8 text-2xl" target="_blank">
                About Me
              </motion.a>
              </span>
             
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
