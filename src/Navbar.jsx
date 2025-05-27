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
    padding: '24px 48px',
    display: 'flex',
    gap: '40px',
    fontSize: '24px',
    marginTop: '20px',
    borderRadius: '12px',
    justifyContent: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Navbar;
