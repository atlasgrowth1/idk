import Layout from '../../components/Layout';
import Sidebar from '../../components/Dashboard/Sidebar';
import AppointmentCalendar from '../../components/Dashboard/AppointmentCalendar';
import AppointmentsList from '../../components/Dashboard/AppointmentsList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../../lib/siteData';
import { useAuth } from '../../lib/auth';

import Layout from '../../components/Layout';
import Sidebar from '../../components/Dashboard/Sidebar';
import AppointmentCalendar from '../../components/Dashboard/AppointmentCalendar';
import AppointmentsList from '../../components/Dashboard/AppointmentsList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../../lib/siteData';
import { useAuth } from '../../lib/auth';

export default function AppointmentsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { site } = router.query;
  const [siteData, setSiteData] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [refreshKey, setRefreshKey] = useState(0);
  
  useEffect(() => {
    // Redirect if not logged in
    if (!loading && !user) {
      const siteParam = site ? `?site=${site}` : '';
      router.push(`/login${siteParam}`);
    }
    
    // Get site data
    if (site) {
      try {
        const data = getSiteData(site);
        setSiteData(data);
      } catch (error) {
        console.error("Error loading site data:", error);
      }
    }
  }, [loading, user, router, site]);
  
  const handleAppointmentAdded = () => {
    setActiveTab('upcoming');
    setRefreshKey(prev => prev + 1);
  };
  
  if (loading) {
    return (
      <Layout title="Appointments">
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          Loading...
        </div>
      </Layout>
    );
  }
  
  if (!user) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <Layout title="Appointments">
      <div className="dashboard-container">
        <Sidebar siteData={siteData} />
        
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Appointments</h1>
            <p>Schedule and manage your appointments</p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`btn ${activeTab === 'upcoming' ? 'btn-primary' : 'btn-outline'}`}
              >
                Upcoming Appointments
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`btn ${activeTab === 'schedule' ? 'btn-primary' : 'btn-outline'}`}
              >
                Schedule New Appointment
              </button>
            </div>
          </div>
          
          {activeTab === 'upcoming' ? (
            <AppointmentsList siteData={siteData} refreshTrigger={refreshKey} />
          ) : (
            <AppointmentCalendar siteData={siteData} onAppointmentAdded={handleAppointmentAdded} />
          )}
        </div>
      </div>
    </Layout>
  );
}