"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const PlayIcon = () => <span className="text-xl">▶️</span>
const PauseIcon = () => <span className="text-xl">⏸️</span>
const SkipBackIcon = () => <span className="text-xl">⏮️</span>
const SkipForwardIcon = () => <span className="text-xl">⏭️</span>
const VolumeIcon = () => <span className="text-xl">🔊</span>
const VolumeOffIcon = () => <span className="text-xl">🔇</span>
const CakeIcon = () => <span className="text-2xl">🎂</span>
const GiftIcon = () => <span className="text-2xl">🎁</span>
const PartyIcon = () => <span className="text-2xl">🎉</span>

const sections = [
  {
    title: "Early Days",
    subtitle: "Where it all began - a little star ready to take on the world",
    gradient: "from-purple-600 to-pink-600",
    startIndex: 0,
    endIndex: 8,
  },
  {
    title: "Scouting Adventures",
    subtitle: "Building character, honor, and lifelong friendships through service",
    gradient: "from-green-600 to-blue-600",
    startIndex: 9,
    endIndex: 16,
  },
  {
    title: "Family Bonds",
    subtitle: "The foundation of love, support, and cherished memories",
    gradient: "from-orange-600 to-red-600",
    startIndex: 17,
    endIndex: 22,
  },
  {
    title: "Achievements & Milestones",
    subtitle: "Hard work paying off - celebrating every success along the way",
    gradient: "from-yellow-600 to-orange-600",
    startIndex: 23,
    endIndex: 31,
  },
  {
    title: "Faith & Service",
    subtitle: "Serving with dedication and growing in spiritual strength",
    gradient: "from-indigo-600 to-purple-600",
    startIndex: 32,
    endIndex: 36,
  },
  {
    title: "Friendships & Adventures",
    subtitle: "Creating unforgettable memories with the people who matter most",
    gradient: "from-teal-600 to-cyan-600",
    startIndex: 37,
    endIndex: 44,
  },
  {
    title: "Special Moments",
    subtitle: "Life's beautiful celebrations and meaningful connections",
    gradient: "from-pink-600 to-rose-600",
    startIndex: 45,
    endIndex: 45,
  },
  {
    title: "Present Day - The Journey Continues",
    subtitle: "At 21, confident and ready for all the amazing adventures ahead",
    gradient: "from-violet-600 to-purple-600",
    startIndex: 46,
    endIndex: 51,
  },
]

