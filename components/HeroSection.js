import React from 'react';

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