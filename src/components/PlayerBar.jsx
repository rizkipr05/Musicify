// components/PlayerBar.jsx - Komponen pemutar musik
import React from 'react';
import TrackInfo from './TrackInfo';
import PlayerControls from './PlayerControls';
import VolumeControl from './VolumeControl';

const PlayerBar = ({ 
  currentTrack, 
  isPlaying, 
  togglePlayPause, 
  nextTrack, 
  previousTrack,
  volume,
  setVolume,
  currentTime,
  setCurrentTime,
  duration,
  setDuration
}) => {
  const handleSeek = (time) => {
    setCurrentTime(time);
  };

  return (
    <div className="player-bar">
      <TrackInfo track={currentTrack} />
      <PlayerControls 
        isPlaying={isPlaying} 
        togglePlayPause={togglePlayPause}
        nextTrack={nextTrack}
        previousTrack={previousTrack}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <VolumeControl 
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
};

export default PlayerBar;