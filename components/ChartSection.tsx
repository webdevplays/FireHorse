import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ChartSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="chart" className="relative py-24 md:py-32 px-6 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-orange-500 font-orbitron text-xs tracking-widest uppercase mb-2 block">{t('chartIntel')}</span>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase leading-tight">{t('chartTitle')}</h2>
          </div>
          <div className="glass-card px-6 py-3 md:px-8 md:py-4 rounded-2xl flex gap-12 border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.1)] w-full md:w-auto">
            <div className="w-full">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Market Status</p>
              <div className="flex items-center justify-between md:justify-start gap-4">
                <span className="text-white font-orbitron font-bold text-lg md:text-xl">LIVE ANALYTICS</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-[24px] md:rounded-[32px] overflow-hidden p-1 border-orange-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 pointer-events-none z-0" />
          <div className="relative z-10 w-full rounded-[23px] md:rounded-[31px] overflow-hidden bg-black/40">
            <style>
              {`
                #dexscreener-embed {
                  position: relative;
                  width: 100%;
                  padding-bottom: 125%;
                }
                @media(min-width: 1400px) {
                  #dexscreener-embed {
                    padding-bottom: 65%;
                  }
                }
                #dexscreener-embed iframe {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: 0;
                }
              `}
            </style>
            <div id="dexscreener-embed">
              <iframe 
                src="https://dexscreener.com/solana/EdfkouxFwkcXfiyHrRKBzu9DKv9H5bu6E9UVoggzePBm?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="DexScreener Live Chart"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChartSection;