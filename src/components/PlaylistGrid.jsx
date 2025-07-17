// components/PlaylistGrid.jsx - Komponen grid playlist
import React from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistGrid = ({ playlists }) => {
  return (
    <div className="playlist-grid">
      {playlists.map(playlist => (
        <PlaylistCard 
          key={playlist.id} 
          playlist={playlist} 
        />
      ))}
    </div>
  );
};

export default PlaylistGrid;