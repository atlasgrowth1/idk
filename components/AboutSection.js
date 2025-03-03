
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
