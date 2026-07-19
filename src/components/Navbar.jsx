import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <span className="logo-icon">🖼️</span> Galería
        </Link>
        <div className="navbar-actions">
          <Link 
            to="/" 
            className={`navbar-btn ${location.pathname === '/' ? 'active' : ''}`}
          >
            Imágenes
          </Link>
          <Link 
            to="/create" 
            className={`navbar-btn ${location.pathname === '/create' ? 'active' : ''}`}
          >
            Añadir Imagen
          </Link>
        </div>
      </div>
    </nav>
  );
}
