import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../lib/auth';

export default function Login() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { site } = router.query;
  
  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (!loading && user) {
      const siteParam = site ? `?site=${site}` : '';
      router.push(`/dashboard${siteParam}`);
    }
  }, [user, loading, router, site]);
  
  return (
    <Layout title="Client Login">
      <div style={{ padding: '4rem 0', backgroundColor: '#f3f4f6', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}