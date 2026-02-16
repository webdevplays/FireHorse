import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HowToBuy: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: '01',
      title: t('buyStep1Title'),
      desc: t('buyStep1Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
        </svg>
      )
    },
    {
      id: '02',
      title: t('buyStep2Title'),
      desc: t('buyStep2Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: '03',
      title: t('buyStep3Title'),
      desc: t('buyStep3Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-to-buy" className="relative py-24 px-6 bg-[#0b0b0f] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4"
          >
            <span className="text-orange-500 font-orbitron text-xs tracking-widest uppercase">{t('buyGuide')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-orbitron font-bold text-white uppercase"
          >
            {t('howToBuyTitle')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-[32px] border border-orange-500/10 hover:border-orange-500/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/20 transition-all" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <span className="font-orbitron font-black text-5xl text-white/5 group-hover:text-orange-500/20 transition-colors duration-500">
                  {step.id}
                </span>
              </div>
              
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-12 py-5 bg-orange-600 text-black font-orbitron font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(249,115,22,0.3)] uppercase tracking-widest text-sm">
            {t('buyBtn')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;