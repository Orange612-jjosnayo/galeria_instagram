import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* El logo lleva al inicio */}
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          InstagramClone
        </Link>
        <div className="navbar-actions">
          <Link to="/" className="navbar-btn" style={{ textDecoration: 'none', color: 'inherit' }}>🏠 Inicio</Link>
          <Link to="/create" className="navbar-btn" style={{ textDecoration: 'none', color: 'inherit' }}>➕ Crear</Link>
        </div>
      </div>
    </nav>
  );
}
