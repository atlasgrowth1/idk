import React from 'react';
import Link from 'next/link';

export default function ServicesSection({ siteData }) {
  const services = [
    {
      id: 1,
      title: "Electrical Repairs",
      description: "We repair electrical issues safely and efficiently, from simple fixes to complex repairs.",
      icon: "🔧",
      link: "/services/repairs"
    },
    {
      id: 2,
      title: "Lighting Installation",
      description: "Enhance your space with professional lighting installation services for any area of your property.",
      icon: "💡",
      link: "/services/lighting"
    },
    {
      id: 3,
      title: "Panel Upgrades",
      description: "Upgrade your electrical panel to improve safety and accommodate modern electrical demands.",
      icon: "⚡",
      link: "/services/panels"
    },
    {
      id: 4,
      title: "Home Rewiring",
      description: "Complete rewiring services to ensure your home's electrical system is safe and up to code.",
      icon: "🏠",
      link: "/services/rewiring"
    },
    {
      id: 5,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for when you need help right away.",
      icon: "🚨",
      link: "/services/emergency"
    },
    {
      id: 6,
      title: "Inspections",
      description: "Thorough electrical inspections to identify potential issues before they become problems.",
      icon: "🔍",
      link: "/services/inspections"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p>Comprehensive electrical solutions for all your needs</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary font-bold hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}