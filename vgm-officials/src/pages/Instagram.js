function Instagram() {
    const handles = [
      { name: 'VGM OFFICIALS', url: 'https://instagram.com/vgmofficials' },
      { name: 'INSANE', url: 'https://instagram.com/insane' },
      { name: 'TNTGOD', url: 'https://instagram.com/tntgod' },
      { name: 'VARUN', url: 'https://instagram.com/varun' },
      { name: 'MASTER', url: 'https://instagram.com/master' },
      { name: 'VEDU', url: 'https://instagram.com/vedu' },
      { name: 'DEMON', url: 'https://instagram.com/demon' },
    ];
  
    return (
      <div className="instagram-page">
        <h2>Instagram Handles</h2>
        <ul>
          {handles.map((handle, index) => (
            <li key={index}>
              <a href={handle.url} target="_blank" rel="noopener noreferrer">{handle.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Instagram;