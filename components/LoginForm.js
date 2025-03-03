
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();
  const { site } = router.query;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    const success = login(username, password);
    
    if (success) {
      const siteParam = site ? `?site=${site}` : '';
      router.push(`/dashboard${siteParam}`);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="auth-form bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Client Login</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="block mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="mt-8">
          <button type="submit" className="btn btn-primary w-full">
            Log In
          </button>
        </div>
        
        <p className="mt-4 text-sm text-center text-gray-600">
          <small>Demo credentials: username "s" and password "s"</small>
        </p>
      </form>
    </div>
  );
}
