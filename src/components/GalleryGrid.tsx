"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ImageModal from "./ImageModal";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
}

const GalleryGrid = ({ images, columns = 3, gap = 4 }: GalleryGridProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNavigate = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const gapClass = `gap-${gap}`;

  return (
    <>
      <div className={`grid ${gridCols} ${gapClass}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative aspect-square w-full">
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="w-6 h-6 border-2 border-muted-foreground/20 border-t-muted-foreground rounded-full animate-spin" />
                </div>
              )}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onLoad={() => handleImageLoad(index)}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100"
                >
                  View Image
                </motion.div>
              </div>
            </div>
            
            {/* Image title if provided */}
            {image.title && (
              <div className="p-3 bg-background/95 backdrop-blur-sm">
                <h3 className="text-sm font-medium text-foreground truncate">
                  {image.title}
                </h3>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          images={images.map(img => img.src)}
          currentIndex={selectedImageIndex}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
};

export default GalleryGrid;
