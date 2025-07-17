// components/SearchBar.jsx - Komponen pencarian
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, searchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery || '');

  useEffect(() => {
    setLocalQuery(searchQuery || '');
  }, [searchQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setLocalQuery(query);
    
    // Debounce search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleClear = () => {
    setLocalQuery('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <span className="menu-icon">🔍</span>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search for songs, artists, or playlists..." 
        value={localQuery}
        onChange={handleSearch}
      />
      {localQuery && (
        <button className="clear-search" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;