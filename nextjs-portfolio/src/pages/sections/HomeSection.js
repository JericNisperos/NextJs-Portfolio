import React from "react";
import { motion } from "framer-motion";
import StarBg from "../components/StarBg";
import Typer from "../components/Typer";
import TypingAnimation from "../components/TypingAnimation";

function HomeSection() {
  return (
    <div className="md:max-h-[800px]">
      <div>
        <StarBg />
        {/* <section className="justify-between px-8 py-4 z-20">
          <p className="text-lg md:text-4xl text-black dark:text-white">JNSpace</p>
        </section> */}
        <div className="flex max-w-[1786px] mx-auto justify-center items-center py-24">
          
          <div className="grid grid-cols-1 xl:grid-cols-4 md:gap-4  px-8 mt-12 z-20 md:ml-[-24px] w-9/12">
            <motion.span className="text-4xl md:text-7xl col-span-4 sm:flex sm:flex-col justify-center duration-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <h1 className=" font-semibold md:mb-4 text-center md:text-left">
                Hi there! I'm <span className="dark:text-cyan-300 text-cyan-600">Jeric</span>,
              </h1>
              <div className="text-6xl md:text-8xl text-center md:text-left font-extrabold">
                {/* <TypingAnimation /> */}
                Aspiring <span className="dark:text-blue-300 text-cyan-600">Full Stack Developer</span>
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
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} className=" md:text-2xl md:mt-4 text-center md:text-left">
                Building dynamic and responsive web applications.
              </motion.p>
              <span className="flex mx-auto md:mx-0 justify-center md:justify-normal ">
              <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }} href="#about" className=" rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-white hover:bg-gray-300 shadow-lg mt-8 text-2xl">
                About Me
              </motion.a>
              </span>
             
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
