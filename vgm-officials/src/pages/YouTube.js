import React from 'react';

function YouTube() {
  const channels = [
    { name: 'INSANE', url: 'https://www.youtube.com/@VGMxINSANEigl', image: '/assets/InsaneLOGO.jpeg' },
    { name: 'TNTGOD', url: 'https://youtube.com/@TNTGOD', image: '/path-to-image2.jpg' },
    { name: 'VARUN', url: 'https://www.youtube.com/@VarunBGMi5', image: '/assets/varunLOGO.jpeg'},
    { name: 'MASTER', url: 'https://www.youtube.com/@ngumaster17', image: '/assets/masterLOGO.jpeg' },
    { name: 'VEDU', url: 'https://youtube.com/@VEDU', image: '/path-to-image5.jpg' },
  ];

  return (
    <div className="youtube-page">
      <h2>Player YouTube Channels</h2>
      <div className="card-container">
        {channels.map((channel, index) => (
          <div key={index} className="card">
            <img src={channel.image} alt={channel.name} />
            <div className="card-content">
              <h3>{channel.name}</h3>
              <a href={channel.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTube;
