import React from 'react'
import Link from 'next/link'

const Chat = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-pink-300 to-violet-400 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white/30 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/40 hover:border-pink-300/50 transition-all duration-300">
          
          {/* Hero Icon */}
          <div className="flex justify-center mb-10">
            <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 hover:rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight leading-tight">
            Connect, Chat & Create Magic
          </h1>

          <p className="text-2xl text-center text-gray-700 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Experience the future of communication with our cutting-edge chat platform. Where every conversation becomes an adventure.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/40 backdrop-blur rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/50 hover:border-pink-300/50 shadow-lg">
              <div className="flex items-center space-x-4 text-gray-800">
                <span className="text-3xl">💫</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">Real-time Magic</h3>
                  <p className="text-gray-600">Instant messaging with zero delay</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/50 hover:border-pink-300/50 shadow-lg">
              <div className="flex items-center space-x-4 text-gray-800">
                <span className="text-3xl">🎨</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">Rich Expression</h3>
                  <p className="text-gray-600">Share moments with style</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
           <Link href={`/forums`}> <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              Start Chatting Now
            </button></Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Chat
