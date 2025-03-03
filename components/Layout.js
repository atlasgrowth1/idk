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
              <li><a href="/about" className="hover:text-secondary">About</a></li>
              <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
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
              <p>Professional electrical services you can trust.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/services" className="hover:text-primary">Services</a></li>
                <li><a href="/about" className="hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>123 Main St</p>
              <p>Your City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@yourelectrician.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Your Electrician. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}