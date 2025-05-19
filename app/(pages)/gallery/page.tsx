'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MainImage from '../../../public/dimi.jpg';
import WineBg from '../../../public/wine-bg.avif';
import { X } from 'lucide-react';
import BackButton from '@/app/components/backbutton/page';
import Loader from '@/app/components/loader/page';

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const images = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    src: index % 2 === 0 ? MainImage : WineBg,
    alt: `Image ${index + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openImage = (index: number) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  if (isLoading) return <Loader />;

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b to-gray-800 text-white'>
      <BackButton />

      <div className='w-full max-w-4xl backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center space-y-8'>
        <h1 className='text-6xl font-extrabold text-white drop-shadow-lg mb-12'>
          Gallery
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className='relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-gray-700/30 hover:scale-105 transition-all'
              onClick={() => openImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className='rounded-2xl shadow-lg transition-all group-hover:scale-105'
              />
            </div>
          ))}
        </div>

        {currentIndex !== null && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'>
            <button
              onClick={closeImage}
              className='absolute top-8 right-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100'
            >
              <X size={32} />
            </button>
            <button
              onClick={prevImage}
              className='absolute left-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100'
            >
              ❮
            </button>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1000}
              height={800}
              className='rounded-2xl shadow-2xl max-w-[90vw] max-h-[90vh]'
            />
            <button
              onClick={nextImage}
              className='absolute right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100'
            >
              ❯
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
