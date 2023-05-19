import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

const Typer = ({ heading, dataText }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);
  
    // useEffect hook to handle typing and deleting
    useEffect(() => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      const handleType = () => {
        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
        setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);
  
        // if (!isDeleting && text === fullText) {     
        //   setTimeout(() => setIsDeleting(true), 500);   
        // } else if (isDeleting && text === '') {
        //   setIsDeleting(false);
        //   setLoopNum(loopNum + 1);      
        // }
  
        setTimeout(handleType, typingSpeed);
      };
  
      handleType();
      
    }, [loopNum]);
    return (
      <h1>{ heading }&nbsp;
        <span>{ text }</span>
        <span></span>
      </h1>
    );
  };

  export default Typer;
