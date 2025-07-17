// components/PlayerControls.jsx - Komponen kontrol pemutar musik
import React from 'react';

const PlayerControls = ({ 
  isPlaying, 
  togglePlayPause, 
  nextTrack, 
  previousTrack,
  currentTime,
  duration,
  onSeek
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    onSeek(newTime);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="player-controls">
      <div className="control-buttons">
        <button className="control-button" onClick={previousTrack}>
          ⏮
        </button>
        <button className="control-button play-pause" onClick={togglePlayPause}>
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button className="control-button" onClick={nextTrack}>
          ⏭
        </button>
      </div>
      
      <div className="progress-section">
        <span className="time-display">{formatTime(currentTime)}</span>
        <div className="progress-container" onClick={handleProgressClick}>
          <div 
            className="progress-bar" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
          <div 
            className="progress-handle" 
            style={{ left: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="time-display">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default PlayerControls;