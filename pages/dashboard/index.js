import Layout from '../../components/Layout';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../../lib/siteData';
import { useAuth } from '../../lib/auth';
import { getContacts, getReviewMetrics } from '../../lib/contacts';
import { getAppointments } from '../../lib/appointments';

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { site } = router.query;
  const [siteData, setSiteData] = useState(null);
  const [metrics, setMetrics] = useState({
    totalContacts: 0,
    reviewsRequested: 0,
    reviewsReceived: 0,
    upcomingAppointments: 0
  });
  
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
      
      if (data) {
        // Get metrics data
        const contactsMetrics = getReviewMetrics(data.site);
        const appointments = getAppointments(data.site);
        const activeAppointments = appointments.filter(app => app.status !== 'cancelled');
        
        setMetrics({
          totalContacts: contactsMetrics.totalContacts,
          reviewsRequested: contactsMetrics.reviewsRequested,
          reviewsReceived: contactsMetrics.reviewsReceived,
          upcomingAppointments: activeAppointments.length
        });
      }
    }
  }, [loading, user, router, site]);
  
  if (loading) {
    return (
      <Layout title="Dashboard">
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
    <Layout title="Client Dashboard">
      <div className="dashboard-container">
        <Sidebar siteData={siteData} />
        
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Welcome to Your Dashboard</h1>
            <p>Manage your contacts and appointments</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Contacts</h3>
              <div className="stat-value">{metrics.totalContacts}</div>
            </div>
            
            <div className="stat-card">
              <h3>Reviews Requested</h3>
              <div className="stat-value">{metrics.reviewsRequested}</div>
            </div>
            
            <div className="stat-card">
              <h3>Reviews Received</h3>
              <div className="stat-value">{metrics.reviewsReceived}</div>
            </div>
            
            <div className="stat-card">
              <h3>Upcoming Appointments</h3>
              <div className="stat-value">{metrics.upcomingAppointments}</div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Quick Actions</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              <a
                href={`/dashboard/contacts${site ? `?site=${site}` : ''}`}
                className="btn btn-primary"
                style={{ textAlign: 'center' }}
              >
                Manage Contacts
              </a>
              
              <a
                href={`/dashboard/appointments${site ? `?site=${site}` : ''}`}
                className="btn btn-secondary"
                style={{ textAlign: 'center' }}
              >
                Schedule Appointment
              </a>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '8px' }}>
            <h2 style={{ marginBottom: '1rem' }}>How to Use Your Dashboard</h2>
            
            <ol style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
              <li><strong>Manage Contacts:</strong> Add new contacts and request reviews from your clients.</li>
              <li><strong>Schedule Appointments:</strong> View your calendar and schedule new appointments.</li>
              <li><strong>Track Reviews:</strong> Monitor review requests and responses.</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}