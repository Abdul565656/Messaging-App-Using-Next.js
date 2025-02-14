"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-700 shadow-lg relative z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-white text-3xl font-bold tracking-wide">
          Connectivity
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-purple-800 md:bg-transparent md:static md:flex md:space-x-8 md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ zIndex: 50 }} // Ensure it appears above other elements
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-white font-medium text-lg">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/forums"
                className="block py-2 px-4 hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Forums
              </Link>
            </li>
            <li>
              <Link
                href="/chat"
                className="block py-2 px-4 hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                UserChat
              </Link>
            </li>
          </ul>
        </div>

        {/* User Profile Button */}
        <div className="hidden md:flex items-center">
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
