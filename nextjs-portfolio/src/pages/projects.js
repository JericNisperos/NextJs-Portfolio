import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectItems({ src, title, content, bg, href, num }) {
  return (
    <motion.div
      className={`overflow-hidden ${bg} max-w-[500px] max-h-[300px] border-2 md:border-4 dark:border-white border-black hover:border-cyan-600 hover:dark:border-cyan-300 rounded-md relative md:mx-auto`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * num, duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <img src={src} alt={title} />
      <div className="absolute inset-0 dark:bg-zinc-800  opacity-0 hover:opacity-95 transition-opacity duration-300 md:flex hover:bg-slate-100 dark:rounded-md rounded-sm hidden">
        <motion.span whileHover={{ opacity: 1 }} className="  mt-12 mx-4">
          <p className="font-bold text-4xl text-cyan-300 ">{title}</p>
          <p className="dark:text-white text-zinc-900 mb-4 text-justify">{content}</p>
          <motion.a className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-whit hover:bg-gray-300 shadow-lg" href={href} target="_blank">
            Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </motion.a>
        </motion.span>
      </div>
    </motion.div>
  );
}
function projects() {
  return (
    <>
      <div className="min-h-screen  dark:bg-zinc-900 bg-zinc-100 transition-colors duration-1000 ease-in-out">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="font-bold mb-4 text-center text-2xl md:text-6xl">
          My Projects
        </motion.h1>
        <div className="flex justify-center items-center mx-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems
              src="https://media.discordapp.net/attachments/1093897626920964186/1093898295623032922/minecomm.png?width=1154&height=673"
              title="MineCommunity"
              content="&nbsp;&nbsp;&nbsp;&nbsp;Join the MineCommunity gaming network for Minecraft with over 2700+ members! Connect, play, and explore with like-minded players in a thriving community. Join us now and be part of the adventure!"
              bg="bg-black"
              href="https://minecommunity.jnisperos.space"
              num="1"
            />

            <ProjectItems
              src="https://cdn.discordapp.com/attachments/1093897626920964186/1093988969429082203/cypherchats.png"
              title="CypherChats"
              content="&nbsp;&nbsp;&nbsp;&nbsp;Join the conversation with CypherChats - a simple chat app for easy and secure messaging. Connect with friends and colleagues in real-time and stay connected wherever you go!"
              bg="bg-white"
              href="https://cypherchats.jnisperos.space"
              num="2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default projects;
