import Layout from '../../components/Layout';
import SiteCreator from '../../components/Admin/SiteCreator';

export default function CreateSite() {
  return (
    <Layout title="Create New Business Site">
      <div style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1>Create New Business Site</h1>
            <a href="/admin" className="btn btn-outline">Back to Dashboard</a>
          </div>
          
          <SiteCreator />
        </div>
      </div>
    </Layout>
  );
}