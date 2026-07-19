import React from 'react';
import './PostCard.css';

export default function PostCard({ image, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
      <div className="image-container">
        <img src={image.imageUrl} alt={image.title} />
      </div>
      <div className="image-info">
        <h4 className="image-title">{image.title}</h4>
      </div>
    </div>
  );
}
