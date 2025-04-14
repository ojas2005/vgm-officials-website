function YouTube() {
    const channels = [
      { name: 'INSANE', url: 'https://youtube.com/@INSANE' },
      { name: 'TNTGOD', url: 'https://youtube.com/@TNTGOD' },
      { name: 'VARUN', url: 'https://youtube.com/@VARUN' },
      { name: 'MASTER', url: 'https://youtube.com/@MASTER' },
      { name: 'VEDU', url: 'https://youtube.com/@VEDU' },
      { name: 'DEMON', url: 'https://youtube.com/@DEMON' },
    ];
  
    return (
      <div className="youtube-page">
        <h2>Player YouTube Channels</h2>
        <ul>
          {channels.map((channel, index) => (
            <li key={index}>
              <a href={channel.url} target="_blank" rel="noopener noreferrer">{channel.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default YouTube;