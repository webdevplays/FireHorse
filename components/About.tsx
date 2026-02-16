
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-[#0b0b0f]">
      {/* Background Heat Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-orange-500 font-orbitron text-xs tracking-widest uppercase">The Protocol</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white leading-tight">
            A POWERFUL <br />
            <span className="text-orange-500">FORCE OF NATURE</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            FireHorse is not just another token; it is a movement. Built on the principles of unstoppable momentum and burning passion, 
            the FireHorse Protocol leverages high-frequency ignition mechanisms to ensure long-term sustainability and growth.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our mission is to provide a decentralized sanctuary where elite participants can harness the raw energy of the market 
            without the risk of dampening the fire. Driven by a core community of visionaries, FireHorse is here to leave its mark on the chain.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="glass-card p-6 rounded-2xl group hover:border-orange-500/50 transition-colors">
              <h4 className="text-orange-500 font-orbitron font-bold text-2xl mb-1">99%</h4>
              <p className="text-gray-500 text-sm uppercase tracking-wider">Uptime</p>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:border-orange-500/50 transition-colors">
              <h4 className="text-orange-500 font-orbitron font-bold text-2xl mb-1">0.1s</h4>
              <p className="text-gray-500 text-sm uppercase tracking-wider">Settlement</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Animated Crest Outline */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[80%] h-[80%] border-2 border-dashed border-orange-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute w-[95%] h-[95%] border border-orange-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/firehorse/800/800" 
              alt="FireHorse Energy" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-orange-500" />
                <span className="font-orbitron text-orange-500 text-xs tracking-widest uppercase">Core Tech</span>
              </div>
              <p className="text-white font-orbitron font-medium text-xl">Advanced Heat-Shield Encryption for Maximum Security.</p>
            </div>
            
            {/* Hover Glare */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-orange-500/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
