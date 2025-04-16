"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, Users, Headphones, Video } from "lucide-react"
import "./Discord.css"

function Discord() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const canvas = particlesRef.current
    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle settings
    const particlesArray = []
    const numberOfParticles = 100

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(255, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.random() * 0.5 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="discord-page">
      <canvas ref={particlesRef} className="particles-canvas"></canvas>

      <div className="discord-content">
        <div className="discord-header">
          <h1>
            Join Our <span className="text-gradient">Discord</span> Community
          </h1>
          <p>
            Connect with the VGM family, participate in exclusive events, and stay updated with the latest news and
            announcements!
          </p>
        </div>

        <div className="discord-features">
          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquare size={32} />
            </div>
            <h3>Chat & Connect</h3>
            <p>Engage with fellow gamers, share strategies, and make new friends in our active community channels</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Users size={32} />
            </div>
            <h3>Team Up</h3>
            <p>Find teammates for scrims, tournaments, and casual play sessions with players of all skill levels</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Headphones size={32} />
            </div>
            <h3>Voice Channels</h3>
            <p>Coordinate with crystal-clear voice communication during intense gaming sessions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Video size={32} />
            </div>
            <h3>Exclusive Content</h3>
            <p>Get access to exclusive tips, tricks, and behind-the-scenes content from our pro players</p>
          </div>
        </div>

        <div className="discord-join">
          <a href="https://discord.gg/UAa4V2HhaS" target="_blank" rel="noopener noreferrer" className="join-button">
            Join VGM Discord
            <span className="join-pulse"></span>
          </a>
          <div className="discord-members">
            <div className="member-avatars">
              <div className="member-avatar"></div>
              <div className="member-avatar"></div>
              <div className="member-avatar"></div>
              <div className="member-avatar"></div>
            </div>
            <p>
              Join <strong>15+</strong> members already in our community!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discord
