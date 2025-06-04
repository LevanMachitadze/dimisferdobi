"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/backbutton/page";
import Loader from "@/app/components/loader/page";

export default function AddPost() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const adminStatus = localStorage.getItem('isAdmin');
  //   if (adminStatus !== 'true') {
  //     router.push('/newsandevents');
  //   } else {
  //     setIsAdmin(true);
  //   }
  //   setIsCheckingAuth(false);
  // }, [router]);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       if (typeof result === 'string') {
  //         setImage(result);
  //       } else {
  //         setImage('');
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setImage('');
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const newPost = {
  //     id: Date.now(),
  //     title,
  //     image,
  //     content,
  //     createdAt: new Date().toISOString(),
  //   };

  //   const existing = localStorage.getItem('posts');
  //   const posts = existing ? JSON.parse(existing) : [];

  //   posts.unshift(newPost);
  //   localStorage.setItem('posts', JSON.stringify(posts));

  //   router.push('/newsandevents');
  // };

  // // ✅ Show loader while checking or during load delay
  // if (isCheckingAuth || isLoading) return <Loader />;
  // if (!isAdmin) return null;

  const fetchAboutUs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setAboutUs(response.data);
    } catch (error) {
      console.error("Error fetching about us:", error);
    }
  };

  return (
    <div className="min-h-screen px-4 py-20 text-white max-w-2xl mx-auto">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700"
          />
          {image && (
            <img src={image} alt="Preview" className="mt-4 rounded max-h-64" />
          )}
        </div>
        <div>
          <label className="block mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 h-40"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white shadow"
        >
          Publish
        </button>
      </form>
    </div>
  );
}
