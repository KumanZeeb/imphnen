import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/imphnen.png';
import { useState, useEffect } from 'react';

// Komponen TailwindToggle yang diintegrasikan langsung
const TailwindToggle = () => {
  const [tailwindEnabled, setTailwindEnabled] = useState(true);

  useEffect(() => {
    const styleTag = document.getElementById('tailwind-override');
    
    if (!tailwindEnabled) {
      const style = document.createElement('style');
      style.id = 'tailwind-override';
      style.textContent = `
        * {
          all: revert !important;
          font-family: system-ui, sans-serif !important;
        }
        footer *, #tailwind-toggle-btn {
          all: unset !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      if (styleTag) {
        styleTag.remove();
      }
    }
  }, [tailwindEnabled]);

  return (
    <motion.button
      id="tailwind-toggle-btn"
      onClick={() => setTailwindEnabled(!tailwindEnabled)}
      className="text-xs text-white/50 hover:text-blue-300 flex items-center gap-1"
      whileHover={{ scale: 1.05 }}
      title={tailwindEnabled ? 'Nonaktifkan Tailwind CSS' : 'Aktifkan Tailwind CSS'}
    >
      <span>CSS:</span>
      <span className={`px-1 rounded ${tailwindEnabled ? 'text-green-300' : 'text-red-300'}`}>
        {tailwindEnabled ? 'malas?' : 'disini baliknya wkwk'}
      </span>
    </motion.button>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-[#0f172a] border-t border-white/10 pt-12 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <motion.img 
                src={logo} 
                alt="IMPHNEN Logo" 
                className="h-10 w-10 mr-3"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                IMPHNEN
              </h3>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Ingin Menjadi Programmer Handal Namun Hobby Sekrol Fesnuk
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-white/60 hover:text-blue-300 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-white/60 hover:text-blue-300 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-white/60 hover:text-blue-300 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-white/60 hover:text-blue-300 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Features', 'Testimonials'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a 
                    href="#" 
                    className="text-sm text-white/60 hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-blue-300 transition-colors">
                hello@imphnen.com
              </li>
              <li className="hover:text-blue-300 transition-colors">
                +62 123 4567 890
              </li>
              <li className="hover:text-blue-300 transition-colors">
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - TOMBOL DITAMBAH DI SINI */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/50">
            © {currentYear} IMPHNEN. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <TailwindToggle />
            <a href="#" className="text-xs text-white/50 hover:text-blue-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-blue-300">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-blue-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;