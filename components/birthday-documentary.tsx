"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Modern icon components
const PlayIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const PauseIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
)

const SkipBackIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
  </svg>
)

const SkipForwardIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
  </svg>
)

const VolumeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
)

const VolumeOffIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
  </svg>
)

const FullscreenIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
  </svg>
)

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

// Enhanced photo data with better organization
const chapters = [
  {
    id: "childhood",
    title: "Childhood Wonder",
    subtitle: "The early years filled with curiosity and joy",
    color: "from-rose-500 to-pink-600",
    icon: "🌟",
    photos: [
      {
        src: "/images/birthday-child.png",
        title: "Little Star",
        description: "Our birthday hero as a sweet child, radiating pure joy and innocence",
        year: "Early Years",
        featured: true,
      },
      {
        src: "/images/childhood.jpg",
        title: "Bright Smile",
        description: "That infectious smile that could light up any room",
        year: "Childhood",
        featured: true,
      },
      {
        src: "/images/childhood-1.jpeg",
        title: "Friendship Begins",
        description: "Building lifelong friendships from the very start",
        year: "Growing Up",
        featured: true,
      },
      {
        src: "/images/childhood-2.jpg",
        title: "Playful Spirit",
        description: "Finding joy in simple pleasures and beloved toys",
        year: "Playtime",
        featured: true,
      },
      {
        src: "/images/childhood-5.jpg",
        title: "Curious Explorer",
        description: "Always discovering new things in the world around",
        year: "Discovery",
        featured: true,
      },
      {
        src: "/images/childhood-6.jpg",
        title: "Growing Confidence",
        description: "Standing tall with growing personality and charm",
        year: "Development",
        featured: true,
      },
      {
        src: "/images/childhood-3.jpg",
        title: "Learning Journey",
        description: "Building the foundation for future success in school",
        year: "Education",
        featured: true,
      },
      {
        src: "/images/2015-1.jpg",
        title: "Adventure Awaits",
        description: "Ready to take on the world with boundless energy",
        year: "2015",
        featured: true,
      },
    ]
  },
  {
    id: "scouting",
    title: "Character Building",
    subtitle: "Learning values, honor, and leadership through scouting",
    color: "from-emerald-500 to-teal-600",
    icon: "🏕️",
    photos: [
      {
        src: "/images/scouting-group.jpeg",
        title: "Brotherhood",
        description: "Building lasting friendships and learning teamwork",
        year: "Scout Life",
        featured: true,
      },
      {
        src: "/images/scouting-salute.jpg",
        title: "Honor & Respect",
        description: "Learning the values of duty, honor, and respect",
        year: "Character",
        featured: true,
      },
      {
        src: "/images/scouting-museum.jpeg",
        title: "Educational Adventures",
        description: "Exploring museums and expanding knowledge",
        year: "Learning",
        featured: true,
      },
      {
        src: "/images/scouting-exhibit.jpeg",
        title: "Scientific Mind",
        description: "Developing curiosity about science and discovery",
        year: "Exploration",
        featured: true,
      },
      {
        src: "/images/scouting-activity.jpeg",
        title: "Team Activities",
        description: "Working together and building leadership skills",
        year: "Teamwork",
        featured: false,
      },
      {
        src: "/images/scouting-science.jpeg",
        title: "Knowledge Seeker",
        description: "Always asking questions and seeking understanding",
        year: "Growth",
        featured: true,
      },
      {
        src: "/images/scout-boy.jpg",
        title: "Scout Pride",
        description: "Wearing the uniform with honor and dedication",
        year: "Service",
        featured: false,
      },
      {
        src: "/images/2014.jpg",
        title: "Character Development",
        description: "Growing into a person of integrity and strength",
        year: "2014",
        featured: false,
      },
    ]
  },
  {
    id: "family",
    title: "Family Love",
    subtitle: "The foundation of support, love, and cherished memories",
    color: "from-amber-500 to-orange-600",
    icon: "👨‍👩‍👧‍👦",
    photos: [
      {
        src: "/images/family-toy-ride.jpg",
        title: "Sibling Joy",
        description: "Sharing precious moments with beloved siblings",
        year: "Family Fun",
        featured: true,
      },
      {
        src: "/images/family-group.jpg",
        title: "Cultural Heritage",
        description: "Celebrating traditions and family roots together",
        year: "Heritage",
        featured: true,
      },
      {
        src: "/images/family-vacation.jpg",
        title: "Adventure Together",
        description: "Creating unforgettable memories in nature",
        year: "Vacation",
        featured: true,
      },
      {
        src: "/images/family-water-selfie.jpg",
        title: "Water Memories",
        description: "Family bonding by the beautiful water",
        year: "Nature",
        featured: true,
      },
      {
        src: "/images/family-swimming.jpg",
        title: "Natural Joy",
        description: "Finding happiness in simple family moments",
        year: "Swimming",
        featured: true,
      },
      {
        src: "/images/family-elder.jpg",
        title: "Generational Love",
        description: "Honoring elders and family wisdom",
        year: "Respect",
        featured: true,
      },
    ]
  },
  {
    id: "achievements",
    title: "Success & Growth",
    subtitle: "Hard work paying off with recognition and milestones",
    color: "from-violet-500 to-purple-600",
    icon: "🏆",
    photos: [
      {
        src: "/images/achievement.jpg",
        title: "First Success",
        description: "Early recognition of dedication and hard work",
        year: "Achievement",
        featured: true,
      },
      {
        src: "/images/achievement-1.jpg",
        title: "Academic Excellence",
        description: "Celebrating educational milestones and learning",
        year: "Education",
        featured: true,
      },
      {
        src: "/images/achievement-2.jpg",
        title: "Graduation Pride",
        description: "A major milestone reached through perseverance",
        year: "Graduation",
        featured: true,
      },
      {
        src: "/images/achievement-3.jpg",
        title: "Team Success",
        description: "Achieving goals together with classmates",
        year: "Collaboration",
        featured: true,
      },
      {
        src: "/images/achievement-4.jpg",
        title: "Vocational Success",
        description: "Mastering skills and celebrating accomplishments",
        year: "Skills",
        featured: true,
      },
      {
        src: "/images/achievement-5.jpg",
        title: "Family Pride",
        description: "Sharing success with those who matter most",
        year: "Celebration",
        featured: true,
      },
      {
        src: "/images/achievement-6.jpg",
        title: "Recognition",
        description: "Well-deserved honors for outstanding effort",
        year: "Honor",
        featured: true,
      },
      {
        src: "/images/2015-2.jpg",
        title: "Continued Growth",
        description: "Always moving forward and reaching new heights",
        year: "2015",
        featured: false,
      },
      {
        src: "/images/water-slide-fun.jpg",
        title: "Celebration Fun",
        description: "Enjoying the rewards of hard work with friends",
        year: "Fun",
        featured: false,
      },
    ]
  },
  {
    id: "faith",
    title: "Faith & Service",
    subtitle: "Growing spiritually and serving the community with dedication",
    color: "from-blue-500 to-indigo-600",
    icon: "⛪",
    photos: [
      {
        src: "/images/server-formal.jpeg",
        title: "Sacred Service",
        description: "Serving at the altar with reverence and dedication",
        year: "Ministry",
        featured: true,
      },
      {
        src: "/images/server-ceremony.jpg",
        title: "Community Faith",
        description: "Being part of something greater than oneself",
        year: "Community",
        featured: true,
      },
      {
        src: "/images/server-church.jpg",
        title: "Spiritual Growth",
        description: "Deepening faith and spiritual understanding",
        year: "Faith",
        featured: true,
      },
      {
        src: "/images/server-group-selfie.jpg",
        title: "Fellowship",
        description: "Finding joy and friendship in service to others",
        year: "Fellowship",
        featured: true,
      },
      {
        src: "/images/server-priest.jpeg",
        title: "Mentorship",
        description: "Learning from wise mentors and spiritual guides",
        year: "Guidance",
        featured: true,
      },
    ]
  },
  {
    id: "friendships",
    title: "Bonds & Adventures",
    subtitle: "Creating unforgettable memories with amazing friends",
    color: "from-cyan-500 to-blue-600",
    icon: "🤝",
    photos: [
      {
        src: "/images/friends-waterslide.jpg",
        title: "Pure Fun",
        description: "Making memories that will last a lifetime",
        year: "Adventure",
        featured: true,
      },
      {
        src: "/images/friends-formal.jpg",
        title: "Lifelong Bonds",
        description: "Friendships that have shaped the journey",
        year: "Friendship",
        featured: true,
      },
      {
        src: "/images/friends-nature.jpg",
        title: "Nature Explorers",
        description: "Discovering the world together with best friends",
        year: "Exploration",
        featured: true,
      },
      {
        src: "/images/friends-school.jpg",
        title: "Shared Success",
        description: "Celebrating achievements with those who matter",
        year: "Celebration",
        featured: true,
      },
    ]
  },
  {
    id: "special",
    title: "Special Moments",
    subtitle: "Life's beautiful celebrations and meaningful connections",
    color: "from-pink-500 to-rose-600",
    icon: "💖",
    photos: [
      {
        src: "/images/formal-couple.jpg",
        title: "Elegant Moments",
        description: "Dressed perfectly for life's special occasions",
        year: "Formal",
        featured: true,
      },
    ]
  },
  {
    id: "present",
    title: "21 & Thriving",
    subtitle: "Ready for all the amazing adventures that lie ahead",
    color: "from-indigo-500 to-purple-600",
    icon: "🎉",
    photos: [
      {
        src: "/images/recent-flowers.jpg",
        title: "Natural Beauty",
        description: "At 21, confident and radiant in nature's embrace",
        year: "Present",
        featured: true,
      },
      {
        src: "/images/recent-selfie.jpg",
        title: "Digital Native",
        description: "Embracing modern life with that genuine smile",
        year: "Modern",
        featured: true,
      },
      {
        src: "/images/recent-artistic.jpg",
        title: "Creative Expression",
        description: "Exploring artistic sides and personal style",
        year: "Creativity",
        featured: true,
      },
      {
        src: "/images/recent-rural.jpg",
        title: "Rooted & Grounded",
        description: "Staying connected to roots and simple beauty",
        year: "Heritage",
        featured: true,
      },
      {
        src: "/images/recent-minions.jpg",
        title: "Forever Young",
        description: "Never too old for fun and playful moments",
        year: "Playful",
        featured: true,
      },
      {
        src: "/images/recent-school.jpg",
        title: "Future Ready",
        description: "At 21, prepared for all the adventures ahead!",
        year: "Future",
        featured: true,
      },
    ]
  },
]

