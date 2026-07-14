import React from 'react';
import PostCard from '../components/PostCard';
import './Feed.css';

export default function Feed({ posts }) {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          username={post.username} 
          avatarUrl={post.avatarUrl}
          imageUrl={post.imageUrl} 
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
