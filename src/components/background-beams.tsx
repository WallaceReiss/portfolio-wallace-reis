'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />,
});

export const BackgroundBeams = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      <div className="w-full h-full opacity-30 grayscale-[0.5] contrast-[1.1]">
        <Spline
          scene="https://prod.spline.design/gzhVVaDAx2QwF3EP/scene.splinecode"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background backdrop-blur-[2px]" />
    </div>
  );
};
