import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/Banner.jpg',
    title: 'Welcome to Aperture Science',
    description: 'Where science gets done — sometimes explosively.',
    buttonText: 'Enter the Facility',
    buttonLink: '#about-section',
  },
  {
    image: '/Banner2.jpg',
    title: 'Innovation at its Core',
    description: 'Pushing the boundaries of scientific discovery.',
    buttonText: 'Learn More',
    buttonLink: '#about-section',
  },
  {
    image: '/Banner3.jpg',
    title: 'Advanced Testing Facilities',
    description: 'Ensuring precision and reliability in every experiment.',
    buttonText: 'Explore Labs',
    buttonLink: '#about-section',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div>
      <section className="relative overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-3xl font-portal mb-2">{slides[current].title}</h1>
              <p className="mb-4">{slides[current].description}</p>
              <a
                href={slides[current].buttonLink}
                className="bg-apertureOrange px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                {slides[current].buttonText}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
        >
          &#10095;
        </button>
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-apertureOrange' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      <section id="about-section" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Aperture Science</h2>
          <p>
            Founded by Cave Johnson, Aperture Science is a leader in advanced testing environments and innovative technologies.
          </p>
        </div>
        <div className="bg-apertureGray-light dark:bg-apertureGray-dark p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-3">Company Stats</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Founded: 1947</li>
            <li>Employees: 327</li>
            <li>Location: Upper Michigan Peninsula</li>
            <li>Favorite Element: Molybdenum</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
