import { motion } from 'framer-motion';

const StarShoot = ({ x, y, duration, size, color }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      x: x,
      y: y,
    }}
    initial={{ x: '-10%' }}
    animate={{ x: '110%' }}
    transition={{ duration, repeat: Infinity, repeatType: 'loop' }}
  />
);

export default StarShoot;