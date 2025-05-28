'use client'

import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Placeholder data
const placeholderProfile = {
  handle: "web3_student",
  university: "Universidad de Chile",
  field: "Computer Science",
  bio: "Passionate about blockchain technology and its potential to transform education. Currently exploring DeFi and smart contracts.",
  interests: ["Web3", "DeFi", "Smart Contracts", "Education"],
  skills: ["Solidity", "React", "TypeScript", "Blockchain"],
  poaps: [
    { id: 1, name: "Web3 Workshop 2024", image: "/poap1.png" },
    { id: 2, name: "Blockchain Basics", image: "/poap2.png" },
  ]
}

export default function ProfilePage() {
  const { ready, authenticated, user } = usePrivy()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(placeholderProfile)

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/")
    }
  }, [ready, authenticated, router])

  if (!ready || !authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="relative h-48 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute -bottom-16 left-8">
          <div className="relative h-32 w-32 rounded-full border-4 border-background bg-background overflow-hidden">
            <Image
              src="/placeholder-pfp.png"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold">@{profile.handle}</h1>
                  <p className="text-muted-foreground">{profile.university}</p>
                  <p className="text-muted-foreground">{profile.field}</p>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Handle</label>
                    <Input value={profile.handle} onChange={(e) => setProfile({...profile, handle: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">University</label>
                    <Input value={profile.university} onChange={(e) => setProfile({...profile, university: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Field of Study</label>
                    <Input value={profile.field} onChange={(e) => setProfile({...profile, field: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">{interest}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* POAPs Gallery */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {profile.poaps.map((poap) => (
                  <div key={poap.id} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={poap.image}
                      alt={poap.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Stats</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Events Attended</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">POAPs Earned</p>
                  <p className="text-2xl font-bold">{profile.poaps.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Community Rank</p>
                  <p className="text-2xl font-bold">#42</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 