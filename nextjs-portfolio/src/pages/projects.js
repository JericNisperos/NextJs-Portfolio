import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function projects() {
  return (
    <>
      <div className="min-h-screen  dark:bg-zinc-900 bg-zinc-100 transition-colors duration-1000 ease-in-out">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="font-bold mb-4 text-center mt-12 text-6xl">
          My Projects
        </motion.h1>
        <div className="flex justify-center items-center mx-8">
          <div className="grid sm:grid-cols-2 gap-4 justify-center items-center overflow-hidden md:mx-96">
            <motion.div
              className=" border-2 md:border-4 dark:border-white border-black hover:border-cyan-600 hover:dark:border-cyan-300 rounded-md relative md:mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <img className="" src="https://media.discordapp.net/attachments/1093897626920964186/1093898295623032922/minecomm.png?width=1154&height=673" alt="MineCommunity" />
              <div className="absolute inset-0 dark:bg-zinc-800  opacity-0 hover:opacity-95 transition-opacity duration-300 md:flex hover:bg-slate-100 dark:rounded-md rounded-sm hidden">
                <motion.span whileHover={{ opacity: 1 }} className="  mt-12 mx-4">
                  <p className="font-bold text-4xl text-cyan-300 ">MineCommunity</p>
                  <p className="dark:text-white text-zinc-900 mb-4 text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;Join the MineCommunity gaming network for Minecraft with over 2700+ members! Connect, play, and explore with like-minded players in a thriving community. Join us now and be part of the adventure!
                  </p>
                  <motion.a className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-whit hover:bg-gray-300 shadow-lg" href="https://minecommunity.jnisperos.space" target="_blank">
                    Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </motion.a>
                  <button className="rounded-lg dark:bg-white bg-gray-800 px-4 py-2 ml-4 dark:text-black text-white font-semibold hover:bg-gray-300 hover:dark:bg-gray-500 shadow-lg">More Details</button>
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="md:min-h-full bg-white border-2 md:border-4 dark:border-white border-black hover:border-cyan-600 hover:dark:border-cyan-300 rounded-md relative md:mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <img className="" src="https://cdn.discordapp.com/attachments/1093897626920964186/1093988969429082203/cypherchats.png" alt="CypherChats" />
              <div className="absolute inset-0 dark:bg-zinc-800  opacity-0 hover:opacity-95 transition-opacity duration-300 md:flex hover:bg-slate-100 dark:rounded-md rounded-sm hidden">
                <motion.span whileHover={{ opacity: 1 }} className="  mt-12 mx-4 mb-8">
                  <p className="font-bold text-4xl text-cyan-300 ">CypherChats</p>
                  <p className="dark:text-white text-zinc-900 mb-4 text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;Join the conversation with CypherChats - a simple chat app for easy and secure messaging. Connect with friends and colleagues in real-time and stay connected wherever you go!
                  </p>
                  <motion.a className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-whit hover:bg-gray-300 shadow-lg" href="https://cypherchats.jnisperos.space" target="_blank">
                    Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </motion.a>
                  <button className="rounded-lg dark:bg-white bg-gray-800 px-4 py-2 ml-4 dark:text-black text-white font-semibold mb-4 hover:bg-gray-300 hover:dark:bg-gray-500 shadow-lg">More Details</button>
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
