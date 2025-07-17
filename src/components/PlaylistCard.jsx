// components/PlaylistCard.jsx - Komponen kartu playlist
import React from 'react';

const PlaylistCard = ({ playlist }) => {
  const handleCardClick = () => {
    // Implementasi logika untuk membuka playlist
    console.log('Opening playlist:', playlist.title);
  };

  return (
    <div className="playlist-card" onClick={handleCardClick}>
      <img 
        src={`https://placehold.co/400?text=${encodeURIComponent(playlist.title)}`} 
        alt={`${playlist.title} playlist cover art with stylish background`}
        className="playlist-image" 
      />
      <h3 className="playlist-title">{playlist.title}</h3>
      <p className="playlist-description">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;