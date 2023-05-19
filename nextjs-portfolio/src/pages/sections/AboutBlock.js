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
        <p className="text-lg text-center justify-center">{title}</p>
      </motion.span>
    );
  }

  return (
    <div id="about">
      <div className="md:text-xl text-lg dark:text-white text-zinc-800 w-full px-8 md:px-48 cursor-none ">
        {/* <motion.p className=" cursor-none text-4xl justify-center text-center ">About Me</motion.p> */}
        <motion.span class="cursor-none text-4xl flex justify-center items-center">
          <span class="relative my-8">
            <span class="absolute inset-0 border-b-4 border-blue-400"></span>
            <span class="relative z-10 px-4">About Me</span>
          </span>
        </motion.span>

        <section className="flex-none max-w-[1226px] items-center justify-center mx-auto py-4">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="col-span-1 items-center justify-center text-center px-12 py-12 my-auto">
              <motion.img
                src="https://media.licdn.com/dms/image/C4D03AQFSw5IUBtJMFQ/profile-displayphoto-shrink_800_800/0/1656220254047?e=1686182400&v=beta&t=J5XvkLlyzNwC7DBRnjh0ny925D_VO0prFlRVq0MufZA"
                alt="Profile"
                className="col-span-1 w-full h-auto rounded-full shadow-md items-center justify-center p-4 border-4 border-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="col-span-2 max-w-[1226px]">
              <motion.ul initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className=" dark:text-white text-zinc-800 md:text-2xl text-justify">
                <li className="">
                  &nbsp;&nbsp;&nbsp;&nbsp; Hi there! My name is <span className="text-cyan-500">Jeric</span>, and I am a self-motivated individual who has the ability to work both independently and as part of a team. I am currently seeking
                  a stable and challenging role that can utilize my existing skills and experience while providing opportunities for personal and professional growth.
                </li>
                <li className="pt-8">
                  &nbsp;&nbsp;&nbsp;&nbsp;Apart from my professional life, I am also passionate about hobbies like playing the piano and video games. These hobbies have taught me important skills such as patience, attention to detail, and
                  the ability to work under pressure. I have also developed a strong sense of creativity and imagination that I believe can be useful in any work environment.
                </li>

                <li className="pt-8">
                  &nbsp;&nbsp;&nbsp;&nbsp;One of my significant accomplishments is the continuous development and management of one of the largest Minecraft Game Networks in the Philippines. This network has expanded to encompass over 3000
                  members, and in my capacity as the Head of Development, I have effectively introduced new features, enhanced existing ones, and resolved issues to ensure seamless gameplay for our players. Through this experience, I have
                  further sharpened my technical expertise and interpersonal skills, positioning myself as a valuable asset to any team.{" "}
                </li>
                {/* <li className="pt-8">
                    &nbsp;&nbsp;&nbsp;&nbsp;I am excited about the prospect of joining a dynamic and forward-thinking organization that can provide opportunities for growth and development. Thank you for considering my application.
                  </li> */}
              </motion.ul>
              <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center"></p>
            </div>
          </div>
        </section>

        {/* <section className="pt-24 pb-28 relative w-11/12 mx-auto max-w-[1226px]" id="about">
          <img alt="" src="/images/blob1.svg" width={215} height={157} layout="absolute" className="w-96 md:w-[500px] -z-10 opacity-40 blur-3xl md:opacity-20 md:left-[200px]" loading="lazy" />
          <h2 className="mb-16 font-extrabold font-header relative text-2xl md:text-3xl">
            About me<span className="absolute left-0 w-[70px] -bottom-2 md:-bottom-4 h-[2px] bg-green"></span>
          </h2>
          <div className="mt-12 md:flex-row flex flex-col gap-10 md:gap-16 md:items-center">
            <div className="md:w-36 md:h-36 w-32 h-32 rounded-full shrink-0 overflow-hidden outline outline-green outline-offset-8 md:order-1 aos-init aos-animate" data-aos="fade-left">
              <img alt="profile" src="/images/profile.jpg" width={3840} height={3840} layout="responsive" className="object-cover h-full w-full" quality={75} decoding="async" loading="lazy" />
            </div>
            <p className="text-light-slate md:max-w-[520px] mx-auto md:text-base md:text-start md:mx-0">
              Hello, my name is Loyd Cose and I'm from the Philippines. Before I started college, I worked as a graphic designer. I enjoyed the creative process of designing graphics, but ultimately decided to pursue a career in technology.
              <br />
              <br />I am a fullstack developer with a background in graphic design, My strong foundation in UI/UX design, paired with my technical skills, allow me to create dynamic and user-friendly web applications.
            </p>
          </div>
        </section> */}

        <>
          <span className="items-center justify-center mx-auto flex">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center max-w-[1226px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                exit={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="col-span-1 duration-0 p-6 rounded-lg text-justify"
              >
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
