import { useEffect, useState } from 'react';

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

const Typer = ({ heading, dataText }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    handleType();
  }, []);

  const handleType = () => {
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    setText((prevText) => {
      if (isDeleting) {
        return fullText.substring(0, prevText.length - 1);
      } else {
        return fullText.substring(0, prevText.length + 1);
      }
    });

    setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
    }

    setTimeout(handleType, typingSpeed);
  };

  return (
    <h1>
      {heading}&nbsp;
      <span className='text-blue-400'>{text}</span>
      <span id="cursor"></span>
    </h1>
  );
};

export default Typer;