
export default function HeroSection({ siteData, title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          {siteData && (
            <p className="mb-6 text-lg">
              Serving {siteData.city}, {siteData.state} | {siteData.rating} ★ ({siteData.reviews} reviews)
            </p>
          )}
          <a href={ctaLink} className="btn btn-primary">{ctaText}</a>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function HeroSection({ title, subtitle, ctaText, ctaLink, siteData, backgroundImage }) {
  return (
    <section 
      className="hero" 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          
          {siteData && (
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="mr-2">⭐</span>
                <span className="font-bold">{siteData.rating}</span>
                <span className="mx-2">|</span>
                <span>{siteData.reviews} reviews</span>
              </div>
              
              <div className="mb-2">
                <p>{siteData.city}, {siteData.state}</p>
              </div>
            </div>
          )}
          
          <Link href={ctaLink} className="btn btn-primary">{ctaText}</Link>
        </div>
      </div>
    </section>
  );
}
