
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center overflow-hidden pt-20">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full -z-10" />

      {/* Left Side: Cinematic Emblem Logo */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-full z-10 flex items-center justify-center p-8 md:p-12">
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
          
          {/* Multi-layered Glowing Auras */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-orange-600/20 blur-[80px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 bg-red-500/20 blur-[60px] rounded-full"
          />

          {/* The Fire Horse Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative z-20 w-full h-full drop-shadow-[0_0_50px_rgba(249,115,22,0.4)]"
          >
            {/* Using the provided high-fidelity image */}
            <img 
              src="https://69910958681c79fa0bcd324c.imgix.net/logo22.png" 
              alt="Year of the horse Fire Horse" 
              className="w-full h-full object-contain animate-float"
            />
            
            {/* Metallic Inner Glow Reflection Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/5 via-transparent to-white/5 pointer-events-none" />
          </motion.div>

          {/* Particle Sparks around logo */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, -100],
                  x: [0, (i % 2 === 0 ? 30 : -30)],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-orange-400 rounded-full blur-[1px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="relative w-full md:w-1/2 h-auto md:h-full z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 text-center md:text-left py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-orange-500" />
            <span className="text-orange-500 font-orbitron tracking-[0.4em] text-xs uppercase font-bold">
              EST. 2026 • Year of the horse PROTOCOL
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-black mb-8 leading-[1.1] tracking-tight text-white uppercase">
            RIDE <br />
            THE <span className="fire-gradient">STORM</span> <br />
            $FireHorse
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed mx-auto md:mx-0">
            Harness the unstoppable spirit of the Fire Horse. 100% community-owned, zero compromises, pure adrenaline.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 bg-orange-600 text-black font-orbitron font-bold rounded-full transition-shadow duration-300 tracking-wider text-sm shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              BUY $FireHorse
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.8)', backgroundColor: 'rgba(249, 115, 22, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 border border-orange-500/30 text-white font-orbitron font-bold rounded-full backdrop-blur-md transition-all duration-300 text-sm tracking-wider"
            >
              WHITEPAPER
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="font-orbitron text-[9px] tracking-[0.3em] text-orange-500 uppercase vertical-text" style={{ writingMode: 'vertical-rl' }}>Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
