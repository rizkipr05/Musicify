import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'search', icon: '🔍', label: 'Search' },
    { id: 'library', icon: '📚', label: 'Your Library' },
    { id: 'liked', icon: '❤️', label: 'Liked Songs' },
    { id: 'create', icon: '＋', label: 'Create Playlist' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">♫</span>
        <span>Musicify</span>
      </div>
      
      {menuItems.map(item => (
        <div 
          key={item.id}
          className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="menu-icon">{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;