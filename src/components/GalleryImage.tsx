import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import type { GalleryImage as GalleryImageType } from '../types';

interface Props {
  image: GalleryImageType;
  index: number;
  onOpen: (image: GalleryImageType) => void;
  onHover: (id: string | null) => void;
}

export default function GalleryImageCard({ image, index, onOpen, onHover }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = !!image.video;

  const handleClick = useCallback(() => onOpen(image), [image, onOpen]);

  const handleMouseEnter = useCallback(() => {
    onHover(image.id);
    if (hasVideo) {
      setVideoVisible(true);
      videoRef.current?.play();
    }
  }, [image.id, onHover, hasVideo]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
    if (hasVideo) {
      setVideoVisible(false);
      videoRef.current?.pause();
    }
  }, [onHover, hasVideo]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="cursor-pointer group break-inside-avoid mb-4 md:mb-6"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-lg bg-apple-gray dark:bg-apple-dark-card transition-shadow duration-500 group-hover:shadow-xl">
        {/* Blur placeholder */}
        <img
          src={image.thumbnail}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover scale-110 blur-xl transition-opacity duration-700 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />

        {/* Main image — natural aspect ratio, no cropping */}
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto block transition-all duration-700 ease-out group-hover:scale-[1.02] ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${videoVisible ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Live Photo video overlay */}
        {hasVideo && (
          <video
            ref={videoRef}
            src={image.video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.02] ${
              videoVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* LIVE badge */}
        {hasVideo && (
          <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            LIVE
          </span>
        )}
      </div>
    </motion.div>
  );
}
