'use client';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  const [locale, setLocale] = React.useState('en');
  const changeLanguage = (lang: string) => {
    setLocale(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  };
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <nav className='flex justify-between items-center w-full'>
        <div className=''>
          <Link href='/'>Logo</Link>
        </div>
        <div className='flex space-x-4'>
          <button
            className={`border p-2 font-bold rounded-md text-sm ${
              locale === 'en' && 'bg-white text-black'
            }`}
          >
            EN
          </button>
          <button
            className={`border p-2 font-bold rounded-md text-sm ${
              locale === 'ge' && 'bg-white text-black'
            }`}
          >
            GE
          </button>
        </div>
      </nav>
    </div>
  );
}
