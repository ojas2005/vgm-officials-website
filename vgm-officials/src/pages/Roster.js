import './Roster.css';

const players = [
  {
    name: 'INSANE',
    role: 'IGL',
    image: 'https://via.placeholder.com/150',
    intro: 'Mastermind of strategies and in-game rotations.'
  },
  {
    name: 'TNTGOD',
    role: 'Entry Fragger',
    image: 'https://via.placeholder.com/150',
    intro: 'First to engage, always leading the charge.'
  },
  {
    name: 'VARUN',
    role: 'Support + Assaulter',
    image: 'https://via.placeholder.com/150',
    intro: 'Reliable support and a deadly assaulter.'
  },
  {
    name: 'MASTER',
    role: 'Freeman + Filter',
    image: 'https://via.placeholder.com/150',
    intro: 'Handles multiple roles with fluid playstyle.'
  },
  {
    name: 'VEDU',
    role: 'Assaulter',
    image: 'https://via.placeholder.com/150',
    intro: 'Precision and power in every fight.'
  },
  {
    name: 'DEMON',
    role: 'Sniper + Scout',
    image: 'https://via.placeholder.com/150',
    intro: 'Sharp eyes, sharp aim — our sniper.'
  }
];

function Roster() {
  return (
    <div className="roster-page">
      <h2>Meet the Squad</h2>
      <div className="player-cards">
        {players.map((player, index) => (
          <div className="player-card" key={index}>
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="role">{player.role}</p>
            <p className="intro">{player.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roster;