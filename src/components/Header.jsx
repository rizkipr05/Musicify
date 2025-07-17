// components/Header.jsx - Komponen header dengan search dan theme toggle
import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="header">
      <SearchBar />
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default Header;