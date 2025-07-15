"use client"

import { useState, useEffect } from "react"
import { Youtube, Play, Eye, ThumbsUp, Clock } from "lucide-react"
import "./YouTube.css"

const channels = [
  {
    name: "INSANE",
    url: "https://www.youtube.com/@VGMxINSANEigl",
    image: "assets/InsaneLOGO.jpeg",
    subscribers: "105+",
    videos: [
      {
        title: "BGMI Tournament Highlights - 20 Kills Victory",
        thumbnail: "/placeholder.svg?height=180&width=320",
        views: "15K",
        likes: "2.5K",
        duration: "12:45",
      },
      {
        title: "Pro Tips: How to Improve Your Aim in BGMI",
        thumbnail: "/placeholder.svg?height=180&width=320",
        views: "8.2K",
        likes: "1.3K",
        duration: "08:30",
      },
    ],
  },
  {
    name: "TNTGOD",
    url: "https://youtube.com/@tasukete69?si=tgCCBNh_wFy4_ArR",
    image: "/assets/tntlogo2.jpeg",
    subscribers: "0+",
    videos: [
      {
        title: "BGMI Solo vs Squad - 25 Kills Gameplay",
        thumbnail: "/placeholder.svg?height=180&width=320",
        views: "12K",
        likes: "1.8K",
        duration: "15:20",
      },
      {
        title: "Best Weapon Loadouts for Season 5",
        thumbnail: "/placeholder.svg?height=180&width=320",
        views: "7.5K",
        likes: "980",
        duration: "10:15",
      },
    ],
  },
  {
    name: "VARUN",
    url: "https://www.youtube.com/@VarunBGMi5",
    image: "assets/varunLOGO.jpeg",
    subscribers: "105",
    videos: [
      {
        title: "How I Became a Pro BGMI Player - My Journey",
        thumbnail: "/placeholder.svg?height=180&width=320",
        views: "20K",
        likes: "3.2K",
        duration: "18:45",
      },
      {
        title: "Top 10 Tips for Better Team Coordination",
        thumbnail: "/placeholder.svg?height=180&width=320",
        views: "11K",
        likes: "1.7K",
        duration: "14:30",
      },
    ],
  },
  {
    name: "MASTER",
    url: "https://www.youtube.com/@ngumaster17",
    image: "assets/masterLOGO.jpeg",
    subscribers: "410+",
    videos: [
      {
        title: "BGMI Tournament MVP Performance",
        thumbnail: "/",
        views: "25K",
        likes: "4.1K",
        duration: "22:10",
      },
      {
        title: "Advanced Movement Techniques Every Pro Uses",
        thumbnail: "/",
        views: "18K",
        likes: "2.9K",
        duration: "16:45",
      },
    ],
  },
]

function YouTube() {
  const [activeTab, setActiveTab] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="youtube-page">
      <div className="youtube-header">
        <h1>
          <Youtube size={32} className="youtube-icon" />
          Our <span className="text-gradient">YouTube</span> Channels
        </h1>
        <p>Watch gameplay, tutorials, and behind-the-scenes content from our pro players</p>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading channels...</p>
        </div>
      ) : (
        <>
          <div className="channel-tabs">
            {channels.map((channel, index) => (
              <button
                key={index}
                className={`channel-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <img src={channel.image || "/placeholder.svg"} alt={channel.name} />
                <span>{channel.name}</span>
              </button>
            ))}
          </div>

          <div className="channel-content">
            <div className="channel-info">
              <div className="channel-header">
                <img
                  src={channels[activeTab].image || "/placeholder.svg"}
                  alt={channels[activeTab].name}
                  className="channel-avatar"
                />
                <div className="channel-details">
                  <h2>{channels[activeTab].name}</h2>
                  <p>{channels[activeTab].subscribers} subscribers</p>
                  <a href={channels[activeTab].url} target="_blank" rel="noopener noreferrer" className="subscribe-btn">
                    Subscribe
                  </a>
                </div>
              </div>

              <div className="channel-description">
                <p>
                  Official YouTube channel of {channels[activeTab].name} from VGM OFFICIALS. Watch exclusive gameplay,
                  tutorials, and behind-the-scenes content!
                </p>
              </div>
            </div>

            <div className="video-grid">
              <h3>Latest Videos</h3>
              <div className="videos">
                {channels[activeTab].videos.map((video, index) => (
                  <div className="video-card" key={index}>
                    <div className="video-thumbnail">
                      <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
                      <div className="video-duration">
                        <Clock size={12} />
                        <span>{video.duration}</span>
                      </div>
                      <div className="play-button">
                        <Play size={24} />
                      </div>
                    </div>
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <div className="video-stats">
                        <div className="stat">
                          <Eye size={14} />
                          <span>{video.views} views</span>
                        </div>
                        <div className="stat">
                          <ThumbsUp size={14} />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="channel-cta">
              <a href={channels[activeTab].url} target="_blank" rel="noopener noreferrer" className="visit-channel-btn">
                Visit Full Channel
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default YouTube
