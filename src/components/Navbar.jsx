'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <span className="logo-icon">🖼️</span> Galería
        </Link>
        <div className="navbar-actions">
          <Link 
            href="/" 
            className={`navbar-btn ${pathname === '/' ? 'active' : ''}`}
          >
            Imágenes
          </Link>
          <Link 
            href="/create" 
            className={`navbar-btn ${pathname === '/create' ? 'active' : ''}`}
          >
            Añadir Imagen
          </Link>
        </div>
      </div>
    </nav>
  );
}
