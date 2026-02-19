'use client';
import { useState, useEffect } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  className?: string;
}

const DecryptedText = ({ 
  text, 
  speed = 50, 
  maxIterations = 10, 
  sequential = true,
  className 
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setDisplayText(prev => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char;
            if (sequential) {
               if (index < iteration / (maxIterations / text.length)) return char;
            } else {
               if (iteration >= maxIterations) return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      iteration++;
      if (iteration >= maxIterations * 2) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, sequential]);

  return <span className={className}>{displayText}</span>;
};

export default DecryptedText;