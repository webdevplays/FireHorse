
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const data = [
  { name: 'Community & LP', value: 100, color: '#f97316' },
];

const Tokenomics: React.FC = () => {
  const { t } = useLanguage();

  const details = [
    { label: t('tokenomicsTitle'), value: 'Year of the horse', color: 'text-white' },
    { label: t('ticker'), value: '$FireHorse', color: 'text-orange-500' },
    { label: t('totalSupply'), value: '1,000,000,000', color: 'text-white' },
    { label: t('liquidity'), value: t('burned'), color: 'text-red-500' },
    { label: t('contract'), value: t('revoked'), color: 'text-green-500' },
  ];

  return (
    <section id="tokenomics" className="relative py-32 px-6 bg-[#0b0b0f] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-orbitron font-bold mb-6"
          >
            {t('tokenomicsTitle')} <span className="text-orange-500">($FireHorse)</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t('tokenomicsDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] relative"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={110}
                  outerRadius={150}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      className="hover:opacity-80 transition-opacity cursor-pointer shadow-[0_0_40px_rgba(249,115,22,0.4)]"
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #f97316', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff', fontFamily: 'Orbitron' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-gray-500 font-orbitron text-[10px] uppercase tracking-widest mb-1">{t('totalSupply')}</span>
              <span className="text-white font-orbitron text-3xl font-bold">1,000,000,000</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {details.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:translate-x-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-orange-500 rounded-full" />
                  <div>
                    <h4 className="text-gray-500 font-orbitron text-[10px] uppercase tracking-widest">{item.label}</h4>
                    <p className={`font-orbitron font-bold text-xl md:text-2xl mt-1 ${item.color}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            { label: t('buyTax'), value: '0%', desc: 'No friction for the pack' },
            { label: t('sellTax'), value: '0%', desc: 'Full freedom of movement' },
            { label: t('status'), value: t('verified'), desc: 'Immutable on-chain code' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl border-t-2 border-t-orange-500/30 text-center"
            >
              <h5 className="text-gray-500 font-orbitron text-xs uppercase tracking-[0.2em] mb-4">{stat.label}</h5>
              <p className="text-5xl font-orbitron font-black text-white mb-4">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
