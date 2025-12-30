import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Packages from './components/Packages';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  // State to hold the message from the selected package
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const handlePackageSelect = (message: string) => {
    setPrefilledMessage(message);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Packages onPackageSelect={handlePackageSelect} />
        <About />
        <Contact initialMessage={prefilledMessage} />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;