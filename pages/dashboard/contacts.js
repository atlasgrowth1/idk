import Layout from '../../components/Layout';
import Sidebar from '../../components/Dashboard/Sidebar';
import ContactForm from '../../components/Dashboard/ContactForm';
import ContactsList from '../../components/Dashboard/ContactsList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSiteData } from '../../lib/siteData';
import { useAuth } from '../../lib/auth';

export default function ContactsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { site } = router.query;
  const [siteData, setSiteData] = useState(null);
  const [activeTab, setActiveTab] = useState('list');
  const [refreshKey, setRefreshKey] = useState(0);
  
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
  
  const handleContactAdded = () => {
    setActiveTab('list');
    setRefreshKey(prev => prev + 1);
  };
  
  if (loading) {
    return (
      <Layout title="Contacts">
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
    <Layout title="Contacts">
      <div className="dashboard-container">
        <Sidebar siteData={siteData} />
        
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Contacts</h1>
            <p>Manage your contacts and send review requests</p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setActiveTab('list')}
                className={`btn ${activeTab === 'list' ? 'btn-primary' : 'btn-outline'}`}
              >
                View Contacts
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`btn ${activeTab === 'add' ? 'btn-primary' : 'btn-outline'}`}
              >
                Add New Contact
              </button>
            </div>
          </div>
          
          {activeTab === 'list' ? (
            <ContactsList siteData={siteData} refreshTrigger={refreshKey} />
          ) : (
            <ContactForm siteData={siteData} onContactAdded={handleContactAdded} />
          )}
        </div>
      </div>
    </Layout>
  );
}