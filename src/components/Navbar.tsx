'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">EchoAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">
            Use Cases
          </Link>
          <Link href="/why-echoai" className="text-gray-700 hover:text-blue-600 transition-colors">
            Why EchoAI
          </Link>
          <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors">
            Careers
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact" className="cta-button">
            Contact us
          </Link>
          <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md">
            English
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">
              Use Cases
            </Link>
            <Link href="/why-echoai" className="text-gray-700 hover:text-blue-600 transition-colors">
              Why EchoAI
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="cta-button text-center">
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
