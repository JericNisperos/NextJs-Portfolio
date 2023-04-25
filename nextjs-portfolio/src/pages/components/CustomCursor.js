import { AnimatePresence, motion, useSpring } from "framer-motion";
import useCursor from "../hooks/CustomCursorHook";

const CustomCursor = () => {
  const cursorPos = useCursor();

  const cursorSpring = useSpring(cursorPos, { stiffness: 50, damping: 10 });


  return (
    <AnimatePresence>
      <motion.div className="cursor" animate={{ x: cursorPos[0], y: cursorPos[1] }} transition={{ duration: 0 }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity }} className="circle hidden md:block invert dark:invert-0 bg-gradient-to-bl from-orange-600 via-purple-600 to-blue-600 w-[16px] h-[16px]" />
      </motion.div>
      {/* <motion.div className="cursor" animate={{ x: cursorPos[0], y: cursorPos[1] }} transition={{ duration: 0.1, restSpeed: 0.5 }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity }} className=" hidden md:block border-4 border-red-500 w-[50px] h-[50px]" />
      </motion.div> */}
    </AnimatePresence>
  );
};

export default CustomCursor;
