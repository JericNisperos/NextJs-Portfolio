import { motion } from 'framer-motion';

const StarShoot = ({ x, y, duration }) => {
  const path = `M0,0 L\${Math.random() * 100},\${Math.random() * 100}`;

  return (
    <motion.svg
      className="absolute"
      width="100"
      height="100"
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration, repeat: Infinity, repeatType: 'loop' }}
    >
      <motion.path
        d={path}
        strokeWidth="1"
        stroke="white"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: 'loop' }}
      />
    </motion.svg>
  );
};

export default StarShoot;