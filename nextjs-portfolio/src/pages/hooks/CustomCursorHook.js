import { useEffect, useState } from "react";

export const useCursor = () => {
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  
    useEffect(() => {
      const onMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', onMouseMove);
  
      return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);
  
    return cursorPos;
  };