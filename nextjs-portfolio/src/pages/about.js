import { faFacebook, faFacebookF, faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <div className="dark:bg-zinc-900 bg-zinc-100 min-h-screen transition-colors duration-1000 ease-in-out pb-24">
        <h1 className="flex text-center mx-auto justify-center text-8xl">About Me</h1>
        <div className={`lg:mx-48 md:mx-16 flex justify-center `}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 grid-flow-row-dense">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
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
              transition={{ delay: 0.2, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className=" dark:bg-neutral-800 bg-zinc-200 duration-500 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-center"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <p className=" dark:text-white text-zinc-800 text-2xl">
                Self-motivated individual with the ability to work independently or as a member of a team, seeking a stable and challenging role that utilizes my existing skills and experience while providing opportunities for personal and
                professional growth.
              </p>
              <p className="text-2xl dark:text-white text-zinc-800 mt-8 flex mx-auto items-center justify-center">
                <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faFacebookF} />
                <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faLinkedinIn} />
                <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faGithubAlt} />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className=" col-span-2 row-span-3 mr-6 md:mr-0 dark:bg-neutral-800 bg-zinc-200 duration-500 p-6 rounded-lg shadow-md min-w-[300px] min-h-[200px] text-justify"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-cyan-300 text-cyan-600"></h3>
              <div className="text-xl dark:text-white text-zinc-800 ">
                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold">Norima Technologies Inc.</span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Jan 2021 - Feb 2023</span>
                  </div>
                  <div className="italic">Software Engineer / Consultant</div>
                  <ul className="mt-4 list-disc ml-8 space-y-4">
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
                      Skilled in <span className="dark:text-cyan-300 text-cyan-900 font-bold">developing clean, efficient, and well-documented code</span> that adheres to industry standards and best practices.{" "}
                    </li>
                    <li>
                      Constantly striving to exceed expectations by providing the <span className="dark:text-cyan-300 text-cyan-900 font-bold">best possible solutions</span> to enhance product capabilities, while continuously learning and
                      staying up-to-date with the latest technologies and trends.
                    </li>
                  </ul>
                </span>

                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-12">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold mt-">AFNI Philippines</span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Oct 2019 - Nov 2022</span>
                  </div>
                  <div className="italic">Chat Support Professional</div>
                  <ul className="mt-4 list-disc ml-8 space-y-4">
                    <li>Handling customer inquiries and providing prompt and professional support via chat for a leading telecommunications company in the United States.</li>
                    <li>Verifying and processing customer orders, ensuring timely fulfillment and following up on any issues that may arise.</li>
                    <li>Assisting customers with basic technical troubleshooting and providing guidance on product usage and features.</li>
                    <li>Managing credit/debit card payments, invoicing, and other financial transactions for customer accounts.</li>
                    <li>Identifying customer needs and recommending appropriate service options, as well as up selling subscription </li>
                    <li>Maintaining accurate and up-to-date customer records and providing regular reports on customer interactions and support metric</li>
                    <li>Continuously striving to improve customer satisfaction by providing the best customer service experience.</li>
                  </ul>
                </span>

                <span className="flex-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-12">
                    <span className="dark:text-cyan-300 text-cyan-900 text-4xl sm:col-span-2 font-semibold mt-">Alorica Teleservices</span>
                    <span className="sm:text-right dark:text-white text-cyan-900 text-sm">Sept 2017 - Oct 2019</span>
                  </div>
                  <div className="italic">Customer Multi-support Specialist</div>
                  <ul className="mt-4 list-disc ml-8 space-y-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
