import { motion } from 'framer-motion';

const MemeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="glass-container w-full max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/90 border border-white/20 shadow-xl mx-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-blue-300">
          Fesnuk 4h Coding 4min
        </h3>
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
          onClick={onClose}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
        >
          Tutup Filosofi Suci
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MemeModal;