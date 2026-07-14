import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost({ onAddPost }) {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (!imageUrl) return;

    // Construimos el objeto de la nueva foto
    const newPost = {
      id: Date.now(), // ID único temporal
      username: 'jjosnayo2102', // Tu usuario
      avatarUrl: 'https://i.pravatar.cc/150?u=jjosnayo2102',
      imageUrl: imageUrl,
      likes: 0,
      caption: caption
    };

    onAddPost(newPost); // Enviamos el dato al archivo principal
    navigate('/'); // Redirigimos al Inicio
  };

  return (
    <div className="create-post-container">
      <h2>Nueva publicación</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label>URL de la imagen:</label>
          <input 
            type="url" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            placeholder="https://ejemplo.com/foto.jpg"
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea 
            value={caption} 
            onChange={(e) => setCaption(e.target.value)} 
            placeholder="Escribe un pie de foto..."
            rows="3"
          />
        </div>
        <button type="submit" className="submit-btn">Compartir</button>
      </form>
    </div>
  );
}
