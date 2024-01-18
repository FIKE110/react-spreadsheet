import { useState, useEffect } from 'react';
import '../styles/typing.css';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const textToType = 'Welcome to Glimpse into Data Insights!';

  useEffect(() => {
    let index = 0;

    const type = () => {
      setText(textToType.slice(0, index));
      setCursorPosition(index);

      index++;

      if (index <= textToType.length) {
        setTimeout(type, 150); // Adjust typing speed (milliseconds)
      }
    };

    type(); // Start the typing animation

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="typing-container">
      <div className="typing-text">
        {text}
        <span className="typing-cursor" style={{ left: `calc(${cursorPosition})` }}></span>
      </div>
    </div>
  );
};

export default TypingAnimation;
