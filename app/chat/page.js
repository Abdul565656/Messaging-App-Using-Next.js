import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UnderConstructionChat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-800 text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Connectivity: <span className="text-white/80">Chat Reimagined</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Experience the future of communication. Secure, fast, and beautifully designed.
        </p>
        <p className="mt-2 text-lg text-yellow-400 font-semibold">Coming Soon</p>
      </div>

      <div className="relative w-full max-w-3xl h-64 mt-12 bg-white/10 rounded-xl shadow-lg border border-white/20 flex items-center justify-center overflow-hidden">
        <p className="text-white text-lg">We are working hard to bring this feature to life. Stay tuned!</p>
      </div>

      <div className="mt-10 flex gap-6">
        <Link href="/forums">
          <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-200 transition duration-300">
            Explore Forums
          </button>
        </Link>
        <Link href="/">
          <button className="px-6 py-3 bg-transparent text-white border border-white rounded-full hover:bg-white/20 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UnderConstructionChat;
