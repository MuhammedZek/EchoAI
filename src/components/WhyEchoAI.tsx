'use client';

import Link from 'next/link';

export default function WhyEchoAI() {
  const reasons = [
    {
      title: "Cutting-Edge AI Technology",
      description: "We leverage the latest advancements in artificial intelligence to deliver powerful, efficient solutions."
    },
    {
      title: "Custom Solutions",
      description: "Every business is unique. We tailor our AI solutions to meet your specific needs and challenges."
    },
    {
      title: "Rapid Implementation",
      description: "Get your AI automation up and running quickly with our streamlined development process."
    },
    {
      title: "Cost-Effective",
      description: "Our solutions provide exceptional ROI by reducing operational costs and increasing efficiency."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose EchoAI?</h2>
        <p className="section-subtitle">
          Trusted by businesses building AI agents across every channel and use case
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/contact" className="cta-button">
            Start building AI solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
