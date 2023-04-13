
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center mx-auto w-[450px] text-center">
      <motion.div
        className="dark:bg-slate-600 bg-slate-600 p-4 rounded-lg shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{delay: 0.2}}
        exit={{ scale: 0 }}
      >
        {children}
        <button className="mt-8 rounded-lg px-4 py-2 bg-cyan-500 text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-700 cursor-pointer" onClick={onClose}>Close</button>

      </motion.div>
      {/* <motion.div
        className="absolute min-h-screen z-80 w-full bg-zinc-800 p-4 rounded-lg opacity-25"
        // onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      ></motion.div> */}


      
    </div>
  );
}

export default Modal;