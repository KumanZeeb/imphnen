import { useState } from 'react';
import useMobile from './hooks/useMobile';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FufuFafaQuotes from './components/FufuFafaQuotes';
import FeaturesSection from './components/FeaturesSection';
import JoinSection from './components/JoinSection';
import MemeModal from './components/MemeModal';
import Footer from './components/Footer';
import TailwindToggle from './components/TailwindToggle'; // Import TailwindToggle

function App() {
  const [email, setEmail] = useState('');
  const [showMeme, setShowMeme] = useState(false);
  const isMobile = useMobile();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih! Email ${email} telah terdaftar.`);
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <Navbar toggleMeme={() => setShowMeme(true)} />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FufuFafaQuotes isMobile={isMobile} />
        <FeaturesSection />
        <JoinSection onSubmit={handleSubmit} email={email} setEmail={setEmail} />
      </main>
      <MemeModal isOpen={showMeme} onClose={() => setShowMeme(false)} />
      <Footer />
      <TailwindToggle /> {/* Tambahkan TailwindToggle di sini */}
    </div>
  );
}

export default App;