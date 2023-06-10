import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { SiNextdotjs } from "react-icons/si";
import { FaArrowRight, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import BrandItems from "../components/BrandItems";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectItems({ src, title, content, bg, href, num }) {
  return (
    <motion.div
      onClick={(e) => {
        console.log("Testtt");
      }}
      className={`overflow-hidden ${bg}  border-2 md:border-4 dark:border-transparent border-transparent hover:border-cyan-600 hover:dark:border-cyan-300 rounded-md relative md:mx-auto`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * num, duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <img src={src} alt={title} />
      <div className="absolute inset-0 dark:bg-zinc-800  opacity-0 hover:opacity-95 transition-opacity duration-300 md:flex hover:bg-slate-100 dark:rounded-md rounded-sm hidden">
        <motion.span whileHover={{ opacity: 1 }} className="  mt-12 mx-4">
          <p className="font-bold text-4xl text-cyan-300 ">{title}</p>
          <p className="dark:text-white text-zinc-900 mb-4 text-justify">{content}</p>
          <motion.a className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold dark:text-black text-white hover:bg-gray-300 shadow-lg" href={href} target="_blank">
            Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </motion.a>
        </motion.span>
      </div>
    </motion.div>
  );
}

function ProjectList({ src, title, content, bg, href, hrefgit, num, stacks }) {
  return (
    <motion.div className="dark:text-white text-black grid md:grid-cols-3 grid-cols-1 md:gap-x-8 my-12">
      <div className="col-span-2 text-center md:text-left order-2 md:order-1 mt-4">
        <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * num + 0.3, duration: 0.4 }} exit={{ opacity: 0, y: 10 }} className="text-4xl font-extrabold">
          {title}
        </motion.h1>
        <div className="mt-4 flex flex-wrap gap-2 mx-8 justify-center md:justify-normal">
          {stacks.map((item, index) => {
            return (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                key={index}
                className=" py-2 px-3 rounded text-sm dark:border-2 dark:border-white light:border-none dark:bg-transparent bg-cyan-400 font-semibold"
              >
                {item}
              </motion.p>
            );
          })}
        </div>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * num + 0.3, duration: 0.4 }} exit={{ opacity: 0, y: 10 }} className="my-8 justify-center md:justify-normal text-xl">
          {content}
        </motion.p>
        <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * num + 0.3, duration: 0.4 }}
        exit={{ opacity: 0, y: 10 }}
        className="gap-x-4 flex mx-auto items-center justify-center md:justify-normal my-8">
          <motion.a className=" rounded-lg dark:bg-cyan-500 bg-white px-4 py-2 font-semibold text-black hover:bg-gray-300 shadow-lg" href={href} target="_blank">
            Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </motion.a>
          <motion.a className=" rounded-lg dark:bg-cyan-500 bg-white px-4 py-2 font-semibold text-black hover:bg-gray-300 shadow-lg" href={hrefgit} target="_blank">
            Source Code <FontAwesomeIcon icon={faGithub} />
          </motion.a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ delay: 0.8, duration: 0.4 }} className="items-center flex mx-auto justify-center order-1">
        <img src={src} title={title} />
      </motion.div>
    </motion.div>
  );
}
function ProjectsBlock() {
  return (
    <AnimatePresence>
      <span className="max-w-[1226px] justify-center flex items-center mx-auto">
        <div id="projects" className=" overflow-hidden transition-colors duration-1000 ease-in-out relative py-12 px-8 ">
          <motion.h1 initial={{ opacity: 0.5, y: 10 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="font-bold mb-4 text-center text-4xl md:text-6xl dark:text-white text-black">
            What I'm working with
          </motion.h1>

          <ProjectList
            src="https://media.discordapp.net/attachments/1093897626920964186/1093898295623032922/minecomm.png?width=1154&height=673"
            title="MineCommunity"
            content="A production community website packed with server details and has the option to search player data with ease."
            href="https://minecommunity.jnisperos.space"
            hrefgit="https://github.com/JericNisperos/Next-13-Experimental/tree/main/minecommunity"
            stacks={["NextJs", "TailwindCSS", "Rest API", "Framer-Motion"]}
            num="1"
          />

          <ProjectList
            src="https://cdn.discordapp.com/attachments/1093897626920964186/1093988969429082203/cypherchats.png"
            title="CypherChats"
            content="A simple Chat app focused in efficiency, accuracy and easy to use."
            href="https://cypherchats.jnisperos.space"
            hrefgit="https://github.com/JericNisperos/CypherChats"
            stacks={["ReactJs", "Bootstrap", "Firestore", "Firebase-Auth"]}
            num="2"
          />

          <ProjectList
            src="https://media.discordapp.net/attachments/737562200318803969/1109425841441607770/image.png?width=1212&height=635"
            title="Andromeda Blitz"
            content="A simple game created from Unity and was ported into web."
            href="https://jericnisperos.github.io/AndromedaBlitzV2/"
            hrefgit="https://github.com/JericNisperos/jericnisperos.github.io/tree/master/AndromedaBlitzV2"
            stacks={["HTML 5", "Unity", "C#"]}
            num="3"
          />
        </div>
      </span>
    </AnimatePresence>
  );
}

export default ProjectsBlock;
