'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EchoAI</h3>
            <p className="text-gray-400">
              Transform your business with AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/sales-bot" className="text-gray-400 hover:text-white">AI Sales Bot</Link></li>
              <li><Link href="/services/messenger-automation" className="text-gray-400 hover:text-white">Messenger Chat</Link></li>
              <li><Link href="/services/calendar-booking" className="text-gray-400 hover:text-white">Calendar Booking</Link></li>
              <li><Link href="/services/lead-generation" className="text-gray-400 hover:text-white">Lead Generation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="https://twitter.com/echoai" className="text-gray-400 hover:text-white">Twitter</Link></li>
              <li><Link href="https://linkedin.com/company/echoai" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
              <li><Link href="https://facebook.com/echoai" className="text-gray-400 hover:text-white">Facebook</Link></li>
              <li><Link href="https://instagram.com/echoai" className="text-gray-400 hover:text-white">Instagram</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© {new Date().getFullYear()} EchoAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
