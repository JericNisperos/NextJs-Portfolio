import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact, faAngular } from "react-icons/fa";
import { faFacebookF, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function about() {
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
    <>
      <div className="dark:bg-zinc-900 bg-zinc-100 min-h-screen transition-colors duration-1000 ease-in-out pb-24">
        <h1 className="flex text-center mx-auto justify-center text-8xl">About Me</h1>
        <div className={`lg:mx-48 md:mx-16 flex justify-center `}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 grid-flow-row-dense">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className="col-span-2 duration-500 p-6 rounded-lg min-w-[300px] min-h-[200px] text-center items-center justify-center sm:mt-24"
            >
              <h3 className="text-6xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600">JERIC NISPEROS</h3>
              <p className=" dark:text-white text-zinc-800 text-2xl">Software Engineer / Web Developer / Game Developer / Game Enthusiast</p>
              <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center"></p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className="md:col-span-1 col-span-2  md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-500 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold"></span>
                  </div>
                  <p className=" dark:text-white text-zinc-800 md:text-xl text-base">
                    Self-motivated individual with the ability to work independently or as a member of a team, seeking a stable and challenging role that utilizes my existing skills and experience while providing opportunities for personal
                    and professional growth.
                  </p>
                  <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center">
                    <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faFacebookF} />
                    <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faLinkedinIn} />
                    <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faGithubAlt} />
                  </p>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className="md:col-span-1 col-span-2 row-span-1 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-500 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold">Tech Skills</span>
                  </div>
                  <div className="mt-4 list-none md:text-base text-4xl text-center justify-center items-center">
                    <div className=" grid grid-cols-5 gap-y-4 gap-x-2">
                      <BrandItems icon={<FaHtml5 className="icon-brands" />} title="Html5" />
                      <BrandItems icon={<FaCss3Alt className="icon-brands" />} title="CSS" />
                      <BrandItems icon={<FaJs className="icon-brands" />} title="Javascript" />
                      <BrandItems icon={<FaReact className="icon-brands" />} title="ReactJs" />
                      <BrandItems icon={<SiNextdotjs className="icon-brands" />} title="NextJs" />
                      <BrandItems icon={<FaAngular className="icon-brands" />} title="AngularJs" />
                      <BrandItems icon={<FaNodeJs className="icon-brands" />} title="NodeJs" />
                      <BrandItems icon={<SiExpress className="icon-brands" />} title="ExpressJs" />
                      <BrandItems icon={<SiFirebase className="icon-brands" />} title="Firebase" />
                      <BrandItems icon={<SiMongodb className="icon-brands" />} title="MongoDb" />
                    </div>
                  </div>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className=" col-span-2 row-span-4 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-500 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 md:text-4xl text-xl sm:col-span-2 font-semibold">Norima Technologies Inc.</span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Jan 2022 - Feb 2023</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Software Engineer / Consultant</div>
                  <ul className="mt-4 list-disc ml-4 sm:ml-0 md:ml-8 space-y-4 text-sm md:text-base">
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
                    <span className="dark:text-cyan-300 text-cyan-900 md:text-4xl text-xl sm:col-span-2 font-semibold mt-">AFNI Philippines</span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Oct 2019 - Nov 2022</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Chat Support Professional</div>
                  <ul className="mt-4 list-disc ml-0 sm:ml-0 md:ml-8 space-y-4 text-sm md:text-base">
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
                    <li>Maintaining accurate and up-to-date customer records and providing regular reports on customer interactions and support metric</li>
                    <li>Continuously striving to improve customer satisfaction by providing the best customer service experience.</li>
                  </ul>
                </span>

                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-12">
                    <span className="dark:text-cyan-300 text-cyan-900 md:text-4xl text-xl sm:col-span-2 font-semibold mt-">Alorica Teleservices</span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Sept 2017 - Oct 2019</span>
                  </div>
                  <div className="italic md:text-lg text-sm">Customer Multi-support Specialist</div>
                  <ul className="mt-4 list-disc ml-0 md:ml-8 space-y-4 text-sm md:text-base">
                    <li>Trained in providing phone, email, and chat support for customers in the United States and United Kingdom for a leading retail company</li>
                    <li>Proficient in verifying and processing customer orders, ensuring timely fulfillment and following up on any issues</li>
                    <li>Skilled in providing basic technical troubleshooting and guidance on product usage and features to customers</li>
                    <li>Experienced in managing credit/debit card payments, invoicing, and other financial transactions for customer account</li>
                    <li>Adept at identifying customer needs and recommending appropriate service options, as well as up selling subscription</li>
                    <li>Strong communication skills and ability to promote company's services and special offers to customers</li>
                  </ul>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className="md:col-span-1 col-span-2 row-span-2 md:mr-6 mr-0 dark:bg-neutral-800 bg-zinc-200 duration-500 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
             
            </motion.div>

            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
