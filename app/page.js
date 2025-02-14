// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <Head>
        <title>Connectivity - Connect & Chat</title>
        <meta name="description" content="A modern chat application for seamless communication." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col font-sans">

        {/* Hero Section - No Image, Pure CSS Fancy */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 py-24 md:py-36">
          <div className="absolute inset-0 z-0">
            {/* Animated Background Shapes */}
            <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-purple-400 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-[80px] opacity-20 animate-float"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4 leading-none">
                Connectivity: <span className="text-purple-200">Chat Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto mb-10">
                Experience the future of communication. Secure, fast, and beautifully designed.
              </p>
              <div className="space-x-4">
                <Link href={`/forums`}>
                  <button className="bg-white text-purple-700 hover:bg-purple-100 hover:text-purple-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300">
                    Get Started
                  </button>
                </Link>
                <Link href="/features">
                    <button className="text-purple-200 hover:text-white hover:underline">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </section>



        {/* Features Section - Improved Visuals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Unleash the Power of Connection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Feature 1:  Use a cleaner approach with Tailwind classes only */}
                <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.466.976-1.297 2.18-2.516 3.218-.493.408-.89.854-1.168 1.332-.099.165-.197.332-.293.5H6.633Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.367 10.5h-.009" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Chat</h3>
                  <p className="text-gray-600">Instant messaging, no delays.</p>
                </div>

              {/* Feature 2 */}
              <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
                <p className="text-gray-600">End-to-end encryption for your peace of mind.</p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Robust infrastructure for smooth communication.</p>
              </div>

              {/* Feature 4, 5, and 6  -  Apply the same styling as above */}
              <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cross-Platform</h3>
                <p className="text-gray-600">Connect on web, iOS, and Android.</p>
              </div>

              <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable</h3>
                <p className="text-gray-600">Personalize your chat experience.</p>
              </div>

              <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Group Chats</h3>
                <p className="text-gray-600">Seamlessly connect with groups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Optional, but adds social proof) */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-600 italic mb-4">"Connectivity has transformed the way our team collaborates. It's so much faster and more reliable than our old system!"</p>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-3" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="Sarah M." />
                  <div>
                    <p className="font-semibold text-gray-800">Sarah M.</p>
                    <p className="text-gray-500">Project Manager</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-600 italic mb-4">"This platform has made communication within our team seamless. I can't imagine working without it!"</p>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-3" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Alex M." />
                  <div>
                    <p className="font-semibold text-gray-800">Alex M.</p>
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-600 italic mb-4">"The best collaboration tool our team has ever used. Highly recommended!"</p>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-3" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65479.jpg" alt="David M." />
                  <div>
                    <p className="font-semibold text-gray-800">David M.</p>
                    <p className="text-gray-500">Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Call to Action Section - Consistent with the Design */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Connectivity Revolution
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Start chatting with ease and security today.
            </p>
            <Link href="/signup">

                <button className="bg-white text-purple-700 hover:bg-purple-100 hover:text-purple-800 px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300">
                  Sign Up Free
                </button>

            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Connectivity.  All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy"><span className="hover:text-white cursor-pointer">Privacy Policy</span></Link>
                <Link href="/terms"><span className="hover:text-white cursor-pointer">Terms of Service</span></Link>
                <Link href="/contact"><span className="hover:text-white cursor-pointer">Contact Us</span></Link>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default HomePage;


export const metadata = {
  title: 'Home - Connectivity',
  description: 'Conncectivity helps you to connect with the people around the world',
}