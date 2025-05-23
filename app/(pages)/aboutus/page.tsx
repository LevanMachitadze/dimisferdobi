'use client';
import React from 'react';
import BackButton from '@/app/components/backbutton/page';
import Loader from '@/app/components/loader/page';
import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <Loader />;
  return (
    <>
      <div className='relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b to-gray-800 text-white'>
        <BackButton />
        <div className='relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b to-gray-800 text-white'>
          <h1 className='text-2xl '>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam
            exercitationem dolorem delectus eum, quaerat non dicta, dolores
            libero illo earum nisi officiis vitae velit! Consectetur, eum vitae?
            Dignissimos, commodi! Rem sit quaerat officia aliquid incidunt
            corrupti ipsa, accusantium cupiditate commodi, voluptates quibusdam
            nemo qui beatae minima ut, facilis corporis molestiae natus autem
            illum iusto! Delectus asperiores harum recusandae obcaecati. Velit
            doloremque nulla odio minus, repellat est illo voluptatibus eaque
            magni voluptate adipisci a nostrum, aspernatur similique tempore
            totam! Quam placeat esse vitae amet voluptas aspernatur at repellat
            assumenda est. Tempore quam tempora est dolorem totam, officia qui
            mollitia laborum quos facilis quas eligendi cupiditate ab doloribus
            nemo expedita ex neque facere molestiae minima voluptatum! Omnis
            veniam suscipit sapiente aliquid! Sunt omnis laboriosam est vero
            incidunt animi beatae reiciendis autem ducimus cum eveniet tenetur
            dolores, minima iure perspiciatis, ipsam adipisci itaque officia.
            Fugit consequatur deleniti maiores nobis provident corrupti
            assumenda.
          </p>
        </div>
      </div>
    </>
  );
}
