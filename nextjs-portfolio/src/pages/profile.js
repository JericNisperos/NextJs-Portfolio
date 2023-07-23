import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
import { BsDownload } from "react-icons/bs";

import { FaAngular, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, faAngular } from "react-icons/fa";
import { faFacebookF, faGithub, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { DiMysql } from "react-icons/di";
import { useTheme } from "next-themes";
import { faDownload, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Modal from "./components/Modal";
function Profile() {
  const [activeAbout, setActiveAbout] = useState("Introduction");
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const buttonVariants = {
    rest: {
      borderColor: "#fff",
      color: "#fff",
    },
    hover: {
      borderColor: "#06B6D4",
      color: "#06B6D4",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    active: {
      borderColor: "#fff",
      color: "#fff",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function LinkItems({ href, icon }) {
    return (
      <motion.span whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.2 }}>
        <Link href={href} className="mx-4 border px-4 py-2 rounded-full dark:border-white border-black hover:dark:bg-cyan-700 hover:bg-cyan-400" target="_blank">
          <FontAwesomeIcon icon={icon} />
        </Link>
      </motion.span>
    );
  }

  function BrandItems({ title, icon }) {
    return (
      <motion.span whileHover={{ scale: 0.9 }} className="has-tooltip text-transparent hover:dark:text-cyan-300 hover:text-zinc-900">
        {icon}
        <p className="text-lg text-center justify-center ">{title}</p>
      </motion.span>
    );
  }

  return (
    <div className="dark:bg-zinc-900 bg-zinc-100 transition-colors duration-1000 ease-in-out">
    <div className="max-w-[1626px] items-center justify-center mx-auto">
      <div className="pb-24 cursor-default ">
        <section className="text-4xl text-cyan-600 font-extrabold p-12 z-20 max-w-[1626px] items-center justify-center mx-auto relative">
          <div className="justify-between flex">
            <a className="flex text-cyan-600 dark:text-white text-lg md:text-2xl" href="/">jnisperos.space</a>

            <div className="has-tooltip dark:text-white text-black px-2 hover:text-cyan-500 hover:dark:text-cyan-500 ">
              <div className="tooltip text-xs rounded text-black dark:text-white bg-white dark:bg-gray-700 shadow-lg p-1 flex-none -mt-[-48px] -ml-4 z-60 ease-in-out">
                <div>{currentTheme === "dark" ? "Lightmode" : "Darkmode"}</div>
              </div>
              <span className="flex ">
                <motion.span whileHover={{ scale: 1.6, duration: 0.2 }} transition={{ duration: 0.5 }} whileTap={{ rotate: -1200 }} initial={{ scale: 1.0 }} className="origin-[50%_45%]">
                  <FontAwesomeIcon icon={currentTheme === "dark" ? faSun : faMoon} id="DarkMode" onClick={(e) => setTheme(currentTheme === "dark" ? "light" : "dark")} className=" hover:text-cyan-500 hover:dark:text-cyan-500" />
                </motion.span>
              </span>
            </div>
          </div>
        </section>
        <h1 className="flex text-center mx-auto justify-center text-4xl md:text-8xl">About Me</h1>
        <div className={`flex justify-center `}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mx-8 grid-flow-row-dense">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="col-span-2 p-6 rounded-lg min-w-[300px] min-h-[200px] duration-0 text-center items-center justify-center sm:mt-24"
            >
              <h3 className="text-6xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600 text-center justify-center mx-auto flex">JERIC NISPEROS</h3>
              <p className=" dark:text-white text-zinc-800 text-2xl">Software Engineer / Support Engineer / React Developer</p>
              <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center"></p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-1 col-span-2  md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-0 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold"></span>
                  </div>
                  <p className=" dark:text-white text-zinc-800 md:text-lg text-base text-center">
                    Experienced in <span className="dark:text-cyan-500 text-cyan-700 font-bold">Software Engineering</span> for <span className="dark:text-cyan-500 text-cyan-700 font-bold">1 year</span> and{" "}
                    <span className="dark:text-cyan-500 text-cyan-700 font-bold">E-Commerce and Telco Customer Support</span> for <span className="dark:text-cyan-500 text-cyan-700 font-bold">4 years</span>. I am passionate about leveraging
                    my skills and experiences to develop intuitive and user-friendly software and applications.
                    {/* Self-motivated individual with the ability to work independently or as a member of a team, seeking a stable and challenging role that utilizes my existing skills and experience while providing opportunities for personal
                    and professional growth. */}
                  </p>
                  <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center">
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }} onClick={(e) => handleOpenModal()} href="/Jeric_Nisperos-CV.pdf" download className="border border-cyan-500 px-4 py-2 rounded-lg bg-cyan-500 dark:text-gray-800 font-semibold hover:bg-cyan-300"><FontAwesomeIcon icon={faDownload} /> Download CV </motion.a>
                  </p>
                  {/* <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center">
                    <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faFacebookF} />
                    <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faLinkedinIn} />
                    <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faGithub} />
                  </p> */}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-1 col-span-2 row-span-1 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-0 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold underline">Tech Skills</span>
                  </div>
                  <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                    <div className=" grid grid-cols-4 md:grid-cols-5 gap-y-4 gap-x-2">
                      <BrandItems icon={<FaHtml5 className="icon-brands" />} title="Html5" />
                      <BrandItems icon={<FaCss3Alt className="icon-brands" />} title="CSS" />
                      <BrandItems icon={<FaJs className="icon-brands" />} title="Javascript" />
                      <BrandItems icon={<SiBootstrap className="icon-brands" />} title="Bootstrap" />
                      <BrandItems icon={<SiTailwindcss className="icon-brands" />} title="Tailwind" />
                      <BrandItems icon={<FaReact className="icon-brands" />} title="ReactJs" />
                      <BrandItems icon={<TbBrandReactNative className="icon-brands" />} title="React-Native" />
                      <BrandItems icon={<SiNextdotjs className="icon-brands" />} title="NextJs" />
                      <BrandItems icon={<FaAngular className="icon-brands" />} title="AngularJs" />
                      <BrandItems icon={<FaNodeJs className="icon-brands" />} title="NodeJs" />
                      <BrandItems icon={<SiExpress className="icon-brands" />} title="ExpressJs" />
                      <BrandItems icon={<SiFirebase className="icon-brands" />} title="Firebase" />
                      <BrandItems icon={<DiMysql className="icon-brands" />} title="MySQL" />
                      <BrandItems icon={<SiMongodb className="icon-brands" />} title="MongoDb" />
                      <BrandItems icon={<SiCsharp className="icon-brands" />} title="CSharp" />
                    </div>
                  </div>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:row-start-3 md:col-span-1 col-span-2 row-span-1 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-0 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold underline">Tech Tools</span>
                  </div>
                  <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                    <div className=" grid grid-cols-4 md:grid-cols-5 gap-y-4 gap-x-2">
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=" col-span-2 row-span-4 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-0 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold underline">Work Experiences</span>
                    <span className="dark:text-cyan-300 text-cyan-900 md:text-4xl text-xl sm:col-span-2 font-semibold">Norima Technologies Inc. </span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Jan 2022 - March 2023</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Software Engineer / Consultant (Client: FiDx)</div>
                  <ul className="mt-4 list-disc ml-4 md:ml-8 space-y-4 text-sm md:text-base">
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
                </span>

                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 ">
                    <span className="dark:text-cyan-300 text-cyan-900 md:text-4xl text-xl sm:col-span-2 font-semibold mt-">AFNI Philippines </span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Oct 2019 - Nov 2022</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Chat Support Professional (Client: Verizon)</div>
                  <ul className="mt-4 list-disc  ml-4 md:ml-8 space-y-4 text-sm md:text-base">
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
                </span>

                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-12">
                    <span className="dark:text-cyan-300 text-cyan-900 md:text-4xl text-xl sm:col-span-2 font-semibold mt-">Alorica Teleservices </span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Sept 2017 - Oct 2019</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Customer Multi-support Specialist (Client: Amazon)</div>
                  <ul className="mt-4 list-disc ml-4 md:ml-8 space-y-4 text-sm md:text-base">
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
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-1 col-span-2 row-span-1 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-0 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 flex-none font-semibold underline">Education</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Don Mariano Marcos Memorial State University</div>
                  <ul className="mt-4  ml-4 space-y-4 text-sm md:text-base">
                    <li>Bachelor of Science in Information Systems - Major in Marketing</li>
                    <li>
                      <span className="dark:text-cyan-300 text-cyan-900 font-bold">Thesis Title:</span> Collection and Disbursement Record Management System for the Sericulture and Research Development Institute
                    </li>
                  </ul>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              exit={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-1 col-span-2 row-span-1 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-0 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 flex-none font-semibold underline">Current Project:</span>
                  </div>
                  <div className="grid grid-cols-1 text-center">
                    <motion.a className="text-3xl dark:text-cyan-300 text-cyan-900 font-bold hover:underline" href="https://minecommunity.vercel.app" target="_blank">
                      MineCommunity
                    
                    </motion.a>
                    <div className=" text-xl font-bold text-center dark:text-white text-zinc-900"> Minecraft server packed with RPG and Role-playing features!</div>
                    {/* <div className="text-6xl dark:text-cyan-300 text-cyan-900 font-bold">
                      10+
                      <div className=" text-xl font-bold text-center dark:text-white text-zinc-900"> Projects Done</div>
                    </div> */}
                  </div>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        {isModalOpen && (
          <Modal onClose={handleCloseModal} closeButton={true}>
            {/* <p className="dark:text-cyan-300 text-cyan-500 text-4xl font-bold ">Success!</p> */}
            <h1 className="text-4xl text-cyan-500 mt-8 mx-8 font-bold">Thank you!</h1>
            <p className="text-white text-xl p-4 mt-4 text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;Thank you for taking the time to check my profile! By downloading my details, you agree that my information will only be used for job application and ensure it will never be used for personal gain or any illegal activities. Your understanding and compliance with these conditions are appreciated.
            
            
            </p>
            {/* <button className="mt-8 rounded-lg px-4 py-2 bg-cyan-500 text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-700 cursor-pointer mr-8">Download</button> */}

          </Modal>
        )}
      </div>
    </div>
    </div>
  );
}

export default Profile;
