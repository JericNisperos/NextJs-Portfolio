import { motion } from "framer-motion";
import useCursor from "../hooks/CustomCursorHook";

const CustomCursor = () => {
    const cursorPos = useCursor();
  
    return (
      <motion.div
        className="cursor"
        animate={{ x: cursorPos[0], y: cursorPos[1] }}
        transition={{ duration: 0 }}
      >
        <motion.div 
        animate={{rotate: 360}}
        transition={{duration: 5, repeat: Infinity}}
        
        className="circle hidden md:block invert dark:invert-0 bg-gradient-to-bl from-orange-600 via-purple-600 to-blue-600" />
      </motion.div>
    );
  };

  export default CustomCursor;