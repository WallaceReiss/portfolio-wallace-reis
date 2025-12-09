"use client";

import { useState, useEffect } from 'react';

interface AnimatedProgressProps {
  value: number;
  isVisible: boolean;
}

const AnimatedProgress = ({ value, isVisible }: AnimatedProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(value), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, value]);

  return (
    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
      />
    </div>
  );
};

export default AnimatedProgress;
