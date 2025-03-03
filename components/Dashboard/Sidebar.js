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