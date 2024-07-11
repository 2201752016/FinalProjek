import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Travel Journal
      </Link>
      <div className={styles.navLinks}>
        <Link href="/activity">
          Activity
        </Link>
        <Link href="/promo">
          Promo
        </Link>
        <button onClick={() => dispatch(toggleTheme())}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link href="/auth/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
