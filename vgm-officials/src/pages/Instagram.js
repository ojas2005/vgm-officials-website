"use client"

import { useState, useEffect } from "react"
import { InstagramIcon, Heart, MessageCircle, ExternalLink } from "lucide-react"
import "./Instagram.css"

function Instagram() {
  const [isLoading, setIsLoading] = useState(true)

  const handles = [
    {
      name: "VGM OFFICIALS",
      username: "@vgmofficials",
      url: "https://instagram.com/vgmofficials",
      image: "assets/vgmLOGO.jpg",
      followers: "100+",
      posts: [
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "450",
          comments: "32",
          caption: "Celebrating our victory at the Greater Noida LAN tournament! #VGMDomination",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "380",
          comments: "28",
          caption: "Team practice session in progress. Preparing for the upcoming championship! 🔥",
        },
      ],
    },
    {
      name: "INSANE",
      username: "@VGMxINSANE",
      url: "https://instagram.com/VGMxINSANE",
      image: "/assets/InsaneLOGO.jpeg",
      followers: "110+",
      posts: [
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "320",
          comments: "25",
          caption: "Leading the team to victory! IGL life 🎮 #VGMxINSANE",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "290",
          comments: "18",
          caption: "New setup, new possibilities. Ready to dominate! 💪",
        },
      ],
    },
    {
      name: "TNTGOD",
      username: "@tntgod",
      url: "https://instagram.com/tntgod",
      image: "/placeholder.svg?height=300&width=300",
      followers: "100+",
      posts: [
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "275",
          comments: "22",
          caption: "When the entry fragger gets the MVP 😎 #TNTGOD",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "240",
          comments: "19",
          caption: "Behind every successful squad wipe is hours of practice. Grinding never stops!",
        },
      ],
    },
    {
      name: "VARUN",
      username: "@varunbgmi8",
      url: "https://www.instagram.com/varunbgmi8",
      image: "assets/varunLOGO.jpeg",
      followers: "50+",
      posts: [
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "310",
          comments: "27",
          caption: "Support + Assault = Perfect combo! #VGMVarun",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "285",
          comments: "23",
          caption: "New sensitivity settings paying off! Check out my latest video for tips.",
        },
      ],
    },
    {
      name: "MASTER",
      username: "@ig.ngu_master",
      url: "https://www.instagram.com/ig.ngu_master",
      image: "assets/masterLOGO.jpeg",
      followers: "120+",
      posts: [
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "420",
          comments: "35",
          caption: "MVP performance at Jaipur LAN! Thanks for all the support ❤️ #VGMMaster",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "380",
          comments: "29",
          caption: "Freeman + Filter role is all about adaptability. Always ready for any situation!",
        },
      ],
    },
    {
      name: "VEDU",
      username: "@itz.vedanttt.10",
      url: "https://www.instagram.com/itz.vedanttt.10",
      image: "assets/vedulogo1.jpeg",
      followers: "1K+",
      posts: [
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "230",
          comments: "18",
          caption: "Newest member of VGM OFFICIALS! Ready to make my mark 🎯 #VGMVedu",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          likes: "210",
          comments: "15",
          caption: "First tournament with the team was an amazing experience! More to come!",
        },
      ],
    },
  ]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="instagram-page">
      <div className="instagram-header">
        <h1>
          <InstagramIcon size={32} className="instagram-icon" />
          Our <span className="text-gradient">Instagram</span> Profiles
        </h1>
        <p>Follow our players for behind-the-scenes content, updates, and more!</p>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading profiles...</p>
        </div>
      ) : (
        <div className="instagram-grid">
          {handles.map((profile, index) => (
            <div className="instagram-profile" key={index}>
              <div className="profile-header">
                <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="profile-avatar" />
                <div className="profile-info">
                  <h3>{profile.name}</h3>
                  <p className="username">{profile.username}</p>
                  <p className="followers">{profile.followers} followers</p>
                </div>
              </div>

              <div className="profile-posts">
                {profile.posts.map((post, postIndex) => (
                  <div className="post" key={postIndex}>
                    <div className="post-image">
                      <img src={post.image || "/placeholder.svg"} alt="Post" />
                    </div>
                    <div className="post-info">
                      <div className="post-stats">
                        <div className="stat">
                          <Heart size={16} />
                          <span>{post.likes}</span>
                        </div>
                        <div className="stat">
                          <MessageCircle size={16} />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <p className="post-caption">{post.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="view-profile-btn">
                <span>View Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Instagram
