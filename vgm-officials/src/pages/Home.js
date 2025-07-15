"use client"

import { useEffect, useRef } from "react"
import { Trophy, Target, Users, ChevronRight } from "lucide-react"
import "./Home.css"

function Home() {
  const achievementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".section-animate")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">VGM OFFICIALS</span>
            <span className="subtitle">Dominate The Battlefield</span>
          </h1>
          <p className="hero-description">
            A professional esports organization with over five years of experience, dedicated to conquering the
            competitive BGMI scene.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              Discover Our Team
              <ChevronRight size={16} />
            </a>
            <a href="#achievements" className="btn btn-outline">
              Our Achievements
            </a>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-animate">
        <div className="section-header">
          <h2>
            About <span className="text-gradient">Us</span>
          </h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are <strong>VGM OFFICIALS</strong>, a passionate and dedicated esports organization relentlessly
              focused on conquering the competitive BGMI scene. With over five years of deep-rooted experience in the
              world of esports, we've evolved not just as players but as a powerful community striving for excellence.
            </p>
            <p>
              Our mission is clear — to build a legacy of tactical brilliance, fearless gameplay, and unbreakable team
              synergy. At VGM OFFICIALS, we don't just play the game — we live it. We are willing to work as hard as it
              takes, pushing every boundary to bring glory to our name.
            </p>
            <p>
              Our roster is filled with some of the most talented and driven individuals, whether it's in esports,
              content creation, strategy, design, or editing. Together, we form a powerhouse of creativity, dedication,
              and unstoppable passion.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Trophy />
              </div>
              <div className="stat-info">
                <h3>10+</h3>
                <p>Tournaments</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Users />
              </div>
              <div className="stat-info">
                <h3>5</h3>
                <p>Pro Players</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Target />
              </div>
              <div className="stat-info">
                <h3>5</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section section-animate" ref={achievementRef}>
        <div className="section-header">
          <h2>
            Our <span className="text-gradient">Achievements</span>
          </h2>
          <div className="section-line"></div>
        </div>
        <div className="achievements-content">
          <div className="achievements-gallery">
            <div className="achievement-card">
              <div className="achievement-image">
              <img src="/assets/achievement3.jpg" alt="Achievement 3" />
                <div className="achievement-overlay">
                  <h3>Mathura LAN #1</h3>
                  <p>Venue: GLA University</p>
                </div>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                {/* <img src="./../../public//assets//achievement1.jpg" alt="Achievement" /> */}
                <img src="/assets/achievement1.jpg" alt="Achievement 1" />
                <div className="achievement-overlay">
                  <h3>Mathura LAN #1</h3>
                  <p>Venue: GLA University</p>
                </div>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
              <img src="/assets/achievement2.jpg" alt="Achievement 2" />
                <div className="achievement-overlay">
                  <h3>Noida LAN #1</h3>
                  <p>Venue: Shiv Nadar University</p>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements-list">
            <h3>Major Achievements</h3>
            <ul className="custom-list">
              <li>Greater Noida LAN #1 (Venue: Shiv Nadar University)</li>
              <li>Mathura LAN #1 (Venue: GLA University)</li>
              <li>Chandigarh LAN #2 (Venue: Chandigarh University)</li>
              <li>Jaipur LAN #3 (Venue: JECRC Jaipur)</li>
              <li>ESL 2024 R4</li>
              <li>Skyesports Championship 5.0 R4</li>
              <li>BGIS R2 (2024 and 2025)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="goals-section section-animate">
        <div className="section-header">
          <h2>
            Future <span className="text-gradient">Goals</span>
          </h2>
          <div className="section-line"></div>
        </div>
        <div className="goals-content">
          <div className="goal-card">
            <div className="goal-icon">🏆</div>
            <h3>National Championships</h3>
            <p>Qualify and dominate in national-level BGMI championships</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">📱</div>
            <h3>Content Creation</h3>
            <p>Expand our online presence through high-quality gaming content</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">🌐</div>
            <h3>Community Growth</h3>
            <p>Expand the VGM family into other esports titles and regions</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>
            Ready to <span className="text-gradient">Join Forces</span>?
          </h2>
          <p>Connect with us for collaborations, scrims, or to become part of our growing community</p>
          <a href="/contact" className="btn btn-primary">
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
