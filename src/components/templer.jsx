import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { 
  FiArrowRight, 
  FiMail, 
  FiUsers, 
  FiBook, 
  FiCoffee, 
  FiRefreshCw, 
  FiArrowDown 
} from 'react-icons/fi'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt 
} from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'

import logo from './assets/imphnen.png'

function App() {
  const [email, setEmail] = useState('')
  const [showMeme, setShowMeme] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Terima kasih! Email ${email} telah terdaftar.\n\nSekarang kamu bisa malas-malasan dengan bangga!`)
    setEmail('')
  }

  const toggleMeme = () => setShowMeme(!showMeme)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  function FufuFafaQuotes() {
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshCount, setRefreshCount] = useState(0)

    useEffect(() => {
      const fetchQuotes = async () => {
        try {
          setLoading(true)
          const response = await fetch('https://fufufafapi.vanirvan.my.id/api')
          if (!response.ok) throw new Error('Failed to fetch')
          const data = await response.json()
          const shuffled = [...data].sort(() => 0.5 - Math.random())
          setQuotes(shuffled.slice(0, isMobile ? 1 : 3))
        } catch (error) {
          console.error("Gagal fetch quotes:", error)
          setQuotes([
            {
              id: 'error',
              content: "Error fetching quotes, tapi gapapa kita santai aja",
              doksli: "#"
            }
          ])
        } finally {
          setLoading(false)
        }
      }

      fetchQuotes()
    }, [refreshCount, isMobile])

    const refreshQuotes = () => {
      setRefreshCount(prev => prev + 1)
    }

    const cardColors = [
      "from-purple-500/10 to-blue-500/10",
      "from-green-500/10 to-teal-500/10",
      "from-amber-500/10 to-orange-500/10"
    ]

    return (
      <>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold pb-2 border-b border-white/10 text-blue-300"
            variants={item}
          >
            Kata Fufu Fafa
          </motion.h2>
          
          <motion.button
            onClick={refreshQuotes}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            aria-label="Refresh quotes"
          >
            <FiRefreshCw className={`${loading ? 'animate-spin' : ''}`} />
            <span>Quote Lain</span>
          </motion.button>
        </div>
        
        {loading ? (
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 sm:gap-6`}>
            {Array.from({ length: isMobile ? 1 : 3 }).map((_, i) => (
              <motion.div 
                key={`skeleton-${i}`}
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cardColors[i]} border border-white/10 h-full min-h-[150px] sm:min-h-[200px] animate-pulse`}
                variants={item}
              />
            ))}
          </div>
        ) : (
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 sm:gap-6`}>
            {quotes.map((quote, index) => (
              <motion.div 
                key={`${quote.id}-${index}`}
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cardColors[index]} border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col`}
                variants={item}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="italic mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">"{quote.content}"</p>
                <div className="mt-auto flex justify-between items-end pt-2">
                  <a 
                    href={quote.doksli} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs opacity-70 hover:opacity-100 hover:text-blue-300 transition"
                    aria-label="Lihat sumber quote"
                  >
                    Lihat sumber
                  </a>
                  {quote.image_url && (
                    <a 
                      href={quote.image_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs opacity-70 hover:opacity-100 hover:text-blue-300 transition"
                      aria-label="Lihat gambar terkait quote"
                    >
                      Lihat gambar
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </>
    )
  }

  const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showMeme, setShowMeme] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMeme = () => {
      setShowMeme(!showMeme);
    };

        return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        </div>

        <header className="fixed top-0 left-0 right-0 z-50">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-container w-full p-3 sm:p-4 backdrop-blur-xl bg-[#0f172a]/90 border-b border-white/10 shadow-lg"
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

              {/* Mobile Menu Button (Hamburger) */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
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
                aria-label="Main navigation"
              >
                {['Tentang', 'Filosofi', 'Manfaat', 'Bergabung', 'Fesnuk 4h/4m'].map((item) => (
                  <motion.a
                    key={item}
                    href={item === 'Fesnuk 4h/4m' ? '#!' : `#${item.toLowerCase()}`}
                    onClick={item === 'Fesnuk 4h/4m' ? toggleMeme : undefined}
                    className="text-white no-underline px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full bg-white/5 hover:bg-white/20 transition-all duration-200 border border-white/10 hover:border-white/20 flex items-center gap-1"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={item}
                  >
                    {item === 'Fesnuk 4h/4m' && <FiCoffee className="text-yellow-300 text-xs" />}
                    <span>{item}</span>
                  </motion.a>
                ))}
              </motion.nav>
            </div>

            {/* Mobile Menu */}
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

          {/* Tambahkan komponen meme di sini jika showMeme true */}
          {showMeme && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              {/* Konten meme Anda di sini */}
              <div className="bg-[#0f172a] p-6 rounded-lg max-w-md mx-4">
                <h3 className="text-xl font-bold mb-4">Fesnuk 4h/4m</h3>
                <p>Konten meme Anda di sini...</p>
                <button 
                  onClick={toggleMeme}
                  className="mt-4 px-4 py-2 bg-blue-500 rounded-lg"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-16">
          {/* Animated Code Background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`code-bg-${i}`}
                className="absolute text-xs sm:text-sm font-mono text-blue-300/30"
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
            {/* Borderless Logo with Typing Animation */}
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

            {/* CTA Button with Terminal Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="relative"
            >
              <a 
                href="#bergabung" 
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl relative overflow-hidden group"
                aria-label="Mulai sekarang"
              >
                <span className="relative z-10">Mulai Sekarang</span>
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></span>
              </a>
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-70"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                aria-hidden="true"
              >
                $ npm run start-your-journey
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator with Code */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-2"
              aria-hidden="true"
            >
              <FiArrowDown className="text-xl sm:text-2xl opacity-50" />
            </motion.div>
            <div className="text-xs font-mono opacity-50 hidden sm:block" aria-hidden="true">
            
            </div>
          </div>

          {/* Keyboard Animation */}
          <motion.div 
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-4xl opacity-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            aria-hidden="true"
          >
            ⌨️
          </motion.div>
        </section>

        {/* Main Content */}
        <main className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 pt-4">
          {/* Meme Modal */}
          {showMeme && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="meme-modal-title"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-container w-full max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/90 border border-white/20 shadow-xl mx-2"
              >
                <h3 id="meme-modal-title" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-blue-300">Fesnuk 4h Coding 4min</h3>
                <div className="bg-white/5 p-4 sm:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6 border border-white/10">
                  <p className="text-center text-base sm:text-lg font-medium">
                    "Fokus 4 jam, coding 4 menit,<br />
                    Hasilnya tetap keren, ga pake pusing!"
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-500/10 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-blue-500/20">
                    <h4 className="font-bold text-blue-300 text-sm sm:text-base">4 Jam</h4>
                    <ul className="text-xs sm:text-sm list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-1">
                      {[...Array(5)].map((_, i) => (
                        <li key={`hour-${i}`}>SEKROLL FESNUK</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-500/10 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-green-500/20">
                    <h4 className="font-bold text-green-300 text-sm sm:text-base">4 Menit</h4>
                    <ul className="text-xs sm:text-sm list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-1">
                      <li>Ngetik code</li>
                      <li>Debugging</li>
                      <li>Deploy</li>
                      <li>ga dibayar client</li>
                    </ul>
                  </div>
                </div>
                <button 
                  onClick={toggleMeme}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
                  aria-label="Tutup modal"
                >
                  Tutup Filosofi Suci
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* About Section */}
          <motion.section 
            id="tentang"
            className="glass-container mb-8 sm:mb-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            aria-labelledby="about-heading"
          >
            <motion.h2 
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-white/10 text-blue-300"
              variants={item}
            >
              Tentang Kami
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
              <motion.div variants={item}>
                <p className="mb-4 sm:mb-6 leading-relaxed text-white/90 text-sm sm:text-base">
                  Komunitas "Malas adalah Emas" didirikan pada tahun 2023 dengan tujuan mengubah paradigma tentang kemalasan.
                </p>
                <p className="leading-relaxed text-white/90 text-sm sm:text-base">
                  Kami percaya bahwa kemalasan yang cerdas adalah sumber inovasi dan efisiensi. Banyak penemuan besar lahir dari keinginan untuk menyederhanakan pekerjaan.
                </p>
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg sm:rounded-xl border border-yellow-500/20">
                  <p className="font-medium italic text-yellow-200 text-sm sm:text-base">"Semakin malas seorang programmer, semakin baik kode yang dihasilkannya"</p>
                  <p className="text-xs sm:text-sm opacity-80 mt-1 sm:mt-2">- Bill Gates (katanya)</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center"
                variants={item}
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/10 w-full h-full flex items-center justify-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-300">Filosofi Kami</h3>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">"Bekerja lebih cerdas, bukan lebih keras"</p>
                    <p className="text-xs sm:text-sm opacity-80">*kecuali deadline besok</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* FufuFafa Quotes Section */}
          <motion.section 
            className="glass-container mb-8 sm:mb-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            aria-labelledby="quotes-heading"
          >
            <FufuFafaQuotes />
          </motion.section>

          {/* Features Section */}
          <motion.section 
            id="manfaat"
            className="glass-container mb-8 sm:mb-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            aria-labelledby="benefits-heading"
          >
            <motion.h2 
              id="benefits-heading"
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-white/10 text-blue-300"
              variants={item}
            >
              Manfaat Bergabung
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  id: 1,
                  title: "Networking",
                  desc: "Bertemu dengan profesional yang memiliki mindset serupa",
                  icon: <FiUsers className="text-2xl sm:text-3xl text-blue-400" />,
                  bonus: "Tukar template CV 'pengalaman malas'",
                  color: "bg-gradient-to-br from-blue-500/10 to-blue-600/10"
                },
                {
                  id: 2,
                  title: "Workshop",
                  desc: "Belajar teknik produktivitas dan otomatisasi",
                  icon: <FiBook className="text-2xl sm:text-3xl text-purple-400" />,
                  bonus: "Cara tidur sambil tetap produktif",
                  color: "bg-gradient-to-br from-purple-500/10 to-purple-600/10"
                },
                {
                  id: 3,
                  title: "Resources",
                  desc: "Akses ke tools dan template untuk bekerja lebih efisien",
                  icon: <FiMail className="text-2xl sm:text-3xl text-amber-400" />,
                  bonus: "100+ alasan untuk WFH",
                  color: "bg-gradient-to-br from-amber-500/10 to-amber-600/10"
                }
              ].map((feature) => (
                <motion.div 
                  key={`feature-${feature.id}`}
                  className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${feature.color} h-full flex flex-col`}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="opacity-90 mb-4 sm:mb-5 flex-grow text-sm sm:text-base">{feature.desc}</p>
                  <p className="text-xs sm:text-sm bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block border border-white/10">
                    {feature.bonus}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Productivity Tips */}
          <motion.section 
            id="filosofi"
            className="glass-container mb-8 sm:mb-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            aria-labelledby="tips-heading"
          >
            <motion.h2 
              id="tips-heading"
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-white/10 text-blue-300"
              variants={item}
            >
              Tips Produktivitas Ala Kami
            </motion.h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Kerja 25 menit, istirahat 2 jam (modifikasi Pomodoro)",
                "Jika suatu task bisa selesai dalam 2 menit, delegasikan ke orang lain",
                "Meeting harus lebih singkat dari durasi film Avengers",
                "Banyakin commit message biar keliatan produktif",
                "Kalau bisa di-Google, ngapain dihafal?"
              ].map((tip, index) => (
                <motion.div 
                  key={`tip-${index}`} 
                  className="flex items-start bg-white/5 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <span className="bg-blue-500/20 text-blue-300 rounded-md sm:rounded-lg w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 font-bold text-xs sm:text-sm">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-sm sm:text-base">{tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Join Section */}
          <motion.section 
            id="bergabung"
            className="glass-container p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            aria-labelledby="join-heading"
          >
            <motion.h2 
              id="join-heading"
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 pb-2 border-b border-white/10 text-blue-300"
              variants={item}
            >
              Bergabung dengan Kami
            </motion.h2>
            <motion.div 
              className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg sm:rounded-xl border border-green-500/20"
              variants={item}
            >
              <p className="text-center font-medium text-base sm:text-lg">
                "Bergabunglah sekarang!<br />
                Nanti juga males daftarnya kalau ditunda-tunda"
              </p>
            </motion.div>
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-lg mx-auto"
              variants={item}
            >
              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block mb-2 sm:mb-3 font-medium text-sm sm:text-base">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="email@contoh.com"
                    required
                    aria-required="true"
                  />
                  <FiMail className="absolute right-3 sm:right-4 top-2.5 sm:top-3.5 opacity-50 text-sm sm:text-base" />
                </div>
                <p className="text-xs opacity-70 mt-1 sm:mt-2">*Kami janji tidak akan spam, kami terlalu malas untuk itu</p>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Daftar sekarang"
              >
                <span>Daftar Sekarang</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </motion.section>
        </main>

        {/* Footer */}
        <motion.footer 
          className="py-8 sm:py-12 text-center text-xs sm:text-sm opacity-80 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p>© {new Date().getFullYear()} Malas adalah Emas. Semua hak dilindungi (tapi kami terlalu malas untuk menuntut).</p>
            <p className="mt-2 sm:mt-3 opacity-60">Made with ❤️ and ☕ (mostly ☕)</p>
          </div>
        </motion.footer>
      </div>
    )
  };

}

export default App


