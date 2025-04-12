import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCoffee } from 'react-icons/fi';
import logo from '../assets/imphnen.png';

const Navbar = ({ toggleMeme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        className="glass-container w-full p-3 sm:p-4 backdrop-blur-xl bg-[#0f172a]/90 border-b border-white/10 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img 
              src={logo} 
              alt="Logo IMPHNEN" 
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-contain"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-sm sm:text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                IMPHNEN
              </h1>
              <p className="text-[10px] sm:text-xs opacity-80 hidden md:block">
                Ingin Menjadi Programmer Handal Namun Hobby Sekrol Fesnuk
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {['Tentang', 'Filosofi', 'Manfaat', 'Bergabung', 'Fesnuk 4h/4m'].map((item) => (
              <motion.a
                key={item}
                href={item === 'Fesnuk 4h/4m' ? '#!' : `#${item.toLowerCase()}`}
                onClick={item === 'Fesnuk 4h/4m' ? toggleMeme : undefined}
                className="text-white no-underline px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full bg-white/5 hover:bg-white/20 transition-all duration-200 border border-white/10 hover:border-white/20 flex items-center gap-1"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item === 'Fesnuk 4h/4m' && <FiCoffee className="text-yellow-300 text-xs" />}
                <span>{item}</span>
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Mobile Menu Content */}
        <div 
          className={`md:hidden bg-[#0f172a]/95 backdrop-blur-lg p-4 border-t border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col gap-2">
            {['Tentang', 'Filosofi', 'Manfaat', 'Bergabung', 'Fesnuk 4h/4m'].map((item) => (
              <a
                key={item}
                href={item === 'Fesnuk 4h/4m' ? '#!' : `#${item.toLowerCase()}`}
                onClick={() => {
                  if (item === 'Fesnuk 4h/4m') toggleMeme();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white no-underline px-4 py-2 rounded-lg bg-white/5 hover:bg-white/20 transition-all duration-200 border border-white/10"
              >
                <div className="flex items-center gap-2">
                  {item === 'Fesnuk 4h/4m' && <FiCoffee className="text-yellow-300" />}
                  {item}
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;