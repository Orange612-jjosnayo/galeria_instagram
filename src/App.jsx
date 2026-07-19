import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import './App.css';

function App() {
  const [images, setImages] = useState([
    { 
      id: 1, 
      title: 'Paisaje de prueba 1',
      imageUrl: 'https://images.unsplash.com/photo-1784296868370-1020737f8faf?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: 2, 
      title: 'Arquitectura Moderna',
      imageUrl: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 3, 
      title: 'Bosque en otoño',
      imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 4, 
      title: 'Luces de la ciudad',
      imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 5, 
      title: 'Reflejos del lago',
      imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop'
    }
  ]);

  const handleAddImage = (newImage) => {
    setImages([newImage, ...images]);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Feed images={images} />} />
            <Route path="/create" element={<CreatePost onAddImage={handleAddImage} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
