import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import ImageModal from '../components/ImageModal';
import './Feed.css';

export default function Feed({ images }) {
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
