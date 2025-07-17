import React from 'react';
import Header from './Header';
import PlaylistGrid from './PlaylistGrid';
import { playlistsData } from '../data/playlistsData';

const MainContent = ({ darkMode, toggleDarkMode }) => {
  const recentlyPlayedData = [...Array(4)].map((_, i) => ({
    id: i + 100,
    title: `Recently Played ${i + 1}`,
    description: 'Your recently played tracks'
  }));

  return (
    <div className="main-content">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      <h2 className="content-title">Good afternoon</h2>
      <PlaylistGrid playlists={playlistsData} />

      <h2 className="content-title">Recently played</h2>
      <PlaylistGrid playlists={recentlyPlayedData} />
    </div>
  );
};

export default MainContent;