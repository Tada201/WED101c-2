import { useState, useEffect } from 'react';
import imagesData from '../data/images.json';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageGallery() {
  const [filter, setFilter] = useState('');
  const [filteredImages, setFilteredImages] = useState(imagesData);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const filtered = imagesData.filter(
      (img) =>
        img.alt.toLowerCase().includes(filter.toLowerCase()) ||
        img.caption.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [filter]);

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-portal font-bold mb-6 text-center text-apertureOrange">Image Library</h1>
      <input
        type="text"
        placeholder="Search images..."
        className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-apertureOrange"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Search images"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="cursor-pointer relative overflow-hidden rounded shadow-lg border border-gray-700"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(image)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') openModal(image);
            }}
            aria-label={`View image: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-cover transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-1 truncate">
              {image.caption}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && modalImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-w-full max-h-full rounded shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              className="absolute bottom-10 text-white text-center w-full px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              id="modal-title"
            >
              {modalImage.caption}
            </motion.div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
