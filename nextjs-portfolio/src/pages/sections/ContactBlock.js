import Link from "next/link";
import React, { useRef, useState } from "react";
import Modal from "../components/Modal";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { faDiscord, faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function ContactBlock() {
  const form = useRef();

  const [username, setUsername] = useState();
  const [useremail, setUserEmail] = useState();
  const [message, setMessage] = useState();
  const [messageLength, setMessageLength] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jericnisperos", "template_0644tgj", form.current, "RGSv6lmfsbIbL5NsQ").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    console.log(`Message Sent: ${username} , ${useremail}, ${message} , ${messageLength}`);
    setUsername("");
    setUserEmail("");
    setMessage("");
    handleOpenModal();
  };

  function LinkItems({ href, icon }) {
    return (
      <motion.span whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.2 }}>
        <Link href={href} className="mx-4 border px-4 py-2 rounded-full dark:border-white border-black hover:dark:bg-cyan-500 hover:bg-cyan-300" target="_blank">
          <FontAwesomeIcon icon={icon} />
        </Link>
      </motion.span>
    );
  }

  return (
    <div id="contact" className="max-w-[1226px] justify-center items-center flex mx-auto relative transition-colors duration-0 ease-in-out pt-12 pb-24  dark:bg-zinc-900 bg-white">
      {/* <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="font-bold mb-4 text-center text-4xl md:text-6xl dark:text-white text-black">
        Reach me Out!
      </motion.h1> */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} exit={{ opacity: 0, y: 10 }} className="flex justify-center ">
        <div className=" mx-8 mt-12 grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-bl  rounded-lg">
          <div className="grid grid-cols-1 pt-4 mt-4 mb-4 ">
            <div className="flex flex-col space-y-4 mb-8 px-4 text-center ">
              <p className=" dark:text-cyan-500 text-cyan-400 md:text-6xl text-3xl text-center font-semibold">Reach out to any of my Accounts!</p>


              <p className=" dark:text-white text-zinc-800 md:text-xl text-center text-2xl mt-8">I strive to provide timely responses and typically reply within 2 to 6 hours. I appreciate your patience in the meantime.</p>
            
              <div className="text-2xl dark:text-white text-zinc-800 flex mx-auto items-center justify-center mt-8">
                <div className="grid grid-cols-4 items-center justify-center mx-auto">
                  <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faFacebookF} />
                  <LinkItems href="https://www.linkedin.com/in/jeric-nisperos-38055a11b/" icon={faLinkedinIn} />
                  <LinkItems href="https://github.com/JericNisperos" icon={faGithub} />
                  <LinkItems href="https://www.instagram.com/_nisperosjeric/" icon={faInstagram} />
                  {/* <LinkItems href="https://www.facebook.com/NisperosJeric" icon={faDiscord} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 rounded-lg mt-8">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 mb-8 px-4 ">
                <p className=" dark:text-white text-zinc-800 md:text-2xl text-lg">Or send me an email directly!</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 text-center mx-auto gap-4 w-full flex-none">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="grid-cols-1 dark:bg-zinc-800 bg-slate-100 placeholder:text-zinc-600 dark:placeholder:text-slate-200    shadow-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    value={useremail}
                    required
                    onChange={(e) => setUserEmail(e.target.value)}
                    className=" dark:bg-zinc-800 bg-slate-100 placeholder:text-zinc-600 dark:placeholder:text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300  "
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={message}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMessageLength(e.target.value.length);
                  }}
                  className={`dark:bg-zinc-800 bg-slate-100 placeholder:text-zinc-600 dark:placeholder:text-slate-200 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 h-60`}
                ></textarea>
                <div className="text-center items-center cursor-none">
                  <input type="submit" value="Send" className=" cursor-none w-3/12  rounded-lg px-4 py-2 bg-cyan-500 text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-700" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </motion.div>
      {/* <button onClick={handleOpenModal}>open</button> */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {/* <p className="dark:text-cyan-300 text-cyan-500 text-4xl font-bold ">Success!</p> */}
          <p className="text-white text-xl p-4 mt-4 text-justify">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;Your message has been sent. Thank you for contacting me. I strive to provide timely responses and typically reply within 2 to 6 hours. I appreciate your patience in the meantime. If you have any urgent concerns, please feel
            free to reach out to me directly thru my active social media accounts. Thank you again for your message.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default ContactBlock;
