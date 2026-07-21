'use client';

import React, { useState } from 'react';
import PostCard from './PostCard';
import ImageModal from './ImageModal';
import '../pages/Feed.css'; // Mantenemos el CSS original

export default function FeedClient({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="gallery-grid">
        {images.map((image) => (
          <PostCard 
            key={image.id} 
            image={image}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      
      <ImageModal 
        image={selectedImage} 
        onClose={closeModal} 
      />
    </>
  );
}
