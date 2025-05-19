import React from 'react';
import { Mail, Phone, Facebook } from 'lucide-react';
import Link from 'next/link';
import BackButton from '@/app/components/backbutton/page';

export default function ContactPage() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b to-gray-800 text-white'>
      <BackButton />
      <div className='w-full max-w-4xlbackdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center space-y-8'>
        <h1 className='text-6xl font-extrabold text-white drop-shadow-lg'>
          Contact Us
        </h1>

        <div className='space-y-6'>
          <div className='flex items-center justify-center gap-4'>
            <Mail className='text-white w-10 h-10' />
            <a
              href='mailto:dimisferdobi@gmail.com'
              className='text-2xl font-semibold text-white hover:text-yellow-400 transition-all'
            >
              dimisferdobi@gmail.com
            </a>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center justify-center gap-4'>
              <Phone className='text-white w-10 h-10' />
              <a
                href='tel:+995574223777'
                className='text-2xl font-semibold text-white hover:text-yellow-400 transition-all'
              >
                574223777 - Gaga Tchrelashvili
              </a>
            </div>
            <div className='flex items-center justify-center gap-4'>
              <Phone className='text-white w-10 h-10' />
              <a
                href='tel:+995598409540'
                className='text-2xl font-semibold text-white hover:text-yellow-400 transition-all'
              >
                598409540 - Gocha Tchrelashvili
              </a>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <Facebook className='text-white w-10 h-10' />
            <Link
              href='https://www.facebook.com/p/Dimis-Ferdobi-%E1%83%93%E1%83%98%E1%83%9B%E1%83%98%E1%83%A1-%E1%83%A4%E1%83%94%E1%83%A0%E1%83%93%E1%83%9D%E1%83%91%E1%83%98-100066647168813/'
              target='_blank'
              className='text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-all'
            >
              Dimis Ferdobi Facebook Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