// Flatten all photos for slideshow
const allPhotos = chapters.flatMap(chapter => 
  chapter.photos.map(photo => ({
    ...photo,
    chapterTitle: chapter.title,
    chapterIcon: chapter.icon,
    chapterColor: chapter.color,
  }))
)

export default function BirthdayDocumentary() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [progress, setProgress] = useState(0)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  // Auto-hide controls in fullscreen
  const resetControlsTimeout = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    setShowControls(true)
    if (isFullscreen) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }, [isFullscreen])

  useEffect(() => {
    resetControlsTimeout()
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [resetControlsTimeout])

  // Handle mouse movement in fullscreen
  const handleMouseMove = useCallback(() => {
    if (isFullscreen) {
      resetControlsTimeout()
    }
  }, [isFullscreen, resetControlsTimeout])

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && !showIntro) {
      interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => {
          const next = (prev + 1) % allPhotos.length
          // Update chapter index based on current photo
          const currentPhoto = allPhotos[next]
          const chapterIndex = chapters.findIndex(chapter => 
            chapter.photos.some(photo => photo.src === currentPhoto.src)
          )
          if (chapterIndex !== -1) {
            setCurrentChapterIndex(chapterIndex)
          }
          return next
        })
        setProgress(0) // Reset progress for new photo
      }, 5000) // 5 seconds per photo
    }
    return () => clearInterval(interval)
  }, [isPlaying, showIntro])

  // Progress bar animation
  useEffect(() => {
    let progressInterval: NodeJS.Timeout
    if (isPlaying && !showIntro) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0
          return prev + 2 // Increment by 2% every 100ms (5 seconds total)
        })
      }, 100)
    }
    return () => clearInterval(progressInterval)
  }, [isPlaying, showIntro, currentPhotoIndex])

  // Audio setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.loop = true
    }
  }, [])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (showIntro) {
      setShowIntro(false)
      setProgress(0)
    }

    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play().catch(console.error)
      } else {
        audioRef.current.pause()
      }
    }
  }

  const handlePrevious = () => {
    const newIndex = (currentPhotoIndex - 1 + allPhotos.length) % allPhotos.length
    setCurrentPhotoIndex(newIndex)
    setProgress(0)
    if (showIntro) setShowIntro(false)
    
    // Update chapter
    const currentPhoto = allPhotos[newIndex]
    const chapterIndex = chapters.findIndex(chapter => 
      chapter.photos.some(photo => photo.src === currentPhoto.src)
    )
    if (chapterIndex !== -1) {
      setCurrentChapterIndex(chapterIndex)
    }
  }

  const handleNext = () => {
    const newIndex = (currentPhotoIndex + 1) % allPhotos.length
    setCurrentPhotoIndex(newIndex)
    setProgress(0)
    if (showIntro) setShowIntro(false)
    
    // Update chapter
    const currentPhoto = allPhotos[newIndex]
    const chapterIndex = chapters.findIndex(chapter => 
      chapter.photos.some(photo => photo.src === currentPhoto.src)
    )
    if (chapterIndex !== -1) {
      setCurrentChapterIndex(chapterIndex)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  const jumpToChapter = (chapterIndex: number) => {
    const chapter = chapters[chapterIndex]
    const firstPhotoIndex = allPhotos.findIndex(photo => 
      chapter.photos.some(chapterPhoto => chapterPhoto.src === photo.src)
    )
    if (firstPhotoIndex !== -1) {
      setCurrentPhotoIndex(firstPhotoIndex)
      setCurrentChapterIndex(chapterIndex)
      setProgress(0)
      if (showIntro) setShowIntro(false)
    }
  }

  const currentPhoto = allPhotos[currentPhotoIndex]
  const currentChapter = chapters[currentChapterIndex]

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative h-screen flex items-center justify-center text-center px-4 z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                21
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Years of Amazing Memories
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 font-medium">
                A Journey Through Time • From Childhood to Adulthood
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {chapters.slice(0, 8).map((chapter, index) => (
                <div key={chapter.id} className="text-center space-y-2">
                  <div className="text-3xl">{chapter.icon}</div>
                  <div className="text-sm text-purple-200 font-medium">{chapter.title}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                From the first smile to this milestone moment, every photo tells a story of growth, 
                love, friendship, and dreams coming true. This is your incredible journey to 21!
              </p>
              
              <Button
                onClick={handlePlay}
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
              >
                <PlayIcon />
                Begin the Journey
                <HeartIcon />
              </Button>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src="/audio/happy-birthday.mp3" preload="auto" />
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <audio ref={audioRef} src="/audio/happy-birthday.mp3" preload="auto" />

      {/* Chapter Header */}
      <div className={`absolute top-0 left-0 right-0 z-20 bg-gradient-to-r ${currentChapter.color} transition-all duration-1000`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{currentChapter.icon}</span>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {currentChapter.title}
                </h2>
                <p className="text-sm text-white/90">{currentChapter.subtitle}</p>
              </div>
            </div>
            <div className="text-white/90 text-sm font-medium">
              {currentPhotoIndex + 1} / {allPhotos.length}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-black/20">
          <div 
            className="h-full bg-white/80 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Photo Display */}
      <div className="h-screen flex items-center justify-center pt-20 pb-24">
        <Card className="w-full max-w-6xl mx-4 overflow-hidden shadow-2xl bg-black border-0">
          <div className="relative aspect-[16/10] bg-black">
            <img
              src={currentPhoto.src || "/placeholder.svg"}
              alt={currentPhoto.title}
              className="w-full h-full object-contain transition-all duration-700 ease-in-out"
              key={currentPhotoIndex}
            />
            
            {/* Photo Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-2 mb-2">
                  {currentPhoto.featured && (
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <HeartIcon />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                  <span className="text-white/70 text-sm">{currentPhoto.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentPhoto.title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {currentPhoto.description}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Controls */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
        showControls || !isFullscreen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Playback Controls */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <SkipBackIcon />
              </Button>

              <Button
                onClick={handlePlay}
                size="icon"
                className="h-14 w-14 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full"
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <SkipForwardIcon />
              </Button>
            </div>

            {/* Additional Controls */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMute}
                className="h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={toggleFullscreen}
                className="h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <FullscreenIcon />
              </Button>
            </div>
          </div>
        </div>

        {/* Chapter Navigation */}
        <div className="px-6 pb-4">
          <div className="flex space-x-2 overflow-x-auto max-w-6xl mx-auto">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => jumpToChapter(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === currentChapterIndex
                    ? `bg-gradient-to-r ${chapter.color} text-white shadow-lg`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{chapter.icon}</span>
                {chapter.title}
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="px-6 pb-4">
          <div className="flex space-x-2 overflow-x-auto max-w-6xl mx-auto">
            {allPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPhotoIndex(index)
                  setProgress(0)
                  // Update chapter
                  const chapterIndex = chapters.findIndex(chapter => 
                    chapter.photos.some(chapterPhoto => chapterPhoto.src === photo.src)
                  )
                  if (chapterIndex !== -1) {
                    setCurrentChapterIndex(chapterIndex)
                  }
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentPhotoIndex
                    ? 'border-white scale-110 shadow-lg'
                    : 'border-white/20 hover:border-white/50 hover:scale-105'
                }`}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}