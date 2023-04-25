import { AnimatePresence, motion, useSpring } from "framer-motion";
import useCursor from "../hooks/CustomCursorHook";

const CustomCursor = () => {
  const cursorPos = useCursor();

  const cursorSpring = useSpring(cursorPos, { stiffness: 50, damping: 10 });


  return (
    <AnimatePresence>
      <motion.div className="cursor dark:mix-blend-difference" animate={{ x: cursorPos[0], y: cursorPos[1] }} transition={{ duration: 0 }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity }} className="circle hidden md:block dark:bg-white bg-black w-[16px] h-[16px] -left-2 -top-2" />
      </motion.div>
      <motion.div className="cursor dark:mix-blend-difference" animate={{ x: cursorPos[0], y: cursorPos[1] }} transition={{ duration: 0.2, restSpeed: 0.5 }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity }} className="circle hidden md:block border-2 border-black  dark:border-white dark:bg-white bg-none w-[50px] h-[50px] -left-6 -top-6" />
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomCursor;
