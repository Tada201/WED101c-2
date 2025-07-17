import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from "@/components/navbar";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { AboutSection } from "@/components/about-section";
import { ImageGallery } from "@/components/image-gallery";
import { InfoSection } from "@/components/info-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "gallery":
        return <ImageGallery />;
      case "info":
        return <InfoSection />;
      default:
        return (
          <>
            <HeroSlideshow />
            <AboutSection />
            <ImageGallery />
            <InfoSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-apertureGray-light dark:bg-apertureGray-dark text-apertureGray-dark dark:text-apertureGray-light transition-colors duration-500">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none scanline z-40"></div>

      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <main className="pt-20 container mx-auto px-4 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-16 p-8 bg-[hsl(0,0%,10%)] border-t border-gray-700 rounded-t-lg">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center space-x-3 mb-4"
            >
              <div className="w-8 h-8 border-2 border-[hsl(195,100%,46%)] rounded-full portal-spin">
                <div className="w-3 h-3 bg-[hsl(195,100%,46%)] rounded-full m-auto mt-1"></div>
              </div>
              <span className="text-[hsl(195,100%,46%)] font-portal font-bold text-xl">Aperture Science</span>
            </motion.div>
            <p className="text-[hsl(0,0%,88%)] mb-6">
              Fan site dedicated to the Portal universe. Not affiliated with Valve Corporation.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="text-[hsl(195,100%,46%)] hover:text-[hsl(39,100%,50%)] transition-colors portal-glow">Privacy Policy</a>
              <a href="#" className="text-[hsl(195,100%,46%)] hover:text-[hsl(39,100%,50%)] transition-colors portal-glow">Terms of Service</a>
              <a href="#" className="text-[hsl(195,100%,46%)] hover:text-[hsl(39,100%,50%)] transition-colors portal-glow">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
