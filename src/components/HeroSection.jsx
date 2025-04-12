import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import logo from '../assets/imphnen.png';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
                <motion.div
                key={`code-bg-${i}`}
                className="absolute text-xs sm:text-sm font-mono text-green-400/50" // Changed to green
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -50, -100],
                    opacity: [0.3, 0.8, 0],
                }}
                transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
                >
                {`// ${[
                    "const passion = 'coding'",
                    "while(alive) { code() }",
                    "async function solveProblem()",
                    "git commit -m 'fix'",
                    "404 creativity not found",
                    "console.log('Hello Fesnuk')",
                    "import { coffee } from 'essentials'",
                    "try { work() } catch { scrollFesnuk() }",
                    "const life = new CodingJourney()",
                    "npm install success",
                ][Math.floor(Math.random() * 10)]}`}
                </motion.div>
            ))}
        </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { name: 'react', icon: <FaReact className="text-blue-400" /> },
          { name: 'node', icon: <FaNodeJs className="text-green-500" /> },
          { name: 'python', icon: <FaPython className="text-yellow-400" /> },
          { name: 'java', icon: <FaJava className="text-red-500" /> },
          { name: 'git', icon: <FaGitAlt className="text-orange-500" /> }
        ].map((tech, i) => (
          <motion.div
            key={tech.name}
            className="absolute text-4xl sm:text-5xl opacity-20 hover:opacity-40 transition-opacity"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (Math.random() * 60)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Logo with Online Indicator */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6 sm:mb-8 mx-auto relative"
        >
          <img 
            src={logo} 
            alt="IMPHNEN Logo" 
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto object-contain"
            loading="lazy"
          />
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500/80 text-white text-xs px-2 py-1 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Online
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            IMPHNEN
          </motion.h1>
        </div>

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto h-16"
        >
          <motion.p
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            "Ingin Menjadi Programmer Handal"
          </motion.p>
          <motion.p
            className="text-blue-300"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2.5
            }}
          >
            "Tapi Hobby Sekrol Fesnuk"
          </motion.p>
        </motion.div>

        {/* Programming Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-8 sm:mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { value: "10k+", label: "Baris Code" },
            { value: "99%", label: "Bugs" },
            { value: "24/7", label: "Fesnuk" }
          ].map((stat, i) => (
            <motion.div
              key={`stat-${i}`}
              className="bg-white/5 p-3 rounded-lg border border-white/10"
              whileHover={{ y: -5 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-blue-300">{stat.value}</div>
              <div className="text-xs sm:text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="relative"
        >
          <a 
            href="#bergabung" 
            className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Mulai Sekarang</span>
            <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></span>
          </a>
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            $ npm run start-your-journey
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-2"
        >
          <FiArrowDown className="text-xl sm:text-2xl opacity-50" />
        </motion.div>
      </div>

      {/* Keyboard Animation */}
      <motion.div 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-4xl opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⌨️
      </motion.div>
    </section>
  );
};

export default HeroSection;