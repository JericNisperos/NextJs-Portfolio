import React, { useState } from "react";
import { motion } from "framer-motion";

function Modal({ isOpen, onClose }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Open Extra Large Modal
      </button>

      <motion.div
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isModalOpen ? 1 : 0 }}
      >
        <motion.div className="bg-white rounded-lg overflow-hidden max-w-3xl" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
          {/* Your modal content goes here */}
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Extra Large Modal</h1>
            <p className="text-gray-600">This is an example of an extra large modal using Tailwind CSS, Framer Motion, and Next.js.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={(e) => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Modal;