import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import nebula from "../../public/images/nebula_1.png";

// Hue 200-260 keeps every star in the blue/cyan family.
const randomColor = () => `hsl(${200 + Math.floor(Math.random() * 60)}, ${70 + Math.floor(Math.random() * 30)}%, ${50 + Math.floor(Math.random() * 30)}%)`;

const StarBg = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Stars and nebula both drift 200px up over the full page scroll.
  const starY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const nebulaY = useTransform(scrollYProgress, [0, 1], [-555, -755]);

  // Star positions are random and the count depends on window width, so none of
  // this can match the server render. Generate once, after mount.
  // ponytail: count is fixed at first paint; recompute on resize if it ever matters.
  const [width, setWidth] = useState(0);
  useEffect(() => setWidth(window.innerWidth), []);

  const stars = useMemo(() => {
    if (!width) return [];
    const count = width <= 770 ? 10 : width <= 1024 ? 25 : 50;
    return Array.from({ length: count }, () => ({
      size: Math.random() * 5 + 5,
      left: Math.random() * 100 + "vw",
      top: Math.random() * 100 + "vh",
      duration: Math.random() * 2 + 1,
      color: randomColor(),
    }));
  }, [width]);

  if (!width) return null;
  const mobile = width <= 770;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div className={`absolute top-0 w-[1940px] max-w-none ${mobile ? "-left-[100px]" : "-left-[525px]"}`} style={mobile ? undefined : { y: reduce ? -555 : nebulaY }}>
        <Image src={nebula} alt="" priority sizes="1940px" className="invert dark:invert-0" />
      </motion.div>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full invert dark:invert-0"
          style={{ width: s.size, height: s.size, left: s.left, top: s.top, y: reduce ? 0 : starY, background: s.color }}
          animate={reduce ? { opacity: 0.7 } : { opacity: [0, 1, 0] }}
          transition={reduce ? { duration: 0 } : { duration: s.duration, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default StarBg;
