'use client';
import React, { useEffect, useState } from 'react';
import BackButton from '@/app/components/backbutton/page';
import Loader from '@/app/components/loader/page';
import { useRouter } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
  createdAt: string;
}

export default function NewsAndEvents() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');

    const data = localStorage.getItem('posts');
    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAdminClick = () => {
    if (isAdmin) {
      router.push('/addposts');
    } else {
      router.push('/adminsignin');
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className='relative min-h-screen px-4 pt-20 text-white'>
      <div className='absolute top-4 left-4'>
        <BackButton />
      </div>

      <div className='absolute top-4 right-4'>
        <button
          onClick={handleAdminClick}
          className='bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded shadow'
        >
          {isAdmin ? 'Add Post' : 'Admin'}
        </button>
      </div>

      <div className='max-w-3xl mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-8'>News & Events</h1>

        {posts.length === 0 ? (
          <p className='text-gray-300'>No posts yet.</p>
        ) : (
          <div className='space-y-8'>
            {posts.map((post) => (
              <div
                key={post.id}
                className='border border-gray-600 rounded-xl p-4'
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-64 object-cover rounded mb-4'
                />
                <h2 className='text-2xl font-semibold mb-2'>{post.title}</h2>
                <p className='text-sm text-gray-400 mb-4'>
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <p className='text-white'>{post.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
