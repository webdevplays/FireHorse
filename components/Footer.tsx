import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const contractAddress = "ETn2sHiXgZQct5gqTfHsEp2x3FHp2MeCkvvXTUyopump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/Firehorsepf' },
    { name: 'Telegram', href: '#' },
    { name: 'Medium', href: '#' },
    { name: 'Github', href: '#' },
  ];

  return (
    <footer className="relative pt-20 pb-12 px-6 border-t border-orange-500/10 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="https://69910958681c79fa0bcd324c.imgix.net/logo22.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                />
              </div>
              <span className="font-orbitron font-bold text-2xl tracking-tighter text-white uppercase">{t('tokenomicsTitle')}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <span className="text-gray-500 font-orbitron text-[10px] uppercase tracking-widest">{t('contract')} Address</span>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-xs text-gray-400 flex items-center justify-center sm:justify-start">
                {contractAddress.slice(0, 8)}...{contractAddress.slice(-8)}
              </div>
              <button 
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-black font-orbitron font-bold text-xs rounded-xl hover:bg-orange-400 transition-colors whitespace-nowrap"
              >
                {copied ? 'COPIED!' : 'COPY'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 font-orbitron text-xs uppercase tracking-widest transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-xs font-orbitron uppercase">
            © 2026 {t('tokenomicsTitle')} PROTOCOL. ALL RIGHTS RESERVED.
          </p>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-gray-500 hover:text-orange-500 transition-colors"
          >
            <span className="font-orbitron text-[10px] uppercase tracking-widest">{t('backToTop')}</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:scale-110 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;