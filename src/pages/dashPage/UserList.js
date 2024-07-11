import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import useGetData from '../../api/useApi/useGetData';
import styles from '../../styles/UserList.module.css';

const UserList = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const { data: users, loading, error } = useGetData('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', token);
  const router = useRouter();
  const isAuthenticated = token !== null;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div>
      <Navbar />
      <div className={styles.userListContainer}>
        <h1>User List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching data</p>}
        {!loading && !error && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;
