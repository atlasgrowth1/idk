
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
