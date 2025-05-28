import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Food</Link>
      <Link to="/cocktails" style={styles.link}>Cocktails</Link>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#222',
    padding: '0 32px',
    display: 'flex',
    gap: '40px',
    height: '64px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderRadius: '0 0 12px 12px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Navbar;
