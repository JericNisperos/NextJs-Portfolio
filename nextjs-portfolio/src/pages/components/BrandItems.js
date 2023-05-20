import React from "react";
import { motion } from "framer-motion";

function BrandItems({ title, icon, desc }) {
  return (
    <motion.span whileHover={{ scale: 0.9 }} className="has-tooltip text-transparent hover:dark:text-cyan-300 hover:text-zinc-900">
      <span>
        {icon}
      </span>

      <p className="text-lg text-center justify-center">{title}</p>
    </motion.span>
  );
}

export default BrandItems;
