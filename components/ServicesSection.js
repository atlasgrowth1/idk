
import React from 'react';

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
      title: "Wiring & Rewiring",
      description: "Complete wiring and rewiring services for new construction or renovation projects.",
      icon: "🔌"
    },
    {
      title: "Ceiling Fan Installation",
      description: "Professional ceiling fan installation to improve comfort and energy efficiency.",
      icon: "🌀"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency electrical services to address urgent issues when they arise.",
      icon: "🚨"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-3xl font-bold">Our Services</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          We offer a wide range of electrical services for residential and commercial properties.
          {siteData && ` Serving ${siteData.city}, ${siteData.state} and surrounding areas.`}
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" className="btn btn-primary">View All Services</a>
        </div>
      </div>
    </section>
  );
}
