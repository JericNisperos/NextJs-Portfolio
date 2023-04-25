import React from "react";
import { motion } from "framer-motion";
import StarBg from "../components/StarBg";

function HomeSection() {
  return (
    <div className="min-h-screen">
      <div>
        <StarBg />
        <div className="flex justify-center md:pt-48 relative ">
          {/* <FrontSection /> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl px-8 mt-12 z-20">
            <motion.img
              src="https://media.licdn.com/dms/image/C4D03AQFSw5IUBtJMFQ/profile-displayphoto-shrink_800_800/0/1656220254047?e=1686182400&v=beta&t=J5XvkLlyzNwC7DBRnjh0ny925D_VO0prFlRVq0MufZA" // Replace with your actual image source
              alt="Profile"
              className="col-span-1 w-1000 h-1000 md:w-full md:h-auto md:max-h-1000 rounded-full shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div className="col-span-3 sm:flex sm:flex-col justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <h1 className="text-4xl md:text-6xl font-semibold md:mb-4 md:leading-3 text-center md:text-left">
                Hi there! I'm <span className="dark:text-cyan-300 text-cyan-600 duration-500">Jeric</span>,
              </h1>
              <p className="text-2xl md:text-4xl text-center md:text-left">
                Aspiring <span className="dark:text-cyan-300 text-cyan-600 duration-500">Full Stack Developer</span>
              </p>
              <p className=" md:text-2xl md:mt-4 text-center md:text-left">Loves to create dynamic and responsive web applications.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
