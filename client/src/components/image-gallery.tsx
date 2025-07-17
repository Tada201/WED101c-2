import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Search, X, ZoomIn } from "lucide-react";

export function ImageGallery() {
  const [filter, setFilter] = useState('');
  const [filteredImages, setFilteredImages] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<any>(null);

  const galleryItems = [
    {
      title: "Test Chamber 01",
      description: "Basic portal mechanics introduction",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      caption: "A typical day in the lab."
    },
    {
      title: "Laboratory Complex",
      description: "Advanced research facility",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      caption: "The device that changed everything."
    },
    {
      title: "Facility Corridor",
      description: "Connecting test chambers",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      caption: "Our beloved AI companion."
    },
    {
      title: "Control Room",
      description: "GLaDOS monitoring station",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      caption: "Another test chamber completed."
    },
    {
      title: "Testing Hangar",
      description: "Large-scale experiments",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      caption: "Your best friend, forever."
    },
    {
      title: "Underground Facility",
      description: "Deep research levels",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      caption: "Hello, friend."
    }
  ];

  useEffect(() => {
    const filtered = galleryItems.filter(
      (img) =>
        img.title.toLowerCase().includes(filter.toLowerCase()) ||
        img.description.toLowerCase().includes(filter.toLowerCase()) ||
        img.caption.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [filter]);

  useEffect(() => {
    setFilteredImages(galleryItems);
  }, []);

  const openModal = (image: any) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <section id="gallery" className="p-8 bg-gradient-to-b from-transparent to-[hsl(0,0%,10%)]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-portal font-bold text-[hsl(195,100%,46%)] mb-12 flex items-center justify-center"
        >
          <Image className="mr-4" size={36} />
          Image Library
        </motion.h2>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search images..."
            className="w-full pl-12 pr-4 py-4 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-apertureOrange text-white placeholder-gray-400"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="test-chamber-card rounded-lg overflow-hidden portal-glow cursor-pointer group"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-sm">{item.caption}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[hsl(39,100%,50%)] mb-2">{item.title}</h3>
                <p className="text-sm text-[hsl(0,0%,88%)]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && modalImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modalImage.image}
                  alt={modalImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-[hsl(39,100%,50%)] mb-2">{modalImage.title}</h3>
                  <p className="text-white">{modalImage.caption}</p>
                </motion.div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
