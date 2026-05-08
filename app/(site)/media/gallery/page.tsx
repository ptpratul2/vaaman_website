'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const gallerySections = [
  {
    title: 'Campus Recruitment Drive 2026',
    items: Array.from({ length: 13 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `campus-${index + 1}`,
        src: `/images-optimized/gallery/campus-recruitment-drive-2026/campus-recruitment-${photoNumber}.jpg`,
        title: `Campus Recruitment Drive 2026 photo ${index + 1}`,
      };
    }),
  },
  {
    title: 'Conclave 2026',
    items: Array.from({ length: 12 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `conclave-${index + 1}`,
        src: `/images-optimized/gallery/conclave-2026/conclave-2026-${photoNumber}.jpg`,
        title: `Conclave 2026 photo ${index + 1}`,
      };
    }),
  },
  {
    title: 'Pantnagar Visit',
    items: [
      {
        id: 'pantnagar-visit',
        src: '/images-optimized/gallery/pantnagar-business-meet/pantnagar-visit.jpg',
        title: 'Pantnagar Visit',
      },
      
    ],
  },
  {
    title: 'Business Meet',
    items: [
  {
        id: 'business-meet',
        src: '/images-optimized/gallery/pantnagar-business-meet/business-meet.jpg',
        title: 'Business Meet',
  },
      
    ],
  },

  {
    title: 'Conclave 2025',
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((photoNumber, index) => ({
      id: `conclave-2025-${photoNumber}`,
      src: `/images-optimized/gallery/conclave-2025/conclave-2025-${String(photoNumber).padStart(2, '0')}.jpg`,
      title: `Conclave 2025 photo ${index + 1}`,
    })),
  },
  {
    title: 'V-Sitare 2',
    items: Array.from({ length: 6 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `v-sitare-2-${index + 1}`,
        src: `/images-optimized/gallery/v-sitare-2/v-sitare-2-${photoNumber}.jpg`,
        title: `V-Sitare 2 photo ${index + 1}`,
      };
    }),
  },
  {
    title: 'Campus Recruitment Drive 2025',
    items: Array.from({ length: 7 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `campus-recruitment-2025-${index + 1}`,
        src: `/images-optimized/gallery/campus-recruitment-drive-2025/campus-recruitment-2025-${photoNumber}.jpg`,
        title: `Campus Recruitment Drive 2025 photo ${index + 1}`,
      };
    }),
  },
  {
    title: 'Conclave 2024',
    items: Array.from({ length: 9 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `conclave-2024-${index + 1}`,
        src: `/images-optimized/gallery/conclave-2024/conclave-2024-${photoNumber}.jpg`,
        title: `Conclave 2024 photo ${index + 1}`,
      };
    }),
  },
  {
    title: 'V-Sitare 1',
    items: Array.from({ length: 5 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `v-sitare-1-${index + 1}`,
        src: `/images-optimized/gallery/v-sitare-1/v-sitare-1-${photoNumber}.jpg`,
        title: `V-Sitare 1 photo ${index + 1}`,
      };
    }),
  },
  {
    title: 'Conclave 2023',
    items: Array.from({ length: 11 }, (_, index) => {
      const photoNumber = String(index + 1).padStart(2, '0');

      return {
        id: `conclave-2023-${index + 1}`,
        src: `/images-optimized/gallery/conclave-2023/conclave-2023-${photoNumber}.jpg`,
        title: `Conclave 2023 photo ${index + 1}`,
      };
    }),
  },
];

const getGalleryItemSpan = (index: number) => {
  const pattern = [2, 3];
  let remainingIndex = index;
  let rowIndex = 0;

  while (remainingIndex >= pattern[rowIndex % pattern.length]) {
    remainingIndex -= pattern[rowIndex % pattern.length];
    rowIndex += 1;
  }

  return pattern[rowIndex % pattern.length] === 2 ? 'md:col-span-3' : 'md:col-span-2';
};

const galleryItems = gallerySections.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    sectionTitle: section.title,
  }))
);

export default function CompleteGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">


      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images-optimized/gallery/campus-recruitment-drive-2026/campus-recruitment-01.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/95 via-[#002147]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">
              Vaaman Engineers Media Archives
            </span>
            <h1 className="text-5xl md:text-5xl font-black text-white leading-tight">
              Vaaman <span className="text-orange-500 ">Engineers </span>
              Gallery
            </h1>
            <p className="text-gray-300 max-w-2xl mt-6 text-lg border-l-4 border-orange-500 pl-6">
              Moments from our campus recruitment drive, showcasing interaction, assessment, and engagement with emerging talent.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-[1550px] mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <AnimatePresence mode='popLayout'>
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className={`group relative aspect-[14/9] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-md cursor-pointer ${getGalleryItemSpan(index)}`}
                onClick={() => setSelectedImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/85 via-[#002147]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between gap-4 p-6 md:p-8">
                  <h2 className="max-w-[calc(100%-4rem)] text-xl md:text-2xl font-black tracking-tight text-white">
                    {item.sectionTitle}
                  </h2>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-orange-500">
                    <FontAwesomeIcon icon={faExpandAlt} className="text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>


      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[#002147]/98 z-[9999] p-6 flex items-center justify-center cursor-zoom-out backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative aspect-[14/9] w-full max-w-6xl overflow-hidden rounded-[1.5rem] border-4 border-white/20 shadow-2xl"
            >
              <Image
                src={selectedImage}
                alt="Campus Recruitment Drive 2026 selected photo"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
            <button className="absolute top-10 right-10 text-white text-5xl font-thin hover:text-orange-500 transition-all">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
