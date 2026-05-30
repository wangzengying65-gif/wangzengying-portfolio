import { useState, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PhotoModal from './components/PhotoModal';
import About from './components/About';
import Footer from './components/Footer';
import { GALLERY_IMAGES } from './config/images';
import type { GalleryImage } from './types';

export default function App() {
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);

  const images = useMemo(() => GALLERY_IMAGES, []);

  const handleOpen = useCallback((image: GalleryImage) => setModalImage(image), []);
  const handleClose = useCallback(() => setModalImage(null), []);
  const handlePrev = useCallback(() => {
    setModalImage((prev) => {
      if (!prev) return null;
      const idx = images.findIndex((img) => img.id === prev.id);
      return images[idx > 0 ? idx - 1 : images.length - 1];
    });
  }, [images]);
  const handleNext = useCallback(() => {
    setModalImage((prev) => {
      if (!prev) return null;
      const idx = images.findIndex((img) => img.id === prev.id);
      return images[idx < images.length - 1 ? idx + 1 : 0];
    });
  }, [images]);

  return (
    <div className="min-h-screen bg-apple-white dark:bg-apple-dark-bg transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Gallery images={images} onImageOpen={handleOpen} />
        <About />
      </main>
      <Footer />
      <PhotoModal
        image={modalImage}
        images={images}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
