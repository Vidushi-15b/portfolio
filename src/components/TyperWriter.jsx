import React, { useState, useEffect } from 'react';
import { Color } from 'three';

const TypeWriter = ({ text, typeSpeed = 150, deleteSpeed = 80, pauseTime = 3000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      if (isDeleting) {
        // Delete one character
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          timeout = setTimeout(handleTyping, deleteSpeed);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
          timeout = setTimeout(handleTyping, 500); // Small pause before typing again
        }
      } else {
        // Type one character
        if (displayText.length < text.length) {
          setDisplayText(prev => text.slice(0, prev.length + 1));
          timeout = setTimeout(handleTyping, typeSpeed);
        } else {
          // Finished typing, wait then start deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, pauseTime);
        }
      }
    };

    // Start the typing animation
    timeout = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, typeSpeed, deleteSpeed, pauseTime]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`ml-1 text-green-600 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

export default TypeWriter;