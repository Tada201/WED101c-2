import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Image, Database, Moon, Sun, UserCircle, VolumeX, Volume2 } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGladosQuote, setShowGladosQuote] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { soundEnabled, playSound, toggleSound } = useSound();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'gallery', label: 'Image Library', icon: Image },
    { id: 'info', label: 'Info', icon: Database },
  ];

  const handleNavClick = (section: string) => {
    playSound('click');
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    playSound('click');
    setShowGladosQuote(true);
    setTimeout(() => setShowGladosQuote(false), 5000);
  };

  const handleDarkModeToggle = () => {
    playSound('click');
    setDarkMode(!darkMode);
    // Toggle dark mode class on document
    document.documentElement.classList.toggle('dark');
  };

  const handleSoundToggle = () => {
    playSound('click');
    toggleSound();
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-lg border-b border-gray-700 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 border-2 border-[hsl(195,100%,46%)] rounded-full portal-spin">
              <div className="w-4 h-4 bg-[hsl(195,100%,46%)] rounded-full m-auto mt-1"></div>
            </div>
            <span className="text-xl font-portal font-bold text-[hsl(195,100%,46%)]">
              Aperture Science
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded transition-all hover:text-apertureOrange ${
                      activeSection === item.id ? 'text-apertureOrange' : ''
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleDarkModeToggle}
              className="bg-apertureOrange hover:bg-orange-600 text-white px-4 py-2 rounded shadow-lg transition-all portal-glow"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={handleSoundToggle}
              className="bg-apertureTeal hover:bg-teal-600 text-white px-4 py-2 rounded shadow-lg transition-all portal-glow"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={handleLoginClick}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-lg transition-all portal-glow"
            >
              <UserCircle size={16} className="mr-2 inline" />
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded portal-glow"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black bg-opacity-95 border-t border-gray-700"
            >
              <div className="container mx-auto p-4">
                <ul className="space-y-4 mb-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={`flex items-center space-x-3 w-full p-3 rounded transition-all hover:bg-gray-800 ${
                            activeSection === item.id ? 'text-apertureOrange bg-gray-800' : 'text-gray-300'
                          }`}
                        >
                          <Icon size={20} />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleDarkModeToggle}
                    className="bg-apertureOrange hover:bg-orange-600 text-white px-4 py-2 rounded shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                  <button
                    onClick={handleSoundToggle}
                    className="bg-apertureTeal hover:bg-teal-600 text-white px-4 py-2 rounded shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                    <span>Sound: {soundEnabled ? 'ON' : 'OFF'}</span>
                  </button>
                  <button
                    onClick={handleLoginClick}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <UserCircle size={16} />
                    <span>Mock Login</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* GLaDOS Quote Popup */}
      <AnimatePresence>
        {showGladosQuote && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-4 bg-black bg-opacity-90 text-apertureOrange p-6 rounded-lg shadow-2xl max-w-xs z-50 border border-apertureOrange"
          >
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-apertureOrange rounded-full mt-2 animate-pulse"></div>
              <div>
                <p className="text-sm font-semibold mb-1">GLaDOS System</p>
                <p className="text-xs">
                  "Welcome, test subject. Remember, the cake is a lie."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}