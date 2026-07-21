'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addImage } from '../../actions/imageActions';
import '../../pages/CreatePost.css';

export default function CreatePostPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl || !title) return;

    setLoading(true);
    const result = await addImage(title, imageUrl);
    setLoading(false);

    if (result.success) {
      router.push('/');
    } else {
      alert('Error al guardar la imagen en la base de datos.');
    }
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
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar Imagen'}
        </button>
      </form>
    </div>
  );
}
