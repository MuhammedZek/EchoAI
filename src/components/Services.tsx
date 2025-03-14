'use client';

import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 hover:underline">
        Learn more →
      </Link>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "AI Sales Bot",
      description: "Integrate AI sales assistants on your website or social media to convert visitors into customers.",
      icon: "🤖",
      link: "/services/sales-bot"
    },
    {
      title: "Messenger Chat Automation",
      description: "Let AI handle your customer conversations on Facebook Messenger for seamless shopping experiences.",
      icon: "💬",
      link: "/services/messenger-automation"
    },
    {
      title: "Calendar Booking",
      description: "Automate appointment scheduling with AI that manages your calendar efficiently.",
      icon: "📅",
      link: "/services/calendar-booking"
    },
    {
      title: "Lead Generation",
      description: "Transform conversations into qualified leads with AI-powered lead generation.",
      icon: "🔍",
      link: "/services/lead-generation"
    },
    {
      title: "Shopify Order Checker",
      description: "Provide instant order status updates to customers with AI support agents.",
      icon: "🛒",
      link: "/services/shopify-order-checker"
    },
    {
      title: "Instagram DM Automation",
      description: "Boost sales with instant AI responses to Instagram direct messages.",
      icon: "📱",
      link: "/services/instagram-automation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our AI Solutions</h2>
        <p className="section-subtitle">
          Get started with real projects for popular use cases created by our team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
