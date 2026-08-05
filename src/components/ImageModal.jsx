import React, { useEffect } from 'react';
import './ImageModal.css';

export default function ImageModal({ image, onClose }) {
  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={image.imageUrl} alt={image.title} className="modal-image" />
        <div className="modal-info">
          <h3>{image.title}</h3>
        </div>
      </div>
    </div>
  );
}
