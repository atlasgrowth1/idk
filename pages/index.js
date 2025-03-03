import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../lib/siteData';

export default function Home() {
  const router = useRouter();
  const { site } = router.query;
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (site) {
      try {
        const data = getSiteData(site);
        setSiteData(data);
      } catch (error) {
        console.error("Error loading site data:", error);
      }
    } else {
      // Set default site data when no site parameter is provided
      setSiteData({
        name: "Your Electrician",
        phone: "+1 555-123-4567",
        email_1: "contact@yourelectrician.com",
        city: "Your City",
        state: "State",
        rating: 5.0,
        reviews: 50
      });
    }
    setLoading(false);
  }, [site]);
  
  if (loading) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <HeroSection 
        siteData={siteData} 
        title={siteData ? `Professional Electrical Services by ${siteData.name}` : 'Professional Electrical Services'}
        subtitle="Quality electrical services for your home and business"
        ctaText="Schedule Service"
        ctaLink="/dashboard/appointments"
      />
      
      <AboutSection siteData={siteData} />
      
      <ServicesSection siteData={siteData} />
    </Layout>
  );
}