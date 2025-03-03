
import Head from 'next/head';

export default function Layout({ children, title = 'Electrician Services' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Professional electrical services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Your Electrician</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-secondary">Home</a></li>
              <li><a href="/services" className="hover:text-secondary">Services</a></li>
              <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
              <li><a href="/login" className="hover:text-secondary">Client Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Your Electrician</h3>
              <p>Professional electrical services for residential and commercial properties.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@yourelectrician.com</p>
              <p>Address: 123 Main St, Your City</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 8am - 5pm</p>
              <p>Saturday: 9am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Your Electrician. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
