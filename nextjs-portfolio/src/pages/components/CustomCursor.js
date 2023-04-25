const { useCursor } = require("../hooks/CustomCursorHook");
import { motion } from "framer-motion";

const CustomCursor = () => {
    const cursorPos = useCursor();
    console.log(cursorPos);
  
    return (
      <motion.div
        className="cursor"
        animate={{ x: cursorPos.x, y: cursorPos.y }}
        transition={{ duration: 0 }}
      >
        <motion.div 
        animate={{rotate: 360}}
        transition={{duration: 0, repeat: Infinity}}
        
        className="circle bg-gradient-to-bl from-orange-600 via-purple-600 to-blue-600 duration-0" />
      </motion.div>
    );
  };

  export default CustomCursor;