import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiAdobedreamweaver,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAzuredevops,
  SiBootstrap,
  SiCsharp,
  SiExpress,
  SiFirebase,
  SiJira,
  SiMicrosoftoffice,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNativescript,
  SiNextdotjs,
  SiPostman,
  SiSwagger,
  SiTailwindcss,
  SiUnity,
} from "react-icons/si";
import { FaAngular, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, faAngular } from "react-icons/fa";
import { faFacebookF, faGithub, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { DiMysql } from "react-icons/di";

function AboutBlock() {
  const [activeAbout, setActiveAbout] = useState("Introduction");

  function BrandItems({ title, icon }) {
    return (
      <motion.span whileHover={{ scale: 0.9 }} className="has-tooltip text-transparent hover:dark:text-cyan-300 hover:text-zinc-900">
        {icon}
        <p className="text-lg text-center justify-center ">{title}</p>
      </motion.span>
    );
  }

  return (
    <div>
      <div className=" h-full w-full z-10 relative mt-24 pb-12">
        <div id="about" className="dark:text-white text-zinc-800 gap-4 duration-0 lg:px-48 md:px-16 flex  text-base md:text-3xl py-4 justify-center grid-cols-4 ">
          <motion.button
            href="#about"
            onClick={(e) => {
              setActiveAbout("Introduction");
            }}
            className={` ${activeAbout === "Introduction" ? "dark:border-white cursor-none ease-in-out border-black" : "dark:border-zinc-900 hover:border-cyan-500 hover:dark:border-cyan-500 border-white"} border-b-4`}
          > 
            <motion.p whileHover={{ scale: 0.9 }} className=" px-4 py-0 cursor-none">
              Introduction
            </motion.p>
          </motion.button>
          <button
            onClick={(e) => {
              setActiveAbout("TechSkills");
            }}
            className={` ${activeAbout === "TechSkills" ? "dark:border-white cursor-none ease-in-out border-black" : "dark:border-zinc-900 hover:border-cyan-500 hover:dark:border-cyan-500 border-white"} border-b-4`}
          >
            <motion.p whileHover={{ scale: 0.9 }} className=" px-4 py-2 cursor-none">
              Skills
            </motion.p>
          </button>
          <button
            onClick={(e) => {
              setActiveAbout("Experiences");
            }}
            className={` ${activeAbout === "Experiences" ? "dark:border-white cursor-none ease-in-out border-black" : "dark:border-zinc-900 hover:border-cyan-500 hover:dark:border-cyan-500 border-white"} border-b-4`}
          >
            <motion.p whileHover={{ scale: 0.9 }} className=" px-4 py-2 cursor-none">
              Experiences
            </motion.p>
          </button>
        </div>
        <div>
          {activeAbout === "Introduction" ? (
            <div className="md:text-xl text-lg dark:text-white text-zinc-800 lg:px-64 md:px-24 px-6 md:mt-12 cursor-none ">
              <span className="flex-none">
                <motion.ul initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className=" dark:text-white text-zinc-800 md:text-2xl text-justify">
                  <li className="">
                    &nbsp;&nbsp;&nbsp;&nbsp; Hi there! My name is <span className="text-cyan-500">Jeric</span>, and I am a self-motivated individual who has the ability to work both independently and as part of a team. I am currently
                    seeking a stable and challenging role that can utilize my existing skills and experience while providing opportunities for personal and professional growth.{" "}
                  </li>
                  <li className="pt-8">
                    &nbsp;&nbsp;&nbsp;&nbsp;Apart from my professional life, I am also passionate about hobbies like playing the piano and video games. These hobbies have taught me important skills such as patience, attention to detail, and
                    the ability to work under pressure. I have also developed a strong sense of creativity and imagination that I believe can be useful in any work environment.{" "}
                  </li>

                  <li className="pt-8">
                    &nbsp;&nbsp;&nbsp;&nbsp;One of my biggest achievements is continuously developing and managing one of the largest Minecraft Game Networks in the Philippines. The network has grown to consist of over 2800 members, and as
                    the Head of Development, I have effectively added new features, improved existing ones, and resolved bugs to ensure seamless gameplay for our players. This experience has allowed me to further develop my technical and
                    interpersonal skills, making me a valuable asset to any team.{" "}
                  </li>
                  {/* <li className="pt-8">
                    &nbsp;&nbsp;&nbsp;&nbsp;I am excited about the prospect of joining a dynamic and forward-thinking organization that can provide opportunities for growth and development. Thank you for considering my application.
                  </li> */}
                </motion.ul>
                <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center"></p>
              </span>
            </div>
          ) : activeAbout === "TechSkills" ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                exit={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:col-span-1 col-span-2 row-span-1 lg:px-64 md:px-24 sm:px-12 duration-0 p-6 rounded-lg min-w-[300px] min-h-[200px] text-justify"
              >
                <div className="text-xl dark:text-white text-zinc-800 ">
                  <span className="flex-none">
                    <div className="flex mx-auto justify-center">
                      <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold text-center ">Programming Languages</span>
                    </div>
                    <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                      <div className=" grid grid-cols-4 md:grid-cols-5 gap-y-4 gap-x-2 md:px-24 px-4 ">
                        <BrandItems icon={<FaHtml5 className="icon-brands" />} title="Html5" />
                        <BrandItems icon={<FaCss3Alt className="icon-brands" />} title="CSS" />
                        <BrandItems icon={<FaJs className="icon-brands" />} title="Javascript" />
                        <BrandItems icon={<SiBootstrap className="icon-brands" />} title="Bootstrap" />
                        <BrandItems icon={<SiTailwindcss className="icon-brands" />} title="Tailwind" />
                        <BrandItems icon={<FaReact className="icon-brands" />} title="ReactJs" />
                        {/* <BrandItems icon={<TbBrandReactNative className="icon-brands" />} title="React-Native" /> */}
                        <BrandItems icon={<SiNextdotjs className="icon-brands" />} title="NextJs" />
                        <BrandItems icon={<FaAngular className="icon-brands" />} title="AngularJs" />
                        <BrandItems icon={<FaNodeJs className="icon-brands" />} title="NodeJs" />
                        {/* <BrandItems icon={<SiExpress className="icon-brands" />} title="ExpressJs" /> */}
                        <BrandItems icon={<SiFirebase className="icon-brands" />} title="Firebase" />
                        <BrandItems icon={<DiMysql className="icon-brands" />} title="MySQL" />
                        {/* <BrandItems icon={<SiMongodb className="icon-brands" />} title="MongoDb" /> */}
                        <BrandItems icon={<SiCsharp className="icon-brands" />} title="CSharp" />
                      </div>
                    </div>
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                exit={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:col-span-1 col-span-2 row-span-1 lg:px-64 md:px-24 sm:px-12 duration-0 px-6 rounded-lg min-w-[300px] min-h-[200px] text-justify "
              >
                <div className="text-xl dark:text-white text-zinc-800 ">
                  <span className="flex-none">
                    <div className="flex mx-auto justify-center">
                      <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold text-center ">Tools</span>
                    </div>
                    <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                      <div className=" grid grid-cols-4 md:grid-cols-5 gap-y-4 gap-x-2 md:px-24 px-4 ">
                        <BrandItems icon={<FaGithub className="icon-brands" />} title="Github" />
                        <BrandItems icon={<SiAzuredevops className="icon-brands" />} title="Azure" />
                        <BrandItems icon={<SiMicrosoftsqlserver className="icon-brands" />} title="MsSQL" />
                        <BrandItems icon={<SiSwagger className="icon-brands" />} title="Swagger" />
                        <BrandItems icon={<SiPostman className="icon-brands" />} title="Postman" />
                        <BrandItems icon={<SiJira className="icon-brands" />} title="Jira" />
                        <BrandItems icon={<SiMicrosoftoffice className="icon-brands" />} title="MsTools" />
                        {/* <BrandItems icon={<FaFigma className="icon-brands" />} title="Figma" /> */}
                        <BrandItems icon={<SiAdobephotoshop className="icon-brands" />} title="Photoshop" />
                        <BrandItems icon={<SiAdobeillustrator className="icon-brands" />} title="Illustrator" />
                        <BrandItems icon={<SiUnity className="icon-brands" />} title="Unity" />
                      </div>
                    </div>
                  </span>
                </div>
              </motion.div>
            </>
          ) : activeAbout === "Experiences" ? (
            <AnimatePresence>
              <motion.div
                // initial={{ opacity: 0, y: 50 }}
                // transition={{ duration: 0.5 }}
                // exit={{ opacity: 0, y: 10 }}
                // whileInView={{ opacity: 1, y: 0 }}
                className=" col-span-2 row-span-4 md:mr-6 mr-0 duration-0 p-6 rounded-lg min-w-[300px] min-h-[200px] text-justify lg:px-72 md:px-16 "
              >
                <div className="text-xl dark:text-white text-zinc-800 ">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-none"
                  >
                    <div className="rounded-lg dark:bg-cyan-400 bg-cyan-600 p-4 dark:text-black text-white mt-12">
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        <span className=" md:text-4xl text-xl sm:col-span-2 font-semibold">Norima Technologies Inc.</span>
                        <span className="sm:text-right  text-sm">Jan 2022 - March 2023</span>
                      </div>
                      <div className="italic md:text-lg text-sm">
                        Software Engineer / Consultant <span className="not-italic">(FiDx)</span>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc ml-4 md:ml-8 space-y-4 text-sm md:text-xl">
                      <li>
                        Proficient in a variety of tools and programming languages including: <span className="dark:text-cyan-300 text-cyan-900 font-bold">.Net | C# | Jira | Angular | Swagger | MSSQL | Azure</span>
                      </li>
                      <li>
                        Adept at utilizing <span className="dark:text-cyan-300 text-cyan-900 font-bold">Agile methodologies</span> to effectively manage and complete tasks, ensuring timely delivery and quality results.{" "}
                      </li>
                      <li>
                        Experience in collaborating with <span className="dark:text-cyan-300 text-cyan-900 font-bold">cross-functional teams</span> to share knowledge, generate new ideas, and implement best practices to achieve project
                        objectives.{" "}
                      </li>
                      <li>
                        Skilled in <span className="dark:text-cyan-300 text-cyan-900 font-bold">developing clean, efficient,</span> and<span className="dark:text-cyan-300 text-cyan-900 font-bold"> well-documented code</span> that adheres to
                        industry standards and best practices.{" "}
                      </li>
                      <li>
                        Constantly striving to exceed expectations by providing the <span className="dark:text-cyan-300 text-cyan-900 font-bold">best possible solutions</span> to enhance product capabilities, while continuously learning and
                        staying up-to-date with the latest technologies and trends.
                      </li>
                    </ul>
                  </motion.div>

                  {/* <div className="min-w-screen border-b-[12px] dark:border-white border-black my-4"></div> */}
                  <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-none">
                    <div className="rounded-lg dark:bg-cyan-400 bg-cyan-600 p-4 dark:text-black text-white mt-12">
                      <div className="grid grid-cols-1 sm:grid-cols-3 ">
                        <span className=" md:text-4xl text-xl sm:col-span-2 font-semibold mt-">AFNI Philippines</span>
                        <span className="sm:text-right text-sm">Oct 2019 - Nov 2022</span>
                      </div>
                      <div className="italic md:text-lg text-sm">
                        Chat Support Professional <span className="not-italic">(Verizon)</span>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc ml-4 md:ml-8 space-y-4 text-sm md:text-xl">
                      <li>
                        Handling customer inquiries and providing prompt and <span className="dark:text-cyan-300 text-cyan-900 font-bold">professional support via chat</span> for a{" "}
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">leading telecommunications company in the United States</span>.
                      </li>
                      <li>
                        Verifying and processing customer orders, <span className="dark:text-cyan-300 text-cyan-900 font-bold">ensuring timely fulfillment</span> and following up on any issues that may arise.
                      </li>
                      <li>
                        Assisting customers with <span className="dark:text-cyan-300 text-cyan-900 font-bold">basic technical troubleshooting</span> and providing guidance on{" "}
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">product usage and features</span>.
                      </li>
                      <li>
                        Managing <span className="dark:text-cyan-300 text-cyan-900 font-bold">credit/debit card payments, invoicing,</span> and <span className="dark:text-cyan-300 text-cyan-900 font-bold">other financial transactions</span>{" "}
                        for customer accounts.
                      </li>
                      <li>
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold"> Identifying customer needs</span> and recommending appropriate service options, as well as up selling subscription{" "}
                      </li>
                      <li>
                        Maintaining accurate and up-to-date customer records and <span className="dark:text-cyan-300 text-cyan-900 font-bold">providing regular reports</span> on customer interactions and support metric
                      </li>
                      <li>
                        Continuously striving to <span className="dark:text-cyan-300 text-cyan-900 font-bold">improve customer satisfaction</span> by providing the best customer service experience.
                      </li>
                    </ul>
                  </motion.div>
                  {/* <div className="min-w-screen border-b-[12px] dark:border-white border-black my-4"></div> */}

                  <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-none">
                    <div className="rounded-lg dark:bg-cyan-400 bg-cyan-600 p-4 dark:text-black text-white mt-12">
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        <span className=" md:text-4xl text-xl sm:col-span-2 font-semibold ">Alorica Teleservices</span>
                        <span className="sm:text-right  text-sm">Sept 2017 - Oct 2019</span>
                      </div>
                      <div className="italic md:text-lg text-sm">
                        Customer Multi-support Specialist <span className="not-italic">(Amazon)</span>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc ml-4 md:ml-8 space-y-4 text-sm md:text-xl">
                      <li>
                        Trained in providing <span className="dark:text-cyan-300 text-cyan-900 font-bold">phone, email,</span> and <span className="dark:text-cyan-300 text-cyan-900 font-bold">chat support</span> for customers in the{" "}
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">United States and United Kingdom </span>for a leading retail company
                      </li>
                      <li>
                        Proficient in verifying and <span className="dark:text-cyan-300 text-cyan-900 font-bold">processing customer orders</span>, ensuring timely fulfillment and following up on any issues
                      </li>
                      <li>
                        Skilled in providing <span className="dark:text-cyan-300 text-cyan-900 font-bold">basic technical troubleshooting</span> and guidance on product usage and features to customers
                      </li>
                      <li>
                        Experienced in managing <span className="dark:text-cyan-300 text-cyan-900 font-bold">credit/debit card payments, invoicing,</span> and{" "}
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">other financial transactions</span> for customer account
                      </li>
                      <li>
                        Adept at identifying customer needs and <span className="dark:text-cyan-300 text-cyan-900 font-bold">recommending appropriate service options</span>, as well as up selling subscription
                      </li>
                      <li>
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">Strong communication skills</span> and ability to promote company's services and special offers to customers
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-none">
                    <div className="rounded-lg dark:bg-cyan-400 bg-cyan-600 p-4 dark:text-black text-white mt-12">
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        <span className=" md:text-4xl text-xl sm:col-span-2 font-semibold ">Sitel Philippines (OJT)</span>
                        <span className="sm:text-right  text-sm">Sept 2015 - January 2016</span>
                      </div>
                      <div className="italic md:text-lg text-sm">
                        Customer Service Representative <span className="not-italic">(Macys and Bloomingdales)</span>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc ml-4 md:ml-8 space-y-4 text-sm md:text-xl">
                      <li>
                        Trained in providing <span className="dark:text-cyan-300 text-cyan-900 font-bold">phone, email,</span> and <span className="dark:text-cyan-300 text-cyan-900 font-bold">chat support</span> for customers in the{" "}
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">United States </span>for a retail company
                      </li>
                      <li>
                        Proficient in verifying and <span className="dark:text-cyan-300 text-cyan-900 font-bold">processing customer orders</span>, ensuring timely fulfillment and following up on any issues
                      </li>
                      <li>
                        Skilled in providing <span className="dark:text-cyan-300 text-cyan-900 font-bold">basic technical troubleshooting</span> and guidance on product usage and features to customers
                      </li>
                      <li>
                        Experienced in managing <span className="dark:text-cyan-300 text-cyan-900 font-bold">credit/debit card payments, invoicing,</span> and{" "}
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">other financial transactions</span> for customer account
                      </li>
                      <li>
                        Providing good choice of items as well as <span className="dark:text-cyan-300 text-cyan-900 font-bold">recommending brands </span>that suites with their needs
                      </li>
                      <li>
                        <span className="dark:text-cyan-300 text-cyan-900 font-bold">Strong communication skills</span> and ability to promote company's services and special offers to customers
                      </li>
                    </ul>
                  </motion.div>
                  {/* <div className="min-w-screen border-b-[12px] dark:border-white border-black my-4"></div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AboutBlock;
