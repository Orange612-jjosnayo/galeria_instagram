import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost({ onAddImage }) {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl || !title) return;

    const newImage = {
      id: Date.now(),
      title: title,
      imageUrl: imageUrl
    };

    onAddImage(newImage);
    navigate('/');
  };

  return (
    <div className="add-image-container">
      <h2>Añadir a la galería</h2>
      <form onSubmit={handleSubmit} className="add-image-form">
        <div className="form-group">
          <label>Nombre de la imagen</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Ej. Paisaje de montañas"
            required
          />
        </div>
        <div className="form-group">
          <label>URL de la imagen</label>
          <input 
            type="url" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            placeholder="https://ejemplo.com/foto.jpg"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Guardar Imagen</button>
      </form>
    </div>
  );
}
