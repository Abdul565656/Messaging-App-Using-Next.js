"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 shadow-lg relative z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-white text-3xl font-extrabold tracking-tight hover:text-purple-100 transition-colors duration-200"
        >
          Connectivity
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-opacity-50 rounded-lg p-2 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-full left-0 w-full md:static md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out transform ${
            isOpen 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 -translate-y-2 invisible md:opacity-100 md:translate-y-0 md:visible"
          }`}
        >
          <div className="bg-purple-800 md:bg-transparent shadow-lg md:shadow-none">
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-white font-medium text-lg">
              <li>
                <Link
                  href="/"
                  className="block py-3 px-6 md:px-0 hover:bg-purple-700 md:hover:bg-transparent hover:text-yellow-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/forums"
                  className="block py-3 px-6 md:px-0 hover:bg-purple-700 md:hover:bg-transparent hover:text-yellow-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="block py-3 px-6 md:px-0 hover:bg-purple-700 md:hover:bg-transparent hover:text-yellow-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  UserChat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* User Profile Button */}
        <div className="hidden md:flex items-center ml-6">
          <div className="hover:opacity-80 transition-opacity duration-200">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
