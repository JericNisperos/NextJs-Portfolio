import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const TypingAnimation = () => {
    const [index, setIndex] = useState(0);
    const [word, setWord] = useState('Web Developer');
  
    useEffect(() => {
      const words = ['Web Developer', 'Software Engineer'];
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        
        setWord('');
        setTimeout(() => {
          for (let i = 0; i <= words[index].length; i++) {
            setTimeout(() => {
              setWord(words[index].slice(0, i));
            }, i * 100);
          }
        }, 500);
      }, 4000);
      
      return () => clearInterval(interval);
    }, [index]);

  
    return (
      <motion.p
        className="text-4xl text-center font-bold"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {word}
      </motion.p>
    );
  };

export default TypingAnimation;