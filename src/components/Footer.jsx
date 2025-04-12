import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/imphnen.png'; // Adjust path as needed

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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/50">
            © {currentYear} IMPHNEN. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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