const photos = [
  // CHILDHOOD YEARS - 8 photos (removed 1 duplicate)
  {
    src: "/images/birthday-child.png",
    title: "The Birthday Star ⭐",
    description: "Our amazing birthday person as a little one - that sweet smile that captured everyone's hearts",
    isBirthdayPerson: true,
  },
  {
    src: "/images/childhood.jpg",
    title: "Pure Joy ⭐",
    description: "That radiant smile that would light up every room - our little birthday star",
    isBirthdayPerson: true,
  },
  {
    src: "/images/childhood-1.jpeg",
    title: "Childhood Friends ⭐",
    description: "Growing up together - precious moments with his friend on the steps",
    isBirthdayPerson: true,
  },
  {
    src: "/images/childhood-2.jpg",
    title: "Playful Spirit ⭐",
    description: "Always finding joy in the simple things, like his beloved Garfield toy",
    isBirthdayPerson: true,
  },
  {
    src: "/images/childhood-5.jpg",
    title: "Curious Explorer ⭐",
    description: "That mischievous smile peeking through the fruits and vegetables - always exploring",
    isBirthdayPerson: true,
  },
  {
    src: "/images/childhood-6.jpg",
    title: "Growing Up ⭐",
    description: "Standing tall and confident - our birthday star developing his personality",
    isBirthdayPerson: true,
  },
  {
    src: "/images/childhood-3.jpg",
    title: "School Days ⭐",
    description: "Learning and growing in the classroom - building the foundation for future success",
    isBirthdayPerson: true,
  },
  {
    src: "/images/2015-1.jpg",
    title: "Early Adventures ⭐",
    description: "Exploring the world with curiosity and wonder - our birthday star's adventurous spirit",
    isBirthdayPerson: true,
  },
  {
    src: "/images/child-with-toys.png",
    title: "Toy Adventures",
    description: "Playing and exploring - childhood moments of pure imagination",
    isBirthdayPerson: false,
  },
  {
    src: "/images/garfield-boy.jpg",
    title: "Cartoon Friends",
    description: "Growing up with beloved cartoon characters and endless fun",
    isBirthdayPerson: false,
  },
  {
    src: "/images/child-portrait.png",
    title: "Portrait Moments",
    description: "Capturing precious childhood memories in formal portraits",
    isBirthdayPerson: false,
  },

  // SCOUTING ADVENTURES - 8 photos
  {
    src: "/images/scouting-group.jpeg",
    title: "Scout Brotherhood ⭐",
    description: "Building character and friendships - our birthday star learning values through scouting",
    isBirthdayPerson: true,
  },
  {
    src: "/images/scouting-salute.jpg",
    title: "Honor & Duty ⭐",
    description: "Standing proud in uniform - the birthday star showing respect and discipline",
    isBirthdayPerson: true,
  },
  {
    src: "/images/scouting-museum.jpeg",
    title: "Learning Adventures ⭐",
    description: "Educational field trips - our birthday star always eager to learn and explore",
    isBirthdayPerson: true,
  },
  {
    src: "/images/scouting-exhibit.jpeg",
    title: "Discovery ⭐",
    description: "Exploring science and knowledge - the birthday star's curious mind at work",
    isBirthdayPerson: true,
  },
  {
    src: "/images/scouting-activity.jpeg",
    title: "Group Activities",
    description: "Learning teamwork and cooperation with fellow scouts and leaders",
    isBirthdayPerson: false,
  },
  {
    src: "/images/scouting-science.jpeg",
    title: "Scientific Mind ⭐",
    description: "Always asking questions and seeking knowledge - our birthday star's intellectual growth",
    isBirthdayPerson: true,
  },
  {
    src: "/images/scout-boy.jpg",
    title: "Scout Spirit",
    description: "Embracing the values and adventures of scouting life",
    isBirthdayPerson: false,
  },
  {
    src: "/images/2014.jpg",
    title: "Growing Years",
    description: "Developing personality and character through the teenage years",
    isBirthdayPerson: false,
  },

  // FAMILY BONDS - 6 photos
  {
    src: "/images/family-toy-ride.jpg",
    title: "Brotherly Fun ⭐",
    description: "Sharing joy and laughter with his little brother - the birthday star as a caring sibling",
    isBirthdayPerson: true,
  },
  {
    src: "/images/family-group.jpg",
    title: "Family Heritage ⭐",
    description: "Celebrating culture and traditions with the whole family - our birthday star's roots",
    isBirthdayPerson: true,
  },
  {
    src: "/images/family-vacation.jpg",
    title: "Adventure Together ⭐",
    description: "Family adventures in nature - the birthday star creating memories with loved ones",
    isBirthdayPerson: true,
  },
  {
    src: "/images/family-water-selfie.jpg",
    title: "Water Adventures ⭐",
    description: "Making memories by the water with family - our birthday star's love for nature",
    isBirthdayPerson: true,
  },
  {
    src: "/images/family-swimming.jpg",
    title: "Natural Joy ⭐",
    description: "Finding happiness in simple pleasures - the birthday star enjoying family time in nature",
    isBirthdayPerson: true,
  },
  {
    src: "/images/family-elder.jpg",
    title: "Generational Love ⭐",
    description: "Sharing special moments with elders - our birthday star showing respect and care",
    isBirthdayPerson: true,
  },

  // ACHIEVEMENTS & MILESTONES - 9 photos
  {
    src: "/images/achievement.jpg",
    title: "First Recognition ⭐",
    description: "Early achievements - the birthday star's dedication beginning to pay off",
    isBirthdayPerson: true,
  },
  {
    src: "/images/achievement-1.jpg",
    title: "Academic Excellence ⭐",
    description: "Celebrating educational milestones - our birthday star's commitment to learning",
    isBirthdayPerson: true,
  },
  {
    src: "/images/achievement-2.jpg",
    title: "Graduation Pride ⭐",
    description: "A major milestone achieved - the birthday star's hard work culminating in success",
    isBirthdayPerson: true,
  },
  {
    src: "/images/achievement-3.jpg",
    title: "Team Success ⭐",
    description: "Achieving together with classmates - the birthday star's collaborative spirit",
    isBirthdayPerson: true,
  },
  {
    src: "/images/achievement-4.jpg",
    title: "Vocational Success ⭐",
    description: "Celebrating vocational high school graduation - years of dedication paying off",
    isBirthdayPerson: true,
  },
  {
    src: "/images/achievement-5.jpg",
    title: "Family Pride ⭐",
    description: "Sharing achievements with family - the birthday star's success bringing joy to loved ones",
    isBirthdayPerson: true,
  },
  {
    src: "/images/achievement-6.jpg",
    title: "Formal Recognition ⭐",
    description: "Receiving well-deserved honors - our birthday star's hard work being acknowledged",
    isBirthdayPerson: true,
  },
  {
    src: "/images/2015-2.jpg",
    title: "Adventure Continues",
    description: "More adventures and discoveries in the journey of growing up",
    isBirthdayPerson: false,
  },
  {
    src: "/images/water-slide-fun.jpg",
    title: "Water Fun",
    description: "Summer adventures and water park excitement with friends",
    isBirthdayPerson: false,
  },

  // FAITH & SERVICE - 5 photos
  {
    src: "/images/server-formal.jpeg",
    title: "Sacred Service ⭐",
    description: "Serving at the altar with dedication - our birthday star's spiritual commitment",
    isBirthdayPerson: true,
  },
  {
    src: "/images/server-ceremony.jpg",
    title: "Community Faith ⭐",
    description: "Part of something bigger - the birthday star serving his church community",
    isBirthdayPerson: true,
  },
  {
    src: "/images/server-church.jpg",
    title: "Faithful Dedication ⭐",
    description: "Standing strong in faith - our birthday star's spiritual journey",
    isBirthdayPerson: true,
  },
  {
    src: "/images/server-group-selfie.jpg",
    title: "Fellowship ⭐",
    description: "Joy in service - the birthday star finding happiness in helping others",
    isBirthdayPerson: true,
  },
  {
    src: "/images/server-priest.jpeg",
    title: "Spiritual Growth ⭐",
    description: "Learning from mentors - our birthday star's continued faith development",
    isBirthdayPerson: true,
  },

  // FRIENDSHIPS & ADVENTURES - 8 photos
  {
    src: "/images/friends-waterslide.jpg",
    title: "Pure Fun ⭐",
    description: "Making memories with friends - the birthday star's infectious joy bringing everyone together",
    isBirthdayPerson: true,
  },
  {
    src: "/images/friends-formal.jpg",
    title: "Childhood Bonds ⭐",
    description: "Formal moments with lifelong friends - relationships that shaped his journey",
    isBirthdayPerson: true,
  },
  {
    src: "/images/friends-nature.jpg",
    title: "Adventure Squad ⭐",
    description: "Exploring nature with his closest friends - our birthday star's love for outdoor adventures",
    isBirthdayPerson: true,
  },
  {
    src: "/images/friends-school.jpg",
    title: "Academic Celebrations ⭐",
    description: "Celebrating achievements with friends - the birthday star's success shared with those who matter",
    isBirthdayPerson: true,
  },

  // SPECIAL RELATIONSHIPS - 1 photo
  {
    src: "/images/formal-couple.jpg",
    title: "Special Moments ⭐",
    description: "Dressed to perfection for life's beautiful celebrations - our birthday star looking amazing",
    isBirthdayPerson: true,
  },

  // PRESENT DAY - THE JOURNEY CONTINUES - 6 photos
  {
    src: "/images/recent-flowers.jpg",
    title: "Natural Beauty ⭐",
    description: "Surrounded by nature's beauty - the birthday star at 21, confident and radiant",
    isBirthdayPerson: true,
  },
  {
    src: "/images/recent-selfie.jpg",
    title: "Digital Age ⭐",
    description: "Embracing modern life while keeping that genuine smile - our birthday star evolving",
    isBirthdayPerson: true,
  },
  {
    src: "/images/recent-artistic.jpg",
    title: "Creative Expression ⭐",
    description: "Exploring artistic sides - the birthday star's personality shining through",
    isBirthdayPerson: true,
  },
  {
    src: "/images/recent-rural.jpg",
    title: "Rural Adventures ⭐",
    description: "Connecting with his roots - our birthday star appreciating simple rural beauty",
    isBirthdayPerson: true,
  },
  {
    src: "/images/recent-minions.jpg",
    title: "Playful Spirit ⭐",
    description: "Never too old for fun - the birthday star's youthful heart at 21",
    isBirthdayPerson: true,
  },
  {
    src: "/images/recent-school.jpg",
    title: "Ready for Tomorrow ⭐",
    description: "Looking forward to all the amazing adventures yet to come - our birthday star at 21!",
    isBirthdayPerson: true,
  },
]

