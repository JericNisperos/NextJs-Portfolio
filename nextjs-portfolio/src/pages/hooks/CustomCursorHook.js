import React, { useEffect, useState } from 'react';

function useCursor() {
    const [cursorPos, setCursorPos] = useState([-100, -100 ]);
  
    useEffect(() => {
      const onMouseMove = (e) => {
        setCursorPos([ e.clientX, e.clientY ]);
      };
      window.addEventListener('mousemove', onMouseMove);
  
      return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);
  
    return cursorPos;
  };

export default useCursor;