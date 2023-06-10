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
import { faFacebookF, faGithub, faGithubAlt, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import BrandItems from "../components/BrandItems";
import LinkItems from "../components/LinkItems";

function AboutBlock() {
  const [activeAbout, setActiveAbout] = useState("Introduction");

  return (
    <div id="about">
      <div className="md:text-xl text-lg dark:text-white text-zinc-800 w-full px-8 md:px-48 cursor-none ">
        <motion.span className="cursor-none text-4xl flex justify-center items-center">
          <span className="relative my-8">
            <span className="absolute inset-0 border-b-4 border-blue-400"></span>
            <span className="relative z-10 px-4">About Me</span>
          </span>
        </motion.span>

        <section className="flex-none max-w-[1226px] items-center justify-center mx-auto py-4">
          <div className="grid xl:grid-cols-3 grid-cols-1">
            <div className="col-span-1 items-center justify-center text-center px-12 py-12 my-auto">
              <motion.img
                src="profile.jpg"
                alt="Profile"
                className="col-span-1 w-full h-auto rounded-full shadow-md items-center justify-center p-4 border-4 border-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="flex mx-auto items-center justify-center my-8">
                <LinkItems href="https://www.linkedin.com/in/jeric-nisperos-38055a11b/" icon={faLinkedinIn} />
                <LinkItems href="https://github.com/JericNisperos" icon={faGithub} />
                <LinkItems href="https://www.instagram.com/_nisperosjeric/" icon={faInstagram} />
              </div>
            </div>

            <div className="col-span-2 max-w-[1226px] text-sm md:text-base">
              <motion.ul initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className=" dark:text-gray-300 text-zinc-800 md:text-2xl text-justify">
                <li className="">
                  &nbsp;&nbsp;&nbsp;&nbsp;Experienced in <span className="text-cyan-500">Software Engineering</span> for <span className="text-cyan-500">1 year</span> and{" "}
                  <span className="text-cyan-500">E-Commerce and Telco Customer Support</span> for <span className="text-cyan-500">4 years</span>. Specialize in <span className="text-cyan-500">Front-End/UI development</span> using HTML,
                  CSS, JavaScript, Bootstrap, React (Next.js), and TailwindCSS. Additional skills includes C#, .Net, AngularJS, MsSQL and Swagger. Skilled in creating dynamic and responsive web applications.
                </li>

                <li className="pt-8">
                  &nbsp;&nbsp;&nbsp;&nbsp; One of my significant accomplishments is the continuous development and management of one of the largest Minecraft Game Networks in the Philippines. This network has expanded to encompass over{" "}
                  <span className="text-cyan-500">3000 members</span> for nearly 4 years, and in my capacity as the <span className="text-cyan-500">Senior Development Manager</span>, I have effectively added new and unique features, fixed
                  bugs, managed a team, and handled day-to-day concerns from players and staff team to ensure seamless gameplay. Through these experiences, I have further sharpened my technical expertise, management skills and interpersonal
                  skills, positioning myself as a valuable asset to any team.
                </li>
              </motion.ul>
              <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center"></p>
            </div>
          </div>
        </section>

        <>
          <span className="items-center justify-center mx-auto flex">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center max-w-[1226px]">
              <motion.div initial={{ opacity: 0, x: -50 }} transition={{ delay: 0.4, duration: 0.5 }} exit={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, x: 0 }} className="col-span-1 duration-0 p-6 rounded-lg text-justify">
                <div className="text-xl dark:text-white text-zinc-800">
                  <span className="flex-none">
                    <div className="flex justify-center">
                      <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold text-center ">Stacks</span>
                    </div>
                    <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                      <div className=" grid grid-cols-4 md:grid-cols-6 gap-y-4 gap-x-2 ">
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
                        {/* <BrandItems icon={<DiMysql className="icon-brands" />} title="MySQL" /> */}
                        {/* <BrandItems icon={<SiMongodb className="icon-brands" />} title="MongoDb" /> */}
                        <BrandItems icon={<SiCsharp className="icon-brands" />} title="CSharp" />
                      </div>
                    </div>
                  </span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} transition={{ delay: 0.4, duration: 0.5 }} exit={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, x: 0 }} className="col-span-1 duration-0 p-6 rounded-lg text-justify">
                <div className="text-xl dark:text-white text-zinc-800">
                  <span className="flex-none">
                    <div className="flex justify-center">
                      <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold text-center ">Tools</span>
                    </div>
                    <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                      <div className=" grid grid-cols-4 md:grid-cols-5 gap-y-4 gap-x-2 ">
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
            </div>
          </span>
        </>
      </div>
    </div>
  );
}

export default AboutBlock;
