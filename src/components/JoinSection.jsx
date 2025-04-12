import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { FaJava, FaPython, FaJs, FaReact } from 'react-icons/fa';
import { 
  SiTypescript, SiCplusplus, SiGo, SiRuby, SiPhp, 
  SiSwift, SiKotlin, SiRust, SiDart, SiElixir,
  SiR
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';

// Variants untuk animasi
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { 
    y: -5,
    scale: 1.1,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  tap: { scale: 0.95 }
};

const JoinSection = ({ onSubmit, email, setEmail }) => {
  const programmingLanguages = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" size={24} /> },
    { name: 'Java', icon: <FaJava className="text-red-600" size={24} /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-400" size={24} /> },
    { name: 'Go', icon: <SiGo className="text-cyan-500" size={24} /> },
    { name: 'Ruby', icon: <SiRuby className="text-red-500" size={24} /> },
    { name: 'PHP', icon: <SiPhp className="text-purple-500" size={24} /> },
    { name: 'Swift', icon: <SiSwift className="text-orange-500" size={24} /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-purple-400" size={24} /> },
    { name: 'Rust', icon: <SiRust className="text-orange-600" size={24} /> },
    { name: 'Dart', icon: <SiDart className="text-blue-400" size={24} /> },
    { name: 'Elixir', icon: <SiElixir className="text-purple-400" size={24} /> },
    { name: 'R', icon: <SiR className="text-blue-600" size={24} /> },
    { name: 'React', icon: <FaReact className="text-blue-400" size={24} /> },
    { name: 'Next.js', icon: <TbBrandNextjs className="text-black dark:text-white" size={24} /> },
    { name: 'React Native', icon: <TbBrandReactNative className="text-blue-500" size={24} /> }
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Programming Stack Section */}

        <motion.section 
            className="glass-container p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl overflow-hidden relative min-h-[500px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariant}
        >
            <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-white/10 text-blue-300 text-center z-10 relative"
            variants={itemVariant}
            >
            Our programming Language Bahasa fav Kami
            </motion.h2>
            
            <div className="relative w-full h-[400px] sm:h-[500px] cursor-grab active:cursor-grabbing">
            {programmingLanguages.map((lang, index) => {
                const randomX = Math.random() * 80 + 10; 
                const randomY = Math.random() * 70 + 15; 
                const randomRotate = Math.random() * 40 - 20; 
                
                return (
                <motion.div
                    key={lang.name}
                    className="absolute z-0 hover:z-10"
                    style={{
                    top: `${randomY}%`,
                    left: `${randomX}%`,
                    rotate: randomRotate
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 50
                    }
                    }}
                    whileHover={{
                    scale: 1.25,
                    rotate: 0,
                    y: -10,
                    zIndex: 20,
                    transition: { type: 'spring', stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.5}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                >
                    <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 shadow-lg hover:shadow-xl backdrop-blur-sm">
                    <motion.div 
                        className="text-3xl sm:text-4xl relative"
                        animate={{
                        y: [0, -10, 0],
                        transition: {
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }
                        }}
                    >
                        {lang.icon}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-[12px] -z-10" />
                    </motion.div>
                    
                    {/* Experience Badge */}
                    <motion.div
                        className="absolute -top-2 -right-2 bg-black/80 px-2 py-1 rounded-full text-xs border border-white/10 opacity-0"
                        whileHover={{ opacity: 1, scale: 1.1 }}
                    >
                        {lang.experience || '★'.repeat(3)}
                    </motion.div>
                    </div>
                </motion.div>
                )
            })}
            
            {/* Animated Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {programmingLanguages.map((_, i) => {
                if(i % 2 === 0) return null;
                return (
                    <motion.line
                    key={`line-${i}`}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        transition: {
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity
                        }
                    }}
                    />
                )
                })}
                <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                </defs>
            </svg>
            </div>

            {/* Floating Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                }}
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                    transition: {
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                    }
                }}
                />
            ))}
            </div>
        </motion.section>

      {/* Join Section */}
      <motion.section 
        className="glass-container p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 pb-2 border-b border-white/10 text-blue-300" 
          variants={itemVariant}
        >
          Bergabung dengan Kami
        </motion.h2>
        
        <motion.form 
          onSubmit={onSubmit} 
          className="max-w-lg mx-auto"
          variants={itemVariant}
        >
          <div className="mb-4 sm:mb-6">
            <label htmlFor="email" className="block mb-2 sm:mb-3 font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 backdrop-blur-sm pr-10"
                placeholder="email@contoh.com"
                required
              />
              <FiMail className="absolute right-3 sm:right-4 top-2.5 sm:top-3.5 opacity-50" />
            </div>
            <p className="text-xs opacity-70 mt-1 sm:mt-2">*Kami janji tidak akan spam</p>
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Daftar Sekarang</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default JoinSection;