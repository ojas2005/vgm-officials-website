import React from 'react';
import './Instagram.css'; // assuming separate css or put in App.css

function Instagram() {
  const handles = [
    { name: 'VGM OFFICIALS', url: 'https://instagram.com/vgmofficials', image: '/assets/vgmLOGO.jpg' },
    { name: 'INSANE', url: 'https://instagram.com/VGMxINSANE', image: '/assets/InsaneLOGO.jpeg' },
    { name: 'TNTGOD', url: 'https://instagram.com/tntgod', image: '/path-to-tntgod.jpeg' },
    { name: 'VARUN', url: 'https://www.instagram.com/varunbgmi8', image: '/assets/varunLOGO.jpeg' },
    { name: 'MASTER', url: 'https://www.instagram.com/ig.ngu_master?igsh=MWVsOWlzMzFxejFkNA%3D%3D&utm_source=qr', image: '/assets/masterLOGO.jpeg' },
    { name: 'VEDU', url: 'https://www.instagram.com/itz.vedanttt.10?igsh=MXhuMWZ6dTN6bjFyNQ%3D%3D&utm_source=qr', image: '/assets/vedulogo1.jpeg' },
  ];

  return (
    <div className="instagram-page">
      <h2>Instagram Handles</h2>
      <div className="card-container">
        {handles.map((handle, index) => (
          <div key={index} className="card">
            <img src={handle.image} alt={handle.name} />
            <div className="card-content">
              <h3>{handle.name}</h3>
              <a href={handle.url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instagram;
