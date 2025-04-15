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
    image: '/assets/varun.png',
    intro: 'Reliable support and a deadly assaulter.'
  },
  {
    name: 'MASTER',
    role: 'Freeman + Filter',
    image: '/assets/master.png',
    intro: 'Handles multiple roles with fluid playstyle.'
  },
  {
    name: 'VEDU',
    role: 'Assaulter',
    image: '/assets/vedu.png',
    intro: 'Precision and power in every fight.'
  },
  
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