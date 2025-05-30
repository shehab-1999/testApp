"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from '@/components/motion';

export const ProjectGallery: React.FC = () => {
  const images = [
    {
      src: "/images/aybas1.png",
      alt: "AYBAS Service main showcase",
      width: 500,
      height: 900,
    },
    {
     src: "/images/aybas2.png",
      alt: "AYBAS Service product 1",
      width: 500,
      height: 375,
    },
    {
      src: "/images/aybas3.png",
      alt: "AYBAS Service product 2",
      width: 500,
      height: 375,
    },
    {
    src: "/images/aybas4.png",
      alt: "AYBAS Service product 3",
      width: 500,
      height: 375,
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 h-[calc(100vh-8rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="col-span-1 h-full relative overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-contain hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <div className="col-span-1 h-full grid grid-rows-3 gap-4">
        {images.slice(1).map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            className="relative overflow-hidden rounded-lg shadow-md h-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};