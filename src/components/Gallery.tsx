import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import GalleryImageCard from './GalleryImage';
import type { GalleryImage as GalleryImageType } from '../types';

interface Props {
  images: GalleryImageType[];
  onImageOpen: (image: GalleryImageType) => void;
}

export default function Gallery({ images, onImageOpen }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleHover = useCallback((id: string | null) => setHoveredId(id), []);

  if (images.length === 0) {
    return (
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-apple-black/30 dark:text-apple-white/30 text-lg">
            暂无照片，请配置 CDN 图片地址后刷新
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-16 text-center text-apple-black dark:text-apple-white"
        >
          Gallery
        </motion.h2>

        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 transition-all duration-500 ${
            hoveredId ? '[&_.group]:opacity-70 [&_.group:hover]:opacity-100' : ''
          }`}
        >
          {images.map((image, i) => (
            <GalleryImageCard
              key={image.id}
              image={image}
              index={i}
              onOpen={onImageOpen}
              onHover={handleHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
