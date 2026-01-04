import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ImagePlus } from 'lucide-react';

const photos = [
  { id: 1, size: 'large', caption: 'Our favorite moment', src: '/images/gallery-1.JPG' },
  { id: 2, size: 'small', caption: 'Adventures together', src: '/images/gallery-2.JPG' },
  { id: 3, size: 'small', caption: 'Everyday magic', src: '/images/gallery3.JPG' },
  { id: 4, size: 'medium', caption: 'Your beautiful smile', src: '/images/beauty-smile.JPG' },
  { id: 5, size: 'medium', caption: 'Making memories', src: '/images/making-memories.JPG' },
  { id: 6, size: 'small', caption: 'Little things', src: '/images/memory.JPG' },
];

export default function PhotoGallery(): JSX.Element  {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent relative overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-2xl mx-auto"
      >
        <span className="text-rose-400/60 tracking-[0.3em] text-xs uppercase">Memories</span>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
          Moments Captured
        </h2>
        <p className="text-stone-500 font-light leading-relaxed">
          Every photograph holds a thousand words, but with you, 
          even a thousand words could never be enough.
        </p>
      </motion.div>

      {/* Gallery grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((photo, index) => {
            const sizeClasses = {
              large: 'col-span-2 row-span-2',
              medium: 'col-span-2 row-span-1',
              small: 'col-span-1 row-span-1'
            };
            
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`${sizeClasses[photo.size]} relative group cursor-pointer`}
              >
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-rose-100 to-amber-50 shadow-lg shadow-rose-100/30 border border-white/50">
                  {/* Placeholder for photo */}
                  {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-rose-300 p-4">
                        <ImagePlus className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 opacity-50" />
                        <p className="text-xs md:text-sm tracking-wide text-center opacity-70">
                          {photo.caption}
                        </p>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 md:p-6">
                      <p className="text-white font-light text-sm tracking-wide">
                        {photo.caption}
                      </p>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative camera */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-16"
      >
        <div className="inline-flex items-center gap-3 text-rose-300/50">
          <div className="w-12 h-[1px] bg-rose-200" />
          <Camera className="w-5 h-5" />
          <div className="w-12 h-[1px] bg-rose-200" />
        </div>
      </motion.div>
    </section>
  );
}