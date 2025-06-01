"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Trophy, Heart, MessageCircle, Share2, Award, Bell, Plus, Wallet, BookOpen, Users, Rocket } from "lucide-react"
import FeedHeader from "@/components/FeedHeader"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"

export default function FeedPage() {
  const [showProfilePanel, setShowProfilePanel] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const { ready, authenticated, user } = usePrivy()
  const router = useRouter()

  // Redirect if not authenticated
  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/')
    }
  }, [ready, authenticated, router])

  // Show loading state while checking authentication
  if (!ready || !authenticated) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <FeedHeader 
        authenticated={authenticated} 
        ready={ready} 
        user={user} 
        onWalletClick={() => setShowProfilePanel(true)} 
      />

      <div className="container mx-auto px-4 py-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Post Creation */}
            <Card className="bg-[#1a1a1a] border-gray-800 mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-gray-700 text-gray-300">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <input
                      placeholder="Share your Campus On Chain experience..."
                      className="bg-transparent border-none text-gray-300 placeholder-gray-500 focus:ring-0 text-lg w-full"
                    />
                  </div>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event Announcement */}
            <Card className="bg-[#1a1a1a] border-gray-800 mb-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-400">Campus On Chain Hackathon starts in 2 days! Form your teams and get ready to build.</span>
                </div>
              </CardContent>
            </Card>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mb-6">
              <Button variant="ghost" size="sm" className="bg-gray-800 text-white hover:bg-gray-700">
                All
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                Announcements
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                Hackathons
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                Wallet
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                POAPs & NFTs
              </Button>
            </div>

            <div className="space-y-4">
              {/* Pinned Post */}
              <Card className="bg-[#1a1a1a] border-orange-500/30 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-gray-700 text-gray-300">EM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">Campus On Chain Team</span>
                        <span className="text-xs text-gray-400">Pinned • Announcements</span>
                        <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 ml-auto">
                          📌 Pinned
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">🚀 Welcome to Campus On Chain!</h3>
                      <p className="text-gray-300 mb-4">
                        Join our hackathons, earn POAPs and NFTs, and manage your on-chain wallet. Share your progress, team up, and build the future of education on blockchain!
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-green-600/20 text-green-400 border-green-500/30">Hackathon</Badge>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">Wallet</Badge>
                        <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">NFT</Badge>
                      </div>
                      <div className="flex items-center gap-6 text-gray-400">
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-gray-400 hover:text-white">
                          <Heart className="w-4 h-4 mr-1" />
                          <span className="text-sm">173</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-gray-400 hover:text-white">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span className="text-sm">222</span>
                        </Button>
                        <span className="text-sm text-blue-400 ml-auto">New comment 1d ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* ...other posts as in your reference, but update content to be about Campus On Chain activities, wallet, hackathons, POAPs, NFTs, etc... */}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Wallet/POAP/NFT/Profile Panel */}
            <Card className="bg-[#1a1a1a] border-gray-800 h-64">
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="w-20 h-20 mb-2 border-2 border-orange-500">
                  <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                  <AvatarFallback className="bg-gray-700 text-gray-300 text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="font-bold text-lg mb-1 text-white">Jane Doe</div>
                <div className="text-xs text-gray-400 mb-2">{user?.wallet?.address}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold text-white">$123.45</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <Badge className="bg-blue-700 text-white">3 POAPs</Badge>
                  <Badge className="bg-purple-700 text-white">2 NFTs</Badge>
                </div>
              </CardContent>
            </Card>
            {/* ...other sidebar cards as needed */}
          </div>
        </div>
      </div>

      {/* Profile Panel Popup */}
      {showProfilePanel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Card className="bg-[#1a1a1a] border-gray-800 w-80">
            <CardContent className="p-6 flex flex-col items-center">
              <Avatar className="w-20 h-20 mb-2 border-2 border-orange-500">
                <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                <AvatarFallback className="bg-gray-700 text-gray-300 text-2xl">JD</AvatarFallback>
              </Avatar>
              <div className="font-bold text-lg mb-1 text-white">Jane Doe</div>
              <div className="text-xs text-gray-400 mb-2">{user?.wallet?.address}</div>
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-4 h-4 text-orange-400" />
                <span className="font-semibold text-white">$123.45</span>
              </div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-blue-700 text-white">3 POAPs</Badge>
                <Badge className="bg-purple-700 text-white">2 NFTs</Badge>
              </div>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full mt-2" onClick={() => setShowProfilePanel(false)}>
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 