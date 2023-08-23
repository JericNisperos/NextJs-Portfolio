import React from "react";
import { motion } from "framer-motion";
import StarBg from "../components/StarBg";
import Typewriter from "typewriter-effect";

function HomeBlock() {
  return (
    <div className="md:max-h-[800px]">
      <div>
        <StarBg />
        <div className="flex max-w-[1786px] mx-auto justify-center items-center py-24">
          <div className="grid grid-cols-1 xl:grid-cols-4 md:gap-4  px-8 mt-12 z-20 md:ml-[-24px] w-9/12">
            <motion.span className=" dark:text-white text-black text-2xl md:text-7xl col-span-4 sm:flex sm:flex-col justify-center duration-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <h1 className=" font-semibold md:mb-4 text-center md:text-left">
                Hi there! I'm <span className="dark:text-cyan-300 text-cyan-600">Jeric</span>,
              </h1>
              <div className="text-2xl md:text-8xl text-center md:text-left font-extrabold">
                <span className="dark:text-blue-300 text-cyan-600">
                  <Typewriter
                    options={{
                      strings: ["Software Engineer.", "Support Engineer.", "Full Stack Developer.", "React Developer.", "Frontend Developer." ],
                      autoStart: true,
                      loop: true, 
                    }}
                  />
                </span>
              </div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} className="text-sm md:text-2xl md:mt-4 text-center md:text-left">
                Building dynamic and responsive web applications.
              </motion.p>
              <span className="flex mx-auto md:mx-0 justify-center md:justify-normal gap-x-4 md:text-2xl text-sm text-center">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  href="#projects"
                  className=" rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-white hover:bg-gray-300 shadow-lg mt-8"
                >
                  My Projects
                </motion.a>
                {/* <motion.a
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 1.8 }}
                   href="/profile"
                   className=" rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-white hover:bg-gray-300 shadow-lg mt-8"
                 >
                   Download CV
                 </motion.a> */}
              </span>
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlock;
