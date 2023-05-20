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
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * num + 0.3, duration: 0.4 }} exit={{ opacity: 0, y: 10 }} className="grid md:grid-cols-3 grid-cols-1 md:gap-x-8 my-12">
      <div className="col-span-2 text-center md:text-left order-2 md:order-1 mt-4">
          <h1 className="text-4xl font-extrabold">{title}</h1>
          <div class="mt-4 flex flex-wrap gap-2 mx-8 justify-center md:justify-normal">
            {stacks.map((item, index) => {
              return (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                  key={index}
                  class=" py-2 px-3 rounded text-sm dark:border-2 dark:border-white light:border-none dark:bg-transparent bg-cyan-500"
                >
                  {item}
                </motion.p>
              );
            })}
          </div>
          <p className="my-8 justify-center md:justify-normal">{content}</p>
          <div className="gap-x-4 flex mx-auto items-center justify-center md:justify-normal my-8">
            <motion.a className=" rounded-lg dark:bg-cyan-500 bg-white px-4 py-2 font-semibold text-black hover:bg-gray-300 shadow-lg" href={href} target="_blank">
              Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </motion.a>
            <motion.a className=" rounded-lg dark:bg-cyan-500 bg-white px-4 py-2 font-semibold text-black hover:bg-gray-300 shadow-lg" href={hrefgit} target="_blank">
              Source Code <FontAwesomeIcon icon={faGithub} />
            </motion.a>
          </div>
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

          {/* <div className="grid xl:grid-cols-4 grid-cols-1 dark:text-white text-black ">
            <div className="col-span-2 flex justify-center items-center">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.2 * 1, duration: 0.4 }} className="md:text-2xl text-lg grid md:grid-cols-1 gap-8 pb-8">
                <p className=" text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp; I have been working on various projects as a web developer, and my focus has been on using frameworks like <span className="dark:text-cyan-500">ReactJS</span> along with{" "}
                  <span className="dark:text-cyan-500">Tailwindcss</span>, <span className="dark:text-cyan-500">NextJs</span> and <span className="dark:text-cyan-500 ">Framer-Motion</span> to create dynamic and engaging user interfaces.
                  These tools allows me to efficiently build large-scale web applications with reusable components and maintainable code.
                </p>
                <p className="text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp; By leveraging React's powerful capabilities, I have been able to create fast, responsive, and scalable web applications that meet the needs of modern businesses. My experience with React has
                  enabled me to deliver projects that are both functional and visually appealing, helping my clients to achieve their goals and stand out in a crowded online marketplace.
                </p>
                <p className="text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp; In summary, my experience working on various projects with ReactJS has allowed me to build dynamic and engaging user interfaces, while my focus on clean and efficient code ensures that my projects
                  are easily maintainable and scalable. I am committed to delivering high-quality results that are both functional and visually appealing.
                </p>

                <motion.button whileHover={{ scale: 0.9 }} className="hidden md:flex mx-auto text-2xl rounded-lg dark:bg-cyan-500 bg-white p-4 hover:dark:bg-cyan-700 hover:bg-neutral-200">
                  Access Sandbox
                </motion.button>
              </motion.div>
            </div>
            <div className="col-span-2 flex justify-center items-center mx-8">
              <div className="grid md:grid-cols-1 gap-8">
                <ProjectItems
                  src="https://media.discordapp.net/attachments/1093897626920964186/1093898295623032922/minecomm.png?width=1154&height=673"
                  title="MineCommunity"
                  content="&nbsp;&nbsp;&nbsp;&nbsp;Join the MineCommunity gaming network for Minecraft! Connect, play, and explore with like-minded players in a thriving community. Join us now and be part of the adventure!"
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
          </div> */}
        </div>
      </span>
    </AnimatePresence>
  );
}

export default ProjectsBlock;
