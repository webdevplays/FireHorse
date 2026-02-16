
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'ZH', name: '中文' },
  { code: 'JA', name: '日本語' },
  { code: 'KO', name: '한국어' },
  { code: 'RU', name: 'Русский' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Live Chart', href: '#chart' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.206 8.19l-1.78 8.383c-.134.607-.494.756-.994.47l-2.71-2.002-1.306 1.256c-.144.144-.264.264-.54.264l.194-2.75 5.006-4.522c.217-.193-.047-.3-.33-.112l-6.188 3.896-2.66-.83c-.577-.18-.588-.577.12-.853l10.385-4.002c.48-.18.9.11.7.89z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-orange-500/10"
      >
        {/* Brand */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}
        >
          <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-300 ease-out">
            <img 
              src="https://69910958681c79fa0bcd324c.imgix.net/logo22.png" 
              alt="Year of the horse Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
            />
          </div>
          <span className="font-orbitron font-bold text-xl tracking-tighter text-white group-hover:text-orange-500 transition-colors duration-300 uppercase">
            Year of the horse
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-orange-500 font-orbitron transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            {/* Desktop Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 font-orbitron text-xs transition-colors py-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
                {selectedLang}
                <svg className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-xl border border-orange-500/20 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-xs font-orbitron transition-colors hover:bg-orange-500/10 ${selectedLang === lang.code ? 'text-orange-500 bg-orange-500/5' : 'text-gray-400'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {socialLinks.map((social) => (
              <motion.a 
                key={social.name}
                whileHover={{ scale: 1.1, color: '#f97316' }}
                href={social.href} 
                className="text-gray-400 transition-colors"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}

            <button className="px-6 py-2 bg-orange-500/10 border border-orange-500/50 rounded-full font-orbitron text-sm text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
              BUY $FireHorse
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-orange-500 p-2 focus:outline-none bg-white/5 rounded-lg border border-white/10 relative z-[70]"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[55] flex flex-col md:hidden bg-black overflow-hidden"
          >
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-orange-600/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-600/5 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-5 mix-blend-screen grayscale pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10 flex flex-col pt-32 px-10 h-full pb-12 overflow-y-auto">
              <div className="flex flex-col gap-6 mb-12">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    onClick={closeMenu}
                    className="text-4xl font-orbitron font-black text-white hover:text-orange-500 transition-all uppercase tracking-tighter"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Language Selector */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-12 border-t border-white/10 pt-8"
              >
                <p className="text-gray-500 font-orbitron text-[10px] uppercase tracking-widest mb-4">Select Language</p>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLang(lang.code)}
                      className={`px-3 py-2 rounded-lg border font-orbitron text-xs transition-all ${selectedLang === lang.code ? 'border-orange-500 text-orange-500 bg-orange-500/10' : 'border-white/10 text-gray-500'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-10 mt-auto">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-10"
                >
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <div className="scale-[2]">{social.icon}</div>
                    </a>
                  ))}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="w-full py-6 bg-orange-600 text-black font-orbitron font-black text-2xl rounded-2xl shadow-[0_10px_40px_rgba(249,115,22,0.4)] uppercase active:scale-95 transition-transform"
                >
                  BUY $FireHorse
                </motion.button>

                <p className="text-center text-gray-700 font-orbitron text-[10px] tracking-[0.4em] uppercase">
                  EST. 2026 • YEAR OF THE HORSE
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
