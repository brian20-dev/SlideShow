"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const photos = [
  {
    id: 1,
    src: "/images/2015-1.jpg",
    alt: "Two children in formal wear at celebration",
    title: "Formal Event 2015",
    year: "2015",
  },
  {
    id: 2,
    src: "/images/child-with-toys.png",
    alt: "Child with stuffed animals",
    title: "Playtime",
    year: "2025",
  },
  {
    id: 3,
    src: "/images/garfield-boy.jpg",
    alt: "Boy with Garfield plush toy",
    title: "Garfield Fun",
    year: "2014",
  },
  {
    id: 4,
    src: "/images/child-portrait.png",
    alt: "Child in white shirt portrait",
    title: "Portrait",
    year: "2025",
  },
  {
    id: 5,
    src: "/images/2014.jpg",
    alt: "Smiling child vintage photo",
    title: "Happy Moment 2014",
    year: "2014",
  },
  {
    id: 6,
    src: "/images/scout-boy.jpg",
    alt: "Boy in scout uniform saluting",
    title: "Scout Pride 2015",
    year: "2015",
  },
  {
    id: 7,
    src: "/images/2015-2.jpg",
    alt: "Woman and boy in classroom",
    title: "School Event 2015",
    year: "2015",
  },
  {
    id: 8,
    src: "/images/graduation-2016.jpg",
    alt: "Graduation ceremony with medals and proud mother",
    title: "Graduation Day 2016",
    year: "2016",
  },
  {
    id: 9,
    src: "/images/selfie-2019.jpg",
    alt: "Close-up selfie with heart filter",
    title: "Selfie Moment 2019",
    year: "2019",
  },
  {
    id: 10,
    src: "/images/family-river-2017.jpg",
    alt: "Family enjoying time at the river",
    title: "River Family Fun 2017",
    year: "2017",
  },
  {
    id: 11,
    src: "/images/church-visit-2016.jpg",
    alt: "Two boys in school uniforms at church",
    title: "Church Visit 2016",
    year: "2016",
  },
  {
    id: 12,
    src: "/images/school-outdoor-2019.jpg",
    alt: "Student in pink shirt with sunglasses at school",
    title: "School Day 2019",
    year: "2019",
  },
  {
    id: 13,
    src: "/images/garden-flowers-2019.jpg",
    alt: "Young person holding white flowers in garden",
    title: "Garden Flowers 2019",
    year: "2019",
  },
  {
    id: 14,
    src: "/images/minions-fun-2019.jpg",
    alt: "Posing with Minion characters at theme park",
    title: "Minions Adventure 2019",
    year: "2019",
  },
  {
    id: 15,
    src: "/images/student-group-2023.jpg",
    alt: "Group of college students taking selfie outdoors",
    title: "Student Group 2023",
    year: "2023",
  },
  {
    id: 16,
    src: "/images/waterfall-friends-2021.jpg",
    alt: "Five friends sitting by waterfall in forest",
    title: "Waterfall Adventure 2021",
    year: "2021",
  },
  {
    id: 17,
    src: "/images/award-ceremony-2019.jpg",
    alt: "Student receiving certificate at award ceremony",
    title: "Award Ceremony 2019",
    year: "2019",
  },
  {
    id: 18,
    src: "/images/graduation-formal-2023.jpg",
    alt: "Formal graduation portrait in blue cap and gown",
    title: "Graduation Portrait 2023",
    year: "2023",
  },
  {
    id: 19,
    src: "/images/formal-couple-2023.jpg",
    alt: "Couple in formal traditional and quinceañera attire",
    title: "Formal Event 2023",
    year: "2023",
  },
  {
    id: 20,
    src: "/images/animated-selfie-2021.jpg",
    alt: "Selfie with animated cartoon filter effect",
    title: "Fun Filter 2021",
    year: "2021",
  },
  {
    id: 21,
    src: "/images/church-group-2018.jpg",
    alt: "Large group photo inside church with religious ceremony",
    title: "Church Celebration 2018",
    year: "2018",
  },
  {
    id: 22,
    src: "/images/water-slide-fun.jpg",
    alt: "Group of children and teens having fun on large water slide",
    title: "Water Park Adventure 2020",
    year: "2020",
  },
  {
    id: 23,
    src: "/images/scout-achievement.jpg",
    alt: "Three young people celebrating achievements in school hallway",
    title: "Scout Achievement 2023",
    year: "2023",
  },
  {
    id: 24,
    src: "/images/friends-peace-signs.jpg",
    alt: "Group of friends making peace signs outdoors",
    title: "Friends Together 2020",
    year: "2020",
  },
  {
    id: 25,
    src: "/images/teacher-students-nature.jpg",
    alt: "Teacher with students in white uniforms outdoors",
    title: "Nature Class 2018",
    year: "2018",
  },
  {
    id: 26,
    src: "/images/vintage-brothers.jpg",
    alt: "Two young children sitting on wooden steps - vintage photo",
    title: "Early Childhood Memory",
    year: "2005",
  },
  {
    id: 27,
    src: "/images/rural-portrait-2020.jpg",
    alt: "Young person in tribal shirt standing in rice fields",
    title: "Rural Adventure 2020",
    year: "2020",
  },
  {
    id: 28,
    src: "/images/scout-trio.jpg",
    alt: "Three boys in full scout uniforms at community event",
    title: "Scout Brotherhood",
    year: "2018",
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)

  return (
    <div className="space-y-6">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="relative aspect-square" onClick={() => setSelectedPhoto(photo)}>
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                  <p className="text-sm font-medium">{photo.title}</p>
                  <p className="text-xs opacity-80">{photo.year}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Photo Details */}
      {selectedPhoto && (
        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{selectedPhoto.title}</h3>
                <p className="text-muted-foreground">{selectedPhoto.alt}</p>
                <p className="text-sm">
                  <strong>Year:</strong> {selectedPhoto.year}
                </p>
                <p className="text-sm">
                  <strong>File:</strong> {selectedPhoto.src}
                </p>
                <Button variant="outline" onClick={() => setSelectedPhoto(null)} className="mt-4">
                  Close Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Access List */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Access - File Paths</h3>
          <div className="space-y-2 text-sm font-mono">
            {photos.map((photo) => (
              <div key={photo.id} className="flex justify-between items-center p-2 bg-muted rounded">
                <span>{photo.title}</span>
                <code className="text-xs bg-background px-2 py-1 rounded">{photo.src}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
