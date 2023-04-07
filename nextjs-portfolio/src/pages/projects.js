import React from "react";
import { motion } from "framer-motion";
function projects() {
  return (
    <>
      <div className="min-h-screen  dark:bg-zinc-900 bg-zinc-100 transition-colors duration-1000 ease-in-out">
        <h1 className="font-bold mb-4 text-center mt-12 text-6xl">My Projects</h1>
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-2 gap-4 justify-center items-center h-full mx-auto">
            <motion.div
              className="border-4 dark:border-white border-black hover:border-cyan-600 hover:dark:border-cyan-300 rounded-lg md:w-6/12 relative mx-12 md:mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <img className="" src="/images/minecomm.png" alt="MineCommunity" />
              <div className="absolute inset-0 dark:bg-zinc-800  opacity-0 hover:opacity-95 transition-opacity duration-300 md:flex hover:bg-slate-100 dark:rounded-md rounded-sm hidden">
                <motion.span whileHover={{ opacity: 1 }} className="  mt-8 mx-4">
                  <p className="font-bold text-4xl text-cyan-300 ">MineCommunity</p>
                  <p className="dark:text-white text-zinc-900 mb-4 text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;A small but thriving community of Minecraft players that started with a group of friends in August 2019. What began as a small group of like-minded individuals has grown into a diverse community
                    of players from all corners of the world.
                  </p>
                  <motion.a className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-whit hover:bg-gray-300 shadow-lg" href="https://minecommunity.jnisperos.space" target="_blank">
                    Live Site
                  </motion.a>
                  <button className="rounded-lg dark:bg-white bg-gray-800 px-4 py-2 ml-4 dark:text-black text-white font-semibold hover:bg-gray-300 hover:dark:bg-gray-500 shadow-lg">More Details</button>
                </motion.span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}

export default projects;
