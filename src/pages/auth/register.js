import { useState } from 'react';
import Link from 'next/link';
import useAuth from '../../api/useApi/useAuth';
import styles from '../../styles/Auth.module.css';
import Layout from '../../components/Layout';

const Register = () => {
  const { Auth, loading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Auth('register', { name, email, password });
  };

  return (
    <Layout >
      <div className={styles.authPage}>
        <div className={styles.authContainer}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
          <p>
            Already have an account? <Link href="/auth/login">Login here</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
