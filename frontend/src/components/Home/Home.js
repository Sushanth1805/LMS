import React from 'react';
import './Home.css'; // Import custom styles for Home component
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Container'>
      <div className='Content'>
        <div className='SubContent'>
          <h1 style={{ fontWeight: 'bold', fontSize: '4rem', color: 'white' }}>Book Library</h1>
          <p style={{ fontWeight: 'bold', fontSize: '2rem', color: 'white' }}>Manage your Books</p>

          <button type='button' className='btn btn-outline-dark'>
            <Link to='/login' style={{ fontFamily: 'Arial, sans-serif', textDecoration: 'none' }}>Get started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;