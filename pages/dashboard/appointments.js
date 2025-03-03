import Layout from '../../components/Layout';
import Sidebar from '../../components/Dashboard/Sidebar';
import AppointmentCalendar from '../../components/Dashboard/AppointmentCalendar';
import AppointmentsList from '../../components/Dashboard/AppointmentsList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../../lib/siteData';
import { useAuth } from '../../lib/auth';

export default function Appointments() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { site } = router.query;
  const [siteData, setSiteData] = useState(null);
  const [activeTab, setActiveTab] = useState('calendar');

  useEffect(() => {
    // Redirect if not logged in
    if (!loading && !user) {
      const siteParam = site ? `?site=${site}` : '';
      router.push(`/login${siteParam}`);
    }

    // Get site data
    if (site) {
      const data = getSiteData(site);
      setSiteData(data);
    }
  }, [loading, user, router, site]);

  if (loading) {
    return (
      <Layout title="Appointments">
        <div className="container py-16 text-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <Layout title="Appointments">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <Sidebar siteData={siteData} />
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Appointments</h1>

              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('calendar')}
                  className={`px-4 py-2 rounded ${activeTab === 'calendar' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                >
                  Calendar View
                </button>
                <button 
                  onClick={() => setActiveTab('list')}
                  className={`px-4 py-2 rounded ${activeTab === 'list' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                >
                  List View
                </button>
              </div>
            </div>

            {activeTab === 'calendar' ? (
              <AppointmentCalendar siteData={siteData} />
            ) : (
              <AppointmentsList siteData={siteData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}