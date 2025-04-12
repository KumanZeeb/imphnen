import { motion } from 'framer-motion';
import { FiUsers, FiBook, FiMail } from 'react-icons/fi';

const FeaturesSection = () => {
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

  const features = [
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
  ];

  const tips = [
    "Kerja 25 menit, sekrol fesnuk 2 jam (modifikasi Pomodoro)",
    "Jika suatu task bisa selesai dalam 2 menit, sekroll fesnuk lagi",
    "mau commit git atau kerjain task, sekroll fesnuk dulu",
    "Banyakin commit message biar keliatan produktif, infokan script penghijauan",
    "Manfaatkan Ai, seperti portugis yang memanfaatkan kebodohan pribumi"
  ];

  return (
    <>
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
          {features.map((feature) => (
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

      {/* Productivity Tips Section */}
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
          {tips.map((tip, index) => (
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
    </>
  );
};

export default FeaturesSection;