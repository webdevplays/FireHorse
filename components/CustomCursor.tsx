
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-500/50 pointer-events-none z-[999] hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[999] hidden md:block"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450 }}
      />
      {/* Large Ambient Glow Following Mouse */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none z-[-1] hidden md:block"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
