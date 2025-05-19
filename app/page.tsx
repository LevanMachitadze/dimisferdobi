import Link from 'next/link';
import Image from 'next/image';
import MainImage from './../public/dimi.jpg';

export default function Home() {
  return (
    <div>
      <Image
        src={MainImage}
        alt='Wine Background'
        fill
        className='absolute inset-0 z-10 h-full w-full object-cover'
        priority
      />
      <div className='flex min-h-screen flex-col items-center p-24 relative z-20'>
        <h1 className='text-4xl font-bold'>Welcome to Dimi's Ferdobi</h1>
        <div className='flex items-center justify-between max-w-[80%] w-full mt-40 space-x-8'>
          <div className='text-3xl font-bold bg-gray-300/70 rounded-2xl px-8 py-4 shadow-lg hover:bg-gray-300/90 transition-all'>
            <Link href='/aboutus'>About Us</Link>
          </div>
          <div className='text-3xl font-bold bg-gray-300/70 rounded-2xl px-8 py-4 shadow-lg hover:bg-gray-300/90 transition-all'>
            <Link href='/gallery'>Gallery</Link>
          </div>
          <div className='text-3xl font-bold bg-gray-300/70 rounded-2xl px-8 py-4 shadow-lg hover:bg-gray-300/90 transition-all'>
            <Link href='/newsandevents'>News&Events</Link>
          </div>
          <div className='text-3xl font-bold bg-gray-300/70 rounded-2xl px-8 py-4 shadow-lg hover:bg-gray-300/90 transition-all'>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
