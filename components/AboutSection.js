import React from 'react';

export default function AboutSection({ siteData }) {
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p>Trusted electrical services since 2005</p>
        </div>

        <div className="about-content">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose {siteData ? siteData.name : 'Us'}?</h3>

            <div className="space-y-4">
              <p>
                With over 15 years of experience in the electrical industry, we've built a reputation for excellence in {siteData ? siteData.city : 'the area'} and beyond. Our team of licensed electricians are committed to providing safe, reliable, and efficient electrical services.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>24/7 emergency services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Upfront, transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="/images/electrician.jpg" 
              alt="Professional Electrician"
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400?text=Professional+Electrician";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}