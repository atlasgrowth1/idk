
export default function ServicesSection({ siteData }) {
  const services = [
    {
      title: "Electrical Repairs",
      description: "We repair electrical issues safely and efficiently, from simple fixes to complex repairs.",
      icon: "🔧"
    },
    {
      title: "Lighting Installation",
      description: "Enhance your space with professional lighting installation services for any area of your property.",
      icon: "💡"
    },
    {
      title: "Panel Upgrades",
      description: "Upgrade your electrical panel to improve safety and accommodate modern electrical demands.",
      icon: "⚡"
    },
    {
      title: "Wiring Services",
      description: "Professional wiring services for new constructions, renovations, or outdated wiring replacements.",
      icon: "🔌"
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to identify potential hazards in your home or business.",
      icon: "🔍"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency electrical services for when you need immediate assistance.",
      icon: "🚨"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-3xl font-bold">Our Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function ServicesSection({ siteData }) {
  const services = [
    {
      id: 'residential',
      title: 'Residential Services',
      description: 'Complete electrical solutions for your home including repairs, installations, and upgrades.',
      icon: '🏠',
      link: '/residential'
    },
    {
      id: 'commercial',
      title: 'Commercial Services',
      description: 'Professional electrical services for businesses, offices, and commercial properties.',
      icon: '🏢',
      link: '/commercial'
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      description: '24/7 emergency electrical repairs to keep your home and business safe.',
      icon: '⚡',
      link: '/emergency'
    },
    {
      id: 'inspection',
      title: 'Electrical Inspections',
      description: 'Comprehensive inspections to ensure your electrical systems meet safety standards.',
      icon: '🔍',
      link: '/inspections'
    },
    {
      id: 'lighting',
      title: 'Lighting Design',
      description: 'Custom lighting solutions for indoor and outdoor spaces.',
      icon: '💡',
      link: '/lighting'
    },
    {
      id: 'panel',
      title: 'Panel Upgrades',
      description: 'Electrical panel replacements and upgrades for improved safety and capacity.',
      icon: '🔌',
      link: '/panel-upgrades'
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
