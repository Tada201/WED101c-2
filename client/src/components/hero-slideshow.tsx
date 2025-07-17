import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    title: 'Welcome to Aperture Science',
    description: 'Where science gets done — sometimes explosively.',
    buttonText: 'Enter the Facility',
    buttonLink: '#about-section',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    title: 'Innovation at its Core',
    description: 'Pushing the boundaries of scientific discovery.',
    buttonText: 'Learn More',
    buttonLink: '#about-section',
  },
  {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    title: 'Advanced Testing Facilities',
    description: 'Ensuring precision and reliability in every experiment.',
    buttonText: 'Explore Labs',
    buttonLink: '#about-section',
  },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const { playSound } = useSound();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    playSound('click');
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    playSound('click');
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlide = (index: number) => {
    playSound('click');
    setCurrent(index);
  };

  const handleEnterFacility = () => {
    playSound('portal');
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden rounded-lg shadow-2xl mb-12">
      <div className="relative h-[500px] md:h-[600px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-8">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-portal font-bold mb-4 text-[hsl(195,100%,46%)]"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 max-w-2xl"
              >
                {slides[current].description}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={handleEnterFacility}
                className="aperture-button px-8 py-4 rounded-lg text-lg font-semibold portal-glow hover:text-[hsl(39,100%,50%)] flex items-center space-x-2"
              >
                <DoorOpen size={20} />
                <span>{slides[current].buttonText}</span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all portal-glow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all portal-glow"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-apertureOrange scale-125' : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}