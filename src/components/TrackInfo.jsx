// components/TrackInfo.jsx - Komponen info lagu yang sedang diputar
import React from 'react';

const TrackInfo = ({ track }) => {
  return (
    <div className="player-track">
      <img 
        src={`https://placehold.co/400?text=${encodeURIComponent(track.album)}`} 
        alt={`${track.title} by ${track.artist} album cover`}
        className="track-image" 
      />
      <div className="track-info">
        <h4>{track.title}</h4>
        <p>{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackInfo;