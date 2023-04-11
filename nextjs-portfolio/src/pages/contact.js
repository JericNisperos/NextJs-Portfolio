import Link from "next/link";
import React from "react";
import Modal from "./components/Modal";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function contact() {
  const icons = [
    { id: 1, icon: faStar },
    { id: 2, icon: faStar },
    { id: 3, icon: faStar },
    { id: 4, icon: faStar },
    { id: 5, icon: faStar },
    { id: 6, icon: faStar },
    { id: 7, icon: faStar },
    { id: 8, icon: faStar },
    // Add more icons here
  ];
  const slideVariants = {
    initial: {
      transform: "translateX(0)",
    },
    animate: {
      transform: "translateX(calc(-250px * 7))",
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      {/* <div className="slider bg-black shadow-md h-100px mx-auto overflow-hidden relative w-960px">
        <div className="before-gradient absolute bg-gradient-to-r from-white to-transparent h-100px left-0 top-0 w-200px z-10" />
        <div className="after-gradient absolute bg-gradient-to-l from-white to-transparent h-100px right-0 top-0 transform rotate-180 w-200px z-10" />
        <motion.div className="slide-track flex" variants={slideVariants} initial="initial" animate="animate" >
          <div className="slide h-100px w-250px">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" alt="" className="h-full w-full" />
          </div>
          <div className="slide h-100px w-250px">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" alt="" className="h-full w-full" />
          </div>
          <div className="slide h-100px w-250px">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" alt="" className="h-full w-full" />
          </div>
          <div className="slide h-100px w-250px">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" alt="" className="h-full w-full" />
          </div>
          <div className="slide h-100px w-250px">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" alt="" className="h-full w-full" />
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}

export default contact;
