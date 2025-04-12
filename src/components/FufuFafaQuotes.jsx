import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';

const FufuFafaQuotes = ({ isMobile }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(0);

  // Animation variants
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

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fufufafapi.vanirvan.my.id/api');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setQuotes(shuffled.slice(0, isMobile ? 1 : 3));
      } catch (error) {
        console.error("Gagal fetch quotes:", error);
        setQuotes([
          {
            id: 'error',
            content: "Error fetching quotes, tapi gapapa kita santai aja",
            doksli: "#"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [refreshCount, isMobile]);

  const refreshQuotes = () => {
    setRefreshCount(prev => prev + 1);
  };

  const cardColors = [
    "from-purple-500/10 to-blue-500/10",
    "from-green-500/10 to-teal-500/10",
    "from-amber-500/10 to-orange-500/10"
  ];

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start pr-10 pl-10 sm:items-center mb-5 gap-4">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold pb-2 border-b border-white/10 text-blue-300"
          variants={item}
        >
          Quote of the day By Our beloved FuFuFaFa
        </motion.h2>
        
        <motion.button
          onClick={refreshQuotes}
          className="flex items-center gap-2 px-4 py-2  pr-10 pl-10 rounded-full bg-white/10 hover:bg-white/20 transition-all text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          aria-label="Refresh quotes"
          variants={item}
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
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cardColors[index]}  mr-5 ml-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col`}
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
    </motion.div>
  );
};

export default FufuFafaQuotes;