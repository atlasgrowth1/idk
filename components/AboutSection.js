import React from 'react';

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

            <p className="mb-4">
              Our team of licensed electricians is committed to delivering high-quality workmanship and excellent customer service.
              We stay up-to-date with the latest electrical codes and technologies to offer you the best solutions.
            </p>

            <div className="mt-6">
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}