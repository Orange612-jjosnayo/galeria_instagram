import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import './App.css';

function App() {
  // El estado vive aquí arriba para poder enviarlo a Feed y modificarlo desde CreatePost
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      username: 'jjosnayo2102', 
      avatarUrl: 'https://i.pravatar.cc/150?u=1',
      imageUrl: 'https://picsum.photos/600/600?random=1', 
      likes: 124,
      caption: 'Configurando el nuevo entorno de desarrollo 🚀'
    }
  ]);

  const handleAddPost = (newPost) => {
    // Colocamos el nuevo post al inicio del arreglo
    setPosts([newPost, ...posts]);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Feed posts={posts} />} />
            <Route path="/create" element={<CreatePost onAddPost={handleAddPost} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
