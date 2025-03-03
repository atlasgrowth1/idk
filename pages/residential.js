import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../lib/siteData';

export default function Residential() {
  const router = useRouter();
  const { site } = router.query;
  const [siteData, setSiteData] = useState(null);
  
  useEffect(() => {
    if (site) {
      const data = getSiteData(site);
      setSiteData(data);
    }
  }, [site]);
  
  // Residential services
  const services = [
    {
      id: 'repairs',
      title: 'Electrical Repairs',
      description: 'Our expert electricians can diagnose and repair any electrical issue in your home, from faulty outlets to circuit breaker problems. We provide fast and reliable service to keep your home safe and functioning properly.',
      image: '/residential-repairs.jpg' // Placeholder image path
    },
    {
      id: 'lighting',
      title: 'Lighting Installation',
      description: 'Enhance your home with professional lighting installation services. We offer indoor and outdoor lighting solutions, including recessed lighting, pendant lights, ceiling fans, landscape lighting, and more. Our team can help you design a lighting plan that adds beauty and functionality to your space.',
      image: '/residential-lighting.jpg' // Placeholder image path
    },
    {
      id: 'panels',
      title: 'Panel Upgrades',
      description: 'Modern homes require more power than ever before. If your electrical panel is outdated or overloaded, it may be time for an upgrade. Our panel upgrade services ensure your home has the capacity to handle all your electrical needs safely and efficiently.',
      image: '/residential-panels.jpg' // Placeholder image path
    },
    {
      id: 'wiring',
      title: 'Wiring and Rewiring',
      description: 'Whether you\'re building a new home or updating an older one, proper wiring is crucial for safety and functionality. We provide expert wiring and rewiring services to ensure your electrical system meets all current codes and safety standards.',
      image: '/residential-wiring.jpg' // Placeholder image path
    }
  ];
  
  return (
    <Layout title="Residential Electrical Services">
      <HeroSection 
        siteData={siteData} 
        title="Residential Electrical Services"
        subtitle="Comprehensive electrical solutions for your home"
        ctaText="Schedule Service"
        ctaLink="/dashboard/appointments"
        backgroundImage="/residential-hero.jpg" // Placeholder image path
      />
      
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Residential Services</h2>
            <p>We offer a wide range of electrical services for homeowners</p>
          </div>
          
          <div>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                style={{ 
                  marginBottom: '4rem',
                  display: 'grid', 
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: '3rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <h3 style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                  <a href={`/dashboard/appointments?site=${site || ''}`} className="btn btn-primary">
                    Schedule Service
                  </a>
                </div>
                
                <div 
                  style={{ 
                    height: '350px', 
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    order: index % 2 === 0 ? 2 : 1
                  }}
                >
                  {/* Placeholder for image */}
                  <div>Service Image</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}