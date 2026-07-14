import React from 'react';

export default function PostCard({ username, imageUrl, likes }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '8px' }}>
      <h4 style={{ margin: '0 0 10px 0' }}>@{username}</h4>
      <img src={imageUrl} alt={`Foto de ${username}`} style={{ width: '100%', maxWidth: '400px' }} />
      <p>❤️ {likes} Me gusta</p>
    </div>
  );
}
