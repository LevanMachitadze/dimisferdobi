'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '@/public/images/img1.jpg';
import img2 from '@/public/images/img2.jpg';
import img3 from '@/public/images/img3.jpg';
import img4 from '@/public/images/img4.jpg';
import img5 from '@/public/images/img5.jpg';
import img6 from '@/public/images/img6.jpg';
import img7 from '@/public/images/img7.jpg';
import img8 from '@/public/images/img8.jpg';
import img9 from '@/public/images/img9.jpg';
import img10 from '@/public/images/img10.jpg';
import img11 from '@/public/images/img11.jpg';
import img12 from '@/public/images/img12.jpg';
import img13 from '@/public/images/img13.jpg';
import img14 from '@/public/images/img14.jpg';
import img15 from '@/public/images/img15.jpg';
import { X } from 'lucide-react';
import BackButton from '@/app/components/backbutton/page';
import Loader from '@/app/components/loader/page';

export default function Gallery() {
  const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    { id: 7, src: img7, alt: 'Image 7' },
    { id: 8, src: img8, alt: 'Image 8' },
    { id: 9, src: img9, alt: 'Image 9' },
    { id: 10, src: img10, alt: 'Image 10' },
    { id: 11, src: img11, alt: 'Image 11' },
    { id: 12, src: img12, alt: 'Image 12' },
    { id: 13, src: img13, alt: 'Image 13' },
    { id: 14, src: img14, alt: 'Image 14' },
    { id: 15, src: img15, alt: 'Image 15' },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openImage = (index: number) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);
  const prevImage = () =>
    setCurrentIndex(
      currentIndex !== null
        ? (currentIndex - 1 + images.length) % images.length
        : null
    );
  const nextImage = () =>
    setCurrentIndex(
      currentIndex !== null ? (currentIndex + 1) % images.length : null
    );

  if (isLoading) return <Loader />;

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b to-gray-800 text-white'>
      <BackButton />
      <div className='w-full max-w-6xl backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center space-y-8'>
        <h1 className='text-6xl font-extrabold text-white drop-shadow-lg mb-12'>
          Gallery
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className='relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-gray-700/30 hover:scale-105 transition-all h-72'
              onClick={() => openImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover w-full h-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110'
              />
            </div>
          ))}
        </div>

        {currentIndex !== null && (
          <div className='fixed inset-0 z-50 h-[95vh] p-28 flex items-center justify-center bg-black/90'>
            <button
              onClick={closeImage}
              className='absolute top-8 right-8 z-50 rounded-full p-2 shadow-lg hover:bg-red-300 bg-white text-black'
            >
              <X size={32} />
            </button>
            <button
              onClick={prevImage}
              className='absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full p-3 shadow-lg hover:bg-red-300 bg-white text-black'
            >
              ❮
            </button>
            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full p-3 shadow-lg hover:bg-red-300 bg-white text-black'
            >
              ❯
            </button>

            <div className='relative w-full h-[90vh] max-w-[90vw] max-h-[90vh]'>
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                priority
                sizes='100vw'
                className='object-contain rounded-2xl shadow-2xl pointer-events-none'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
