// App.jsx - Komponen utama aplikasi
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PlayerBar from './components/PlayerBar';
import PlaylistManager from './components/PlaylistManager';
import { AudioProvider } from './contexts/AudioContext';
import { playlistsData } from './data/playlistsData';
import { tracksData } from './data/tracksData';
import './styles/App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [playlists, setPlaylists] = useState(playlistsData);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [tracks, setTracks] = useState(tracksData);
  const [searchQuery, setSearchQuery] = useState('');
  const [volume, setVolume] = useState(70);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Load preferences from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedVolume = localStorage.getItem('volume');
    const savedPlaylists = localStorage.getItem('playlists');
    
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
    if (savedVolume) {
      setVolume(parseInt(savedVolume));
    }
    if (savedPlaylists) {
      setPlaylists(JSON.parse(savedPlaylists));
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('volume', volume.toString());
  }, [volume]);

  useEffect(() => {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }, [playlists]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Play specific track
  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  // Next track
  const nextTrack = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
  };

  // Previous track
  const previousTrack = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentTrack(tracks[prevIndex]);
  };

  // Playlist management
  const createPlaylist = (name, description = '') => {
    const newPlaylist = {
      id: Date.now(),
      title: name,
      description,
      tracks: [],
      createdAt: new Date().toISOString(),
      isCustom: true
    };
    setPlaylists([...playlists, newPlaylist]);
    return newPlaylist;
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter(p => p.id !== playlistId));
  };

  const updatePlaylist = (playlistId, updates) => {
    setPlaylists(playlists.map(p => 
      p.id === playlistId ? { ...p, ...updates } : p
    ));
  };

  const addTrackToPlaylist = (playlistId, track) => {
    setPlaylists(playlists.map(p => 
      p.id === playlistId 
        ? { ...p, tracks: [...(p.tracks || []), track] }
        : p
    ));
  };

  const removeTrackFromPlaylist = (playlistId, trackId) => {
    setPlaylists(playlists.map(p => 
      p.id === playlistId 
        ? { ...p, tracks: (p.tracks || []).filter(t => t.id !== trackId) }
        : p
    ));
  };

  const reorderPlaylistTracks = (playlistId, tracks) => {
    setPlaylists(playlists.map(p => 
      p.id === playlistId ? { ...p, tracks } : p
    ));
  };

  // Search functionality
  const searchTracks = (query) => {
    setSearchQuery(query);
    if (!query) return tracks;
    
    return tracks.filter(track =>
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase()) ||
      track.album.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <AudioProvider>
      <div className="app-container">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          playlists={playlists}
          onCreatePlaylist={createPlaylist}
        />
        <MainContent 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          activeTab={activeTab}
          playlists={playlists}
          tracks={tracks}
          searchQuery={searchQuery}
          onSearch={searchTracks}
          onPlayTrack={playTrack}
          onPlaylistSelect={setCurrentPlaylist}
          currentPlaylist={currentPlaylist}
          onDeletePlaylist={deletePlaylist}
          onUpdatePlaylist={updatePlaylist}
          onAddTrackToPlaylist={addTrackToPlaylist}
          onRemoveTrackFromPlaylist={removeTrackFromPlaylist}
          onReorderTracks={reorderPlaylistTracks}
        />
        <PlayerBar 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
          volume={volume}
          setVolume={setVolume}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          duration={duration}
          setDuration={setDuration}
        />
      </div>
    </AudioProvider>
  );
};

export default App;