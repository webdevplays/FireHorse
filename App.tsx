import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import ChartSection from './components/ChartSection';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative bg-[#0b0b0f] min-h-screen selection:bg-orange-500/30">
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[100] bg-[#0b0b0f] flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                <div className="w-32 h-32 border-t-2 border-orange-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <motion.img 
                    src="https://69910958681c79fa0bcd324c.imgix.net/logo22.png" 
                    alt="Loading Logo" 
                    className="w-16 h-16 object-contain"
                    animate={{ 
                      scale: [0.9, 1.1, 0.9],
                      filter: ["drop-shadow(0 0 5px rgba(249,115,22,0.4))", "drop-shadow(0 0 15px rgba(249,115,22,0.8))", "drop-shadow(0 0 5px rgba(249,115,22,0.4))"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-orange-500 font-orbitron tracking-[0.3em] uppercase text-xs font-bold"
              >
                Awakening the Fire...
              </motion.p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CustomCursor />
            <ParticlesBackground />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Tokenomics />
              <ChartSection />
              <HowToBuy />
            </main>
            <Footer />
          </motion.div>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;