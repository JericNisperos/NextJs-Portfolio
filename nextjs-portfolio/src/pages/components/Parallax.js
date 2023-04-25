import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ src, yOffset }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1], [0, yOffset]);
  
    return (
      <motion.div
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${src})`,
          y: y,
        }}
      ></motion.div>
    );
  };

export default Parallax;