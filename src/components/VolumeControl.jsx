// components/VolumeControl.jsx - Komponen kontrol volume
import React, { useState } from 'react';

const VolumeControl = ({ volume, setVolume }) => {
  const [previousVolume, setPreviousVolume] = useState(volume);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeClick = () => {
    if (isMuted) {
      setVolume(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleVolumeBarClick = (e) => {
    const volumeBar = e.currentTarget;
    const rect = volumeBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newVolume = Math.max(0, Math.min(100, percentage * 100));
    
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return '🔇';
    if (volume < 30) return '🔈';
    if (volume < 70) return '🔉';
    return '🔊';
  };

  return (
    <div className="player-actions">
      <div className="volume-control" onClick={handleVolumeBarClick}>
        <div 
          className="volume-bar" 
          style={{ width: `${isMuted ? 0 : volume}%` }}
        ></div>
        <div 
          className="volume-handle" 
          style={{ left: `${isMuted ? 0 : volume}%` }}
        ></div>
      </div>
      <button className="control-button" onClick={handleVolumeClick}>
        {getVolumeIcon()}
      </button>
    </div>
  );
};

export default VolumeControl;sMuted);
  };

  const handleVolumeChange = (e) => {
    // Implementasi logika untuk mengubah volume
    // Ini bisa dikembangkan lebih lanjut dengan slider yang interaktif
    console.log('Volume changed');
  };

  return (
    <div className="player-actions">
      <div className="volume-control" onClick={handleVolumeChange}>
        <div className="volume-bar" style={{ width: `${isMuted ? 0 : volume}%` }}></div>
      </div>
      <button className="control-button" onClick={handleVolumeClick}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
};

export default VolumeControl;