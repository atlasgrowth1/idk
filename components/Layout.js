
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
              <li><a href="/dashboard" className="hover:text-secondary">Dashboard</a></li>
              <li><a href="/login" className="hover:text-secondary">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="bg-primary-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Your Electrician</h3>
              <p>Professional electrical services for your home and business</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>+1 555-123-4567</p>
              <p>contact@yourelectrician.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday: 9am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Your Electrician. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
import React from 'react';
import Head from 'next/head';

export default function Layout({ children, title = 'Electrician Services' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Professional electrical services for homes and businesses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-primary text-white">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="logo">
            <a href="/" className="text-2xl font-bold">Your Electrician</a>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/residential" className="hover:underline">Residential</a></li>
              <li><a href="/commercial" className="hover:underline">Commercial</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
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
              <p>Professional electrical services for your home and business</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Phone: +1 555-123-4567</p>
              <p>Email: contact@yourelectrician.com</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 8AM - 5PM</p>
              <p>Saturday: 9AM - 2PM</p>
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