export default function BirthdayDocumentary() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4
      audioRef.current.loop = true
      audioRef.current.preload = "auto"

      // Handle audio loading errors
      audioRef.current.addEventListener("error", (e) => {
        console.log("[v0] Audio loading error:", e)
      })

      audioRef.current.addEventListener("canplaythrough", () => {
        console.log("[v0] Audio loaded successfully")
      })

      audioRef.current.addEventListener("loadeddata", () => {
        console.log("[v0] Audio data loaded")
      })
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
      }, 4000) // Change photo every 4 seconds
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    if (!showIntro) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showIntro])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (showIntro) setShowIntro(false)

    if (audioRef.current) {
      if (!isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("[v0] Audio playing successfully")
            })
            .catch((error) => {
              console.log("[v0] Audio play error:", error)
              // Auto-retry after user interaction
              setTimeout(() => {
                if (audioRef.current && !audioRef.current.paused) {
                  audioRef.current.play().catch(console.error)
                }
              }, 500)
            })
        }
      } else {
        audioRef.current.pause()
      }
    }
  }

  const handlePrevious = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
    if (showIntro) setShowIntro(false)
  }

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    if (showIntro) setShowIntro(false)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const currentPhoto = photos[currentPhotoIndex]

  const getCurrentSection = () => {
    return (
      sections.find((section) => currentPhotoIndex >= section.startIndex && currentPhotoIndex <= section.endIndex) ||
      sections[0]
    )
  }

  const currentSection = getCurrentSection()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 relative overflow-hidden">
      <audio
        ref={audioRef}
        src="/audio/happy-birthday.mp3"
        preload="auto"
        muted={isMuted}
        crossOrigin="anonymous"
        playsInline
      />

      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  ["bg-yellow-400", "bg-pink-400", "bg-blue-400", "bg-green-400", "bg-purple-400", "bg-red-400"][
                    Math.floor(Math.random() * 6)
                  ]
                }`}
              />
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <CakeIcon />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <GiftIcon />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <PartyIcon />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce">
          <CakeIcon />
        </div>
      </div>

      {showIntro && (
        <div className="relative h-screen flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 via-pink-500/20 to-purple-600/20" />
          <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <CakeIcon />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent text-balance">
                🎉 Turning 21! 🎉
              </h1>
              <GiftIcon />
            </div>
            <p className="text-xl md:text-2xl text-yellow-200 mb-8 text-pretty font-semibold">
              🍾 Welcome to Adulthood - 21 Years of Amazing Memories! 🍾
            </p>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto text-pretty">
              From childhood dreams to adult achievements - this is your incredible journey to 21! Here's to all the
              adventures, growth, and unforgettable moments that brought you here. The best is yet to come! 🌟
            </p>
            <Button
              onClick={handlePlay}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <PartyIcon /> 🍾 Let's Celebrate 21! 🍾
            </Button>
          </div>
        </div>
      )}

      {!showIntro && (
        <div className="min-h-screen flex flex-col">
          <div className={`bg-gradient-to-r ${currentSection.gradient} p-6 relative overflow-hidden`}>
            <div className="absolute top-4 right-6 flex gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-balance">{currentSection.title}</h2>
              <p className="text-lg md:text-xl text-white/90 text-pretty">{currentSection.subtitle}</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full">
              <Card className="overflow-hidden backdrop-blur-sm border-2 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 border-yellow-400/30">
                <div className="relative w-full h-[600px] bg-black">
                  <img
                    src={currentPhoto.src || "/placeholder.svg"}
                    alt={currentPhoto.title}
                    className="w-full h-full object-contain animate-scale-in"
                    key={currentPhotoIndex}
                  />
                  <div className="absolute top-0 left-0 right-0 h-2 bg-black/30">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 transition-all duration-300"
                      style={{ width: `${((currentPhotoIndex + 1) / photos.length) * 100}%` }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-bold text-white mb-2">{currentPhoto.title}</h3>
                      <p className="text-white/90 text-lg">{currentPhoto.description}</p>
                      <div className="flex items-center gap-4 mt-3">
                        {currentPhoto.isBirthdayPerson && (
                          <span className="text-yellow-400 text-sm">⭐ Birthday Star</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-sm border-t-2 border-yellow-400/30 p-6">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="h-12 w-12 bg-yellow-400/20 border-yellow-400/50 text-yellow-200 hover:bg-yellow-400/30"
                >
                  <SkipBackIcon />
                </Button>

                <Button
                  onClick={handlePlay}
                  size="icon"
                  className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="h-12 w-12 bg-yellow-400/20 border-yellow-400/50 text-yellow-200 hover:bg-yellow-400/30"
                >
                  <SkipForwardIcon />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-yellow-200 font-semibold bg-purple-800/50 px-3 py-1 rounded-full">
                  🎊 {currentPhotoIndex + 1} of {photos.length} 🎊
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMute}
                  className="h-12 w-12 bg-pink-500/20 border-pink-400/50 text-pink-200 hover:bg-pink-500/30"
                >
                  {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-4 overflow-x-auto border-t border-yellow-400/20">
            <div className="flex gap-2 min-w-max">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentPhotoIndex
                      ? "border-yellow-400 scale-110 shadow-lg shadow-yellow-400/50"
                      : "border-white/20 hover:border-pink-400/50 hover:scale-105"
                  }`}
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-full object-contain bg-black/20"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
