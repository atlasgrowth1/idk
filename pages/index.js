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
  
  useEffect(() => {
    if (site) {
      const data = getSiteData(site);
      setSiteData(data);
    }
  }, [site]);
  
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