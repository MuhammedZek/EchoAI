'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform your business with AI-powered solutions
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            We help companies build and launch incredible AI agents and custom automations, for any use case, faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="cta-button text-center">
              Let's talk — it's free
            </Link>
            <Link href="/solutions" className="secondary-button text-center">
              Our solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
