"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Gamepad, Trophy, Clock } from "lucide-react"
import "./Roster.css"

const players = [
  {
    name: "INSANE",
    role: "IGL",
    image: "/assets/insanePic.jpeg",
    intro:
      "The fearless IGL with a mind like a chessboard and nerves of steel. Known for unpredictable rotations and next-level reads, he commands the battlefield with raw instinct and surgical precision. The brain behind the mayhem.",
    device: "iPhone 15 Pro",
    age: 20,
    experience: "5 years",
    achievements: ["Greater Noida Lan #1", "Mathura Lan #1", "ESL 2024 R4", "BGIS R2'24 and '25", "Chandigarh Lan #2"],
  },
  {
    name: "TNTGOD",
    role: "Entry Fragger",
    image: "/assets/tnt.jpeg",
    intro:
      "The walking detonation. First into the fray, last to back down. With reflexes sharp as razors and aim that hits like a freight train, he tears through enemy lines like a storm. When TNTGOD enters, defenses crumble.",
    device: "iPhone 16 pro",
    age: 18,
    experience: "5 years",
    achievements: ["Mathura LAN #1", "Skyesports Championship 5.0 R4", "BGIS R2'24 and '25","Chandigarh Lan #2","Esl R4'24"],
  },
  {
    name: "VARUN",
    role: "Support + Assaulter",
    image: "/assets/varun.jpeg",
    intro:
      "The silent storm. A perfect fusion of support and aggression, he covers the squad's six while pushing forward with precision. Calm under pressure, deadly in combat — VARUN turns the tide with every move.",
    device: "iPhone 13",
    age: 20,
    experience: "4 years",
    achievements: ["Delhi Lan #1", "Mathura LAN #1", "BGIS R2'25","Jaipur Lan #3"],
  },
  {
    name: "MASTER",
    role: "Freeman + Filter",
    image: "/assets/master.jpeg",
    intro:
      "The undisputed MVP of the squad. Versatile, calculated, and always clutch. Whether he is leading the charge or holding the line, MASTER adapts, dominates, and delivers when it matters most.",
    device: "iPhone 14 Pro Max",
    age: 19,
    experience: "3.5 years",
    achievements: ["Noida Lan #1", "Mathura LAN #1", "BGIS R2 (2025)","Jaipur Lan #3"],
  },
]

function Roster() {
  const [activePlayer, setActivePlayer] = useState(0)

  const nextPlayer = () => {
    setActivePlayer((prev) => (prev === players.length - 1 ? 0 : prev + 1))
  }

  const prevPlayer = () => {
    setActivePlayer((prev) => (prev === 0 ? players.length - 1 : prev - 1))
  }

  return (
    <div className="roster-page">
      <div className="roster-header">
        <h1>
          The <span className="text-gradient">Elite Squad</span>
        </h1>
        <p>Meet the faces behind the frags, the minds behind the victories</p>
      </div>

      <div className="player-showcase">
        <button className="nav-btn prev-btn" onClick={prevPlayer}>
          <ChevronLeft size={24} />
        </button>

        <div className="player-card-featured">
          <div className="player-image">
            <img src={players[activePlayer].image || "/placeholder.svg"} alt={players[activePlayer].name} />
            <div className="player-role">{players[activePlayer].role}</div>
          </div>

          <div className="player-info">
            <div className="player-name-container">
              <h2 className="player-name">{players[activePlayer].name}</h2>
              <div className="player-stats">
                <div className="stat">
                  <Gamepad size={16} />
                  <span>{players[activePlayer].device}</span>
                </div>
                <div className="stat">
                  <Clock size={16} />
                  <span>{players[activePlayer].experience}</span>
                </div>
              </div>
            </div>

            <div className="player-bio">
              <p>{players[activePlayer].intro}</p>
            </div>

            <div className="player-achievements">
              <h3>
                <Trophy size={16} />
                Key Achievements
              </h3>
              <ul>
                {players[activePlayer].achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={nextPlayer}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="player-thumbnails">
        {players.map((player, index) => (
          <div
            key={index}
            className={`player-thumb ${activePlayer === index ? "active" : ""}`}
            onClick={() => setActivePlayer(index)}
          >
            <img src="/assets/vgmLOGO.jpg" alt="Achievement 1" />
            <span>{player.name}</span>
          </div>
        ))}
      </div>

      <div className="team-stats">
        <h2>
          Team <span className="text-gradient">Statistics</span>
        </h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-value">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">50+</div>
            <div className="stat-label">Tournaments Together</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">2</div>
            <div className="stat-label">Lan champions</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">100k+</div>
            <div className="stat-label">Grand finalist(5x)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roster
