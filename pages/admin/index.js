import Layout from '../../components/Layout';
import PipelineView from '../../components/Admin/PipelineView';

export default function AdminDashboard() {
  return (
    <Layout title="Admin Dashboard">
      <div style={{ padding: '2rem 0' }}>
        <div className="container">
          <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>
          
          <PipelineView />
        </div>
      </div>
    </Layout>
  );
}