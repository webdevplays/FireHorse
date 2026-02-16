
import React from 'react';
import { motion } from 'framer-motion';

const ChartSection: React.FC = () => {
  return (
    <section id="chart" className="relative py-32 px-6 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <span className="text-orange-500 font-orbitron text-xs tracking-widest uppercase mb-2 block">Live Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase">Ignition Tracker</h2>
          </div>
          <div className="glass-card px-8 py-4 rounded-2xl flex gap-12 border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Live Feed</p>
              <div className="flex items-center gap-2">
                <span className="text-white font-orbitron font-bold text-xl">DEX ANALYTICS</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Status</p>
              <span className="text-orange-500 font-orbitron font-bold text-sm">CONNECTED</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-[32px] overflow-hidden p-1 border-orange-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Decorative Glow Background behind the embed */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 pointer-events-none z-0" />
          
          <div className="relative z-10 w-full rounded-[31px] overflow-hidden bg-black/40">
            {/* DexScreener Embed Integration - Reduced Height */}
            <style>
              {`
                #dexscreener-embed {
                  position: relative;
                  width: 100%;
                  padding-bottom: 80%; /* Reduced from 125% */
                }
                @media(min-width:1400px) {
                  #dexscreener-embed {
                    padding-bottom: 45%; /* Reduced from 65% */
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
                src="https://dexscreener.com/osmosis/3117-factory_osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4_alloyed_allSOL-ibc_498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="DexScreener Live Chart"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* Sub-chart Info */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 rounded-full border border-orange-500/20 text-orange-500 font-orbitron text-[10px] tracking-widest hover:bg-orange-500/10 transition-all uppercase">
            Expand View
          </button>
          <button className="px-6 py-2 rounded-full border border-orange-500/20 text-orange-500 font-orbitron text-[10px] tracking-widest hover:bg-orange-500/10 transition-all uppercase">
            Trade on DEX
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
