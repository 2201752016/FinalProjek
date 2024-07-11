import { useState } from 'react';
import Link from 'next/link';
import useAuth from '../../api/useApi/useAuth';
import styles from '../../styles/Auth.module.css';
import Layout from '../../components/Layout'; 

const Login = () => {
  const { Auth, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Auth('login', { email, password });
  };

  return (
    <Layout>
      <div className={styles.authPage}>
        <div className={styles.authContainer}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p>
            Don't have an account? <Link href="/auth/register">Register here</Link>
          </p>
        </div>
      </div>  
    </Layout>
  );
};

export default Login;
