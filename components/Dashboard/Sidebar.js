
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar({ siteData }) {
  const router = useRouter();
  const { site } = router.query;
  const siteParam = site ? `?site=${site}` : '';
  
  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/contacts', label: 'Contacts' },
    { href: '/dashboard/appointments', label: 'Appointments' },
    { href: '/dashboard/settings', label: 'Settings' },
  ];
  
  return (
    <div className="sidebar bg-gray-100 p-6 min-h-full">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          {siteData ? siteData.name : 'Dashboard'}
        </h3>
        <p className="text-sm text-gray-600">
          {siteData ? `${siteData.city}, ${siteData.state}` : ''}
        </p>
      </div>
      
      <nav>
        <ul className="space-y-4">
          {links.map(link => (
            <li key={link.href}>
              <Link 
                href={`${link.href}${siteParam}`}
                className={`block p-2 rounded-md ${
                  router.pathname === link.href 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-8">
        <Link 
          href={`/${siteParam}`}
          className="text-sm text-gray-600 hover:text-primary"
        >
          View Public Site
        </Link>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  
  const isActive = (path) => {
    return router.pathname === path ? 'bg-primary text-white' : 'hover:bg-gray-100';
  };
  
  return (
    <div className="sidebar bg-white min-h-screen p-4 border-r border-gray-200">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className={`block p-2 rounded-md ${isActive('/dashboard')}`}>
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/appointments" className={`block p-2 rounded-md ${isActive('/dashboard/appointments')}`}>
            <span>Appointments</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/contacts" className={`block p-2 rounded-md ${isActive('/dashboard/contacts')}`}>
            <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/reviews" className={`block p-2 rounded-md ${isActive('/dashboard/reviews')}`}>
            <span>Reviews</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/business" className={`block p-2 rounded-md ${isActive('/dashboard/business')}`}>
            <span>Business Info</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className={`block p-2 rounded-md ${isActive('/dashboard/settings')}`}>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href="/logout" className="block p-2 text-red-600 hover:bg-red-50 rounded-md">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
