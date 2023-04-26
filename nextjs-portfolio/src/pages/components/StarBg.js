import { motion, useTransform, useScroll } from "framer-motion";
import { IoPlanet } from "react-icons/io5";

const Star = ({ size, x, y, duration, top, color }) => (
  <motion.div
    className={`absolute rounded-full dark:invert-0 invert`} //dark:bg-white bg-black
    style={{
      width: size,
      height: size,
      top: y,
      left: x,
      y: top,
      background: color,
    }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration, repeat: Infinity, repeatType: "loop" }}
  />
);

const StarBg = () => {
  const stars = [];
  const stars2 = [];

  const getViewportWidth = () => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  };
  const width = getViewportWidth();
  const getNumberOfStars = () => {
    if (width <= 770) {
      return 10;
    } else if (width <= 1024) {
      return 25;
    } else {
      return 50;
    }
  };

  const StarNumber = getNumberOfStars();

  const { scrollYProgress } = useScroll();
  const topPosition = useTransform(scrollYProgress, [0, 1], [-555, -755]);
  const topPosition2 = useTransform(scrollYProgress, [0, 1], [-277.5, -377.5]);

  const randomColor = () => {
    const hue = Math.floor(Math.random() * 60) + 200; // Restrict hue to 200-260 for purple to blue colors
    const saturation = Math.floor(Math.random() * 30) + 70; // Saturation between 70-100%
    const lightness = Math.floor(Math.random() * 30) + 50; // Lightness between 50-80%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  for (let i = 0; i < StarNumber; i++) {
    const size = Math.random() * 5 + 5;
    const x = Math.random() * 100 + "vw";
    const y = Math.random() * 100 + "vh";
    const duration = Math.random() * 2 + 1;
    const color = randomColor();

    stars.push(<Star key={i} size={size} x={x} y={y} duration={duration} color={color} top={topPosition} />);
  }

  for (let i = 0; i < StarNumber * 2; i++) {
    const size = Math.random() * 5 + 5;
    const x = Math.random() * 100 + "vw";
    const y = Math.random() * 100 + "vh";
    const duration = Math.random() * 2 + 1;
    const color = randomColor();

    stars2.push(<Star key={i} size={size} x={x} y={y} duration={duration} color={color} top={topPosition2} />);
  }

  return (
    <>
      {/* <p className="relative text-6xl left-[300px] top-[200px]" style={{ top: topPosition }}>
        <IoPlanet />
      </p> */}

      <div className="fixed top-0 left-0 w-full h-full z-1">
        {width <= 770 ? (
          <motion.img src="/images/nebula_1.png" className={`relative sm:-left-[100px] dark:invert-0 invert`} />
        ) : (
          <motion.img src="/images/nebula_1.png" className={`relative sm:-left-[525px] dark:invert-0 invert`} style={{ top: topPosition }} />
        )}
        {stars}
        {/* {stars2} */}
      </div>
    </>
  );
};

export default StarBg;
