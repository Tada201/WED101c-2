import { useState } from "react";
import { Home, Info, Image, Database, Moon, VolumeX, Volume2, UserCircle, Menu, X } from "lucide-react";
import { useSound } from "@/hooks/use-sound";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { LoginModal } from "./login-modal";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { soundEnabled, playSound, toggleSound } = useSound();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNavClick = (section: string) => {
    playSound('click');
    onSectionChange(section);
    closeMenu();
  };

  const handleSoundToggle = () => {
    playSound('click');
    toggleSound();
  };

  const handleLoginClick = () => {
    playSound('click');
    setShowLoginModal(true);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'gallery', label: 'Image Library', icon: Image },
    { id: 'info', label: 'Info', icon: Database },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        id="mobile-menu-toggle"
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 md:hidden aperture-button px-4 py-2 rounded"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Navigation */}
      <nav
        id="sidebar"
        className={`fixed left-0 top-0 h-full w-64 sidebar-nav z-40 ${
          isOpen ? 'mobile-menu active' : 'mobile-menu'
        } md:transform-none`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 border-2 border-[hsl(195,100%,46%)] rounded-full portal-spin">
              <div className="w-4 h-4 bg-[hsl(195,100%,46%)] rounded-full m-auto mt-1"></div>
            </div>
            <h1 className="text-xl font-bold text-[hsl(195,100%,46%)]">Aperture Science</h1>
          </div>

          {/* Navigation Items */}
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center space-x-3 p-3 hover:text-[hsl(195,100%,46%)] w-full text-left"
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Control Panel */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="space-y-3">
              <button className="aperture-button w-full py-2 px-4 rounded text-sm hover:text-[hsl(195,100%,46%)]">
                <Moon size={16} className="inline mr-2" />
                Dark Mode
              </button>
              <button
                onClick={handleSoundToggle}
                className="aperture-button w-full py-2 px-4 rounded text-sm hover:text-[hsl(195,100%,46%)]"
              >
                {soundEnabled ? (
                  <Volume2 size={16} className="inline mr-2" />
                ) : (
                  <VolumeX size={16} className="inline mr-2" />
                )}
                Sound: {soundEnabled ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={handleLoginClick}
                className="aperture-button w-full py-2 px-4 rounded text-sm hover:text-[hsl(39,100%,50%)]"
              >
                <UserCircle size={16} className="inline mr-2" />
                Terminal Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
