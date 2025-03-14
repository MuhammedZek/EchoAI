'use client';

import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start building AI solutions</h2>
          <p className="text-xl text-gray-700 mb-8">
            Curious how EchoAI can help you? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="cta-button text-center">
              Contact us — it's free
            </Link>
            <Link href="/community" className="secondary-button text-center">
              Join community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
