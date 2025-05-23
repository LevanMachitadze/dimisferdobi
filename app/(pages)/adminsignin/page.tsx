'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { div } from 'framer-motion/client';
import BackButton from '@/app/components/backbutton/page';
import Loader from '@/app/components/loader/page';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/addposts');
    } else {
      alert('Wrong password');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <Loader />;

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-b  to-gray-900 text-white'>
      <BackButton />
      <div className='absolute top-4 left-4'>
        <button
          onClick={() => router.back()}
          className='bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded shadow'
        >
          Back
        </button>
      </div>
      <div className='p-4 max-w-md mx-auto h-full flex flex-col items-center justify-center  rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-4'>Admin Login</h1>
        <form onSubmit={handleLogin} className='space-y-4'>
          <input
            type='password'
            placeholder='Enter admin password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 border rounded'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
