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
        <div className="circle " />
      </motion.div>
    );
  };

  export default CustomCursor;