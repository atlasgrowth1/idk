
export default function AboutSection({ siteData }) {
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <h2 className="section-title text-3xl font-bold">About Us</h2>
        
        <div className="about-content">
          <div>
            <img 
              src="/images/electrician.jpg" 
              alt="Professional Electrician" 
              className="rounded-lg shadow-md w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400?text=Professional+Electrician";
              }}
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {siteData ? siteData.name : "Your Electrician"}
            </h3>
            
            <p className="mb-4">
              We provide professional electrical services for residential and commercial properties. 
              With over 15 years of experience, we ensure safe and reliable electrical installations and repairs.
            </p>
            
            <p className="mb-6">
              Our team of licensed electricians is committed to delivering exceptional service 
              and peace of mind for all your electrical needs.
            </p>
            
            {siteData && (
              <div className="mb-6">
                <p className="font-bold">Contact Information:</p>
                <p>Phone: {siteData.phone}</p>
                <p>Email: {siteData.email_1}</p>
              </div>
            )}
            
            <a href="/dashboard/appointments" className="btn btn-outline">Schedule a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';

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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
