import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function LinkItems({ href, icon }) {

  return (
    <Link href={href ?? ''}target="_blank">
    <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.2 }} className="dark:text-black text-white mx-4 px-4 py-2 rounded-full dark:bg-blue-400 bg-cyan-400 hover:dark:bg-cyan-500 hover:bg-cyan-300" target="_blank">
        <FontAwesomeIcon icon={icon} />
    </motion.button>
    </Link>
  );
}

export default LinkItems;
