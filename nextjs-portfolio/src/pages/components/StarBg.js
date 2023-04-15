// components/StarryBackground.js
import { motion } from 'framer-motion';
import StarShoot from './StarShoot';


const Star = ({ size, x, y, duration, color }) => (
    
  <motion.div
    className={`absolute  rounded-full dark:invert`} 
    style={{
      width: size,
      height: size,
      top: y,
      left: x,
      backgroundColor: color,
    }}
    drag
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration, repeat: Infinity, repeatType: 'loop' }}
  />
);

const StarBg = () => {
  const stars = [];

  const shootingStarProbability = 0.8;

  if (Math.random() < shootingStarProbability) {
    const x = Math.random() * 100 + 'vw';
    const y = Math.random() * 100 + 'vh';
    const duration = Math.random() * 2 + 1;
    stars.push(<StarShoot key="shooting-star" x={x} y={y} duration={duration} />);
  }

  const randomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, 80%)`;
  };

  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 5 + 5;
    const x = Math.random() * 100 + 'vw';
    const y = Math.random() * 100 + 'vh';
    const duration = Math.random() * 2 + 1;
    const color = randomColor();

    stars.push(<Star key={i} size={size} x={x} y={y} duration={duration} color={color} />);
  }


  

  return (
    <div className="fixed top-0 left-0 w-full h-full z-1">
      {stars}
    </div>
  );
};

export default StarBg;