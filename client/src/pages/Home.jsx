import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
          Social Mock Generator
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666' }}>
          Create realistic-looking social media screenshots for WhatsApp, Instagram, Twitter, and more!
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/create" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Create New Mock
          </Link>
          <Link to="/templates" className="btn" style={{ 
            textDecoration: 'none', 
            backgroundColor: '#6c757d', 
            color: 'white' 
          }}>
            Browse Templates
          </Link>
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2>Popular Platforms</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px', 
            marginTop: '30px' 
          }}>
            {['WhatsApp', 'Instagram', 'Twitter', 'iMessage', 'Facebook', 'Telegram'].map(platform => (
              <div key={platform} style={{
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3>{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;