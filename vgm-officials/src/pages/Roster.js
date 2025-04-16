import './Roster.css';

const players = [
  {
    name: 'INSANE',
    role: 'IGL',
    image: '/assets/insanePic.jpeg',
    intro: 'The fearless IGL with a mind like a chessboard and nerves of steel. Known for unpredictable rotations and next-level reads, he commands the battlefield with raw instinct and surgical precision. The brain behind the mayhem.',
    device: 'iPhone 15 Pro',
    age: 20,
    experience: '5 years'
  },
  {
    name: 'TNTGOD',
    role: 'Entry Fragger',
    image: '/assets/tnt.jpeg',
    intro: 'The walking detonation. First into the fray, last to back down. With reflexes sharp as razors and aim that hits like a freight train, he tears through enemy lines like a storm. When TNTGOD enters, defenses crumble.',
    device: 'iPhone 16 pro',
    age: 18,
    experience: '5 years'
  },
  {
    name: 'VARUN',
    role: 'Support + Assaulter',
    image: '/assets/varun.jpeg',
    intro: 'The silent storm. A perfect fusion of support and aggression, he covers the squad’s six while pushing forward with precision. Calm under pressure, deadly in combat — VARUN turns the tide with every move.',
    device: 'iPhone 13',
    age: 20,
    experience: '4 years'
  },
  {
    name: 'MASTER',
    role: 'Freeman + Filter',
    image: '/assets/master.jpeg',
    intro: 'The undisputed MVP of the squad. Versatile, calculated, and always clutch. Whether he is leading the charge or holding the line, MASTER adapts, dominates, and delivers when it matters most.',
    device: 'iPhone 14 Pro Max',
    age: 19,
    experience: '3.5 years'
  },
  {
    name: 'VEDU',
    role: 'Assaulter',
    image: '/assets/vedu.png',
    intro: 'The fresh blood in our squad, bringing new energy and lethal precision. As our newest member, he is quickly proving to be a force to be reckoned with, ready to make his mark and elevate the team`s performance.',
    device: 'iPhone 16 Pro',
    age: 20,
    experience: '4 years'
  }
];

function Roster() {
  return (
    <div className="roster-page">
      <h2>The Faces Behind the Frags</h2>
      <div className="player-cards">
        {players.map((player, index) => (
          <div className="player-card" key={index}>
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="role">{player.role}</p>
            <p className="intro">{player.intro}</p>
            <ul className="player-details">
              <li><strong>Device:</strong> {player.device}</li>
              <li><strong>Age:</strong> {player.age}</li>
              <li><strong>Experience:</strong> {player.experience}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roster;
