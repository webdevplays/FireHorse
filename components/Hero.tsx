import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isBingwuOpen, setIsBingwuOpen] = useState(false);
  const [isIgniting, setIsIgniting] = useState(false);
  
  const title = t('heroTitle') || 'RIDE THE STORM';
  const titleWords = title.split(' ');
  const buyLink = "https://jup.ag/swap/SOL-Fih1HyuroTaaEEWdZxQ3XwGTxx1LWJoQDPUqRXzxpump";

  const handleBingwuClick = () => {
    setIsIgniting(true);
    // Short delay to let the "fire burst" animation play out before showing the modal
    setTimeout(() => {
      setIsBingwuOpen(true);
      setIsIgniting(false);
    }, 600);
  };

  const handleCloseBingwu = () => {
    setIsIgniting(true);
    // Short delay to let the "fire burst" animation play out before closing the modal
    setTimeout(() => {
      setIsBingwuOpen(false);
      setIsIgniting(false);
    }, 600);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center overflow-hidden pt-20">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full -z-10" />

      {/* Left Side: Cinematic Emblem Logo */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-full z-10 flex items-center justify-center p-8 md:p-12">
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative z-20 w-full h-full drop-shadow-[0_0_50px_rgba(249,115,22,0.4)]"
          >
            <img 
              src="https://69910958681c79fa0bcd324c.imgix.net/logo22.png" 
              alt="Year of the horse Fire Horse" 
              className="w-full h-full object-contain animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/5 via-transparent to-white/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="relative w-full md:w-1/2 h-auto md:h-full z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 text-center md:text-left py-12 md:py-0">
        <motion.div
          key={title} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-orange-500" />
            <span className="text-orange-500 font-orbitron tracking-[0.4em] text-xs uppercase font-bold">
              {t('heroTag')}
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-orbitron font-black mb-8 leading-[1.1] tracking-tight text-white uppercase whitespace-pre-line">
            {titleWords.length === 3 ? (
              <>
                <span>{titleWords[0]} {titleWords[1]}</span>
                <br />
                <span className="fire-gradient">{titleWords[2]}</span>
              </>
            ) : (
              titleWords.map((word, idx) => (
                <span key={`${word}-${idx}`}>
                  {idx === titleWords.length - 1 ? (
                    <span className="fire-gradient">{word} </span>
                  ) : (
                    <>{word} </>
                  )}
                  {idx < titleWords.length - 1 && <br />}
                </span>
              ))
            )}
            <span className="block mt-2">$FireHorse</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed mx-auto md:mx-0">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center">
            <motion.a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 bg-orange-600 text-black flex items-center justify-center font-orbitron font-bold rounded-full transition-shadow duration-300 tracking-wider text-sm shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              {t('buyBtn')}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.8)', backgroundColor: 'rgba(249, 115, 22, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBingwuClick}
              disabled={isIgniting}
              className="relative w-full sm:w-auto px-12 py-5 border border-orange-500/30 text-white font-orbitron font-bold rounded-full backdrop-blur-md transition-all duration-300 text-sm tracking-wider overflow-hidden group"
            >
              <span className="relative z-10">{t('whitepaper')}</span>
              {/* Inner button fire hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-10 transition-opacity"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Fire Burst Transition Overlay */}
      <AnimatePresence>
        {isIgniting && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 20 }}
            exit={{ opacity: 0, scale: 40 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none"
          >
            <div className="w-10 h-10 bg-orange-600 rounded-full blur-xl shadow-[0_0_50px_20px_#ea580c]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="font-orbitron text-[9px] tracking-[0.3em] text-orange-500 uppercase vertical-text" style={{ writingMode: 'vertical-rl' }}>{t('scrollDown')}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>

      {/* Bingwu Iframe Modal */}
      <AnimatePresence>
        {isBingwuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col p-4 md:p-8"
          >
            {/* Fire flickering background effect for modal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/5 via-transparent to-red-600/5 animate-pulse pointer-events-none" />
            
            <div className="flex justify-between items-center mb-4 max-w-7xl mx-auto w-full relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <img src="https://69910958681c79fa0bcd324c.imgix.net/logo22.png" className="w-full h-full object-contain" alt="Logo" />
                </div>
                <span className="font-orbitron font-bold text-white tracking-widest text-sm uppercase">BING WU 丙午 PROTOCOL</span>
              </div>
              <button 
                onClick={handleCloseBingwu}
                disabled={isIgniting}
                className="group flex items-center gap-2 text-white/50 hover:text-orange-500 transition-colors"
              >
                <span className="font-orbitron text-xs tracking-widest uppercase">CLOSE</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>
            </div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="flex-1 w-full max-w-7xl mx-auto glass-card rounded-[32px] overflow-hidden border-orange-500/20 shadow-[0_0_100px_rgba(249,115,22,0.15)] relative"
            >
              <iframe 
                src="https://bingwucoin.xyz/" 
                className="w-full h-full border-0"
                title="Bingwu Protocol"
              />
              {/* Optional heat distortion overlay effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent mix-blend-overlay" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;