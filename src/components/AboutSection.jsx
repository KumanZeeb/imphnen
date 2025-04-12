import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const AboutSection = () => {
  return (
    <motion.section 
      id="tentang"
      className="glass-container mb-8 sm:mb-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-[#1e293b]/80 border border-white/10 shadow-xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-white/10 text-blue-300" variants={item}>
        Tentang Kami
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
        <motion.div variants={item}>
          <p className="mb-4 sm:mb-6 leading-relaxed text-white/90">
            Komunitas "Malas adalah Emas" didirikan pada tahun 2023 dengan tujuan mengubah paradigma tentang kemalasan.
          </p>
          <p className="leading-relaxed text-white/90">
            Kami percaya bahwa kemalasan yang cerdas adalah sumber inovasi dan efisiensi.
          </p>
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg sm:rounded-xl border border-yellow-500/20">
            <p className="font-medium italic text-yellow-200">"Semakin malas seorang programmer, semakin baik kode yang dihasilkannya"</p>
            <p className="text-xs sm:text-sm opacity-80 mt-1 sm:mt-2">- Bill Gates (katanya)</p>
          </div>
        </motion.div>
        <motion.div className="flex items-center justify-center" variants={item}>
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
  );
};

export default AboutSection;