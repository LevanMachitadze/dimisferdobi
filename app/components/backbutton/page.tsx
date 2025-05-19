import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <div className='absolute top-4 left-4'>
      <Link
        href='/'
        className='flex items-center gap-2 bg-gradient-to-r from-red-900/80 to-red-700/80 rounded-full p-3 shadow-lg hover:bg-gradient-to-r hover:from-red-900 hover:to-red-700 transition-all group'
      >
        <ArrowLeft className='w-5 h-5 text-white group-hover:text-gray-100 transition-colors' />
        <span className='font-semibold text-white group-hover:text-gray-100 transition-colors'>
          Back
        </span>
      </Link>
    </div>
  );
}
