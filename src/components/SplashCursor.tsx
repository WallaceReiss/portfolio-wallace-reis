'use client';
import { useEffect, useRef } from 'react';

const SplashCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: { x: number; y: number; age: number }[] = [];
    const maxAge = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points = points.filter(p => p.age < maxAge);
      
      points.forEach(p => {
        p.age++;
        const opacity = 1 - p.age / maxAge;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.age * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 150, 136, ${opacity * 0.5})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default SplashCursor;