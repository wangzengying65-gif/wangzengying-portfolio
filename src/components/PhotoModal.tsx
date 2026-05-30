import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryImage } from '../types';

interface Props {
  image: GalleryImage | null;
  images: GalleryImage[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const spring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

export default function PhotoModal({ image, images, onClose, onPrev, onNext }: Props) {
  const currentIndex = image ? images.findIndex((img) => img.id === image.id) : -1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (!image) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [image, handleKeyDown]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x > 80 || info.velocity.x > 300) onPrev();
    else if (info.offset.x < -80 || info.velocity.x < -300) onNext();
  };

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onClick={onClose}
        >
          {/* Counter */}
          <div className="absolute top-6 left-6 text-white/60 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
            aria-label="关闭"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
            aria-label="上一张"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={spring}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
            aria-label="下一张"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Drag hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs">
            左右滑动切换 · ESC 关闭
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
