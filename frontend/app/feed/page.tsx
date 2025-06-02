"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import { useToast } from "@/components/ui/use-toast"
import FeedHeader from "@/components/FeedHeader"
import { IdentitySection } from "@/components/feed/IdentitySection"
import { QuickStats } from "@/components/feed/QuickStats"
import { EventsFeed } from "@/components/feed/EventsFeed"
import { NextActions } from "@/components/feed/NextActions"
import { AssetsSummary } from "@/components/feed/AssetsSummary"
import { Plus, Award, Users, UserPlus } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Wallet } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FeedPage() {
  const [showProfilePanel, setShowProfilePanel] = useState(false)
  const { ready, authenticated, user } = usePrivy()
  const router = useRouter()
  const { toast } = useToast()

  // Events state for live data
  const [events, setEvents] = useState<any[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  // Redirect if not authenticated or if user disconnects wallet
  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/')
    }
  }, [ready, authenticated, router])

  // Show welcome toast on successful login
  useEffect(() => {
    if (ready && authenticated) {
      toast({
        title: "Welcome to Campus On Chain!",
        description: "Your wallet is ready. You've got 3 POAPs and 140 points.",
        duration: 5000,
      })
    }
  }, [ready, authenticated, toast])

  // Fetch live hackathons from API
  useEffect(() => {
    setLoadingEvents(true);
    fetch('/api/dorahacks')
      .then(res => res.json())
      .then(data => {
        if (data.hackathons && Array.isArray(data.hackathons)) {
          setEvents(data.hackathons);
        }
        setLoadingEvents(false);
      })
      .catch(() => {
        setLoadingEvents(false);
      });
  }, []);

  // Show loading state while checking authentication
  if (!ready || !authenticated) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  // Mock data - replace with real data from your backend
  const mockEvents = [
    {
      id: '1',
      title: 'Agents Without Masters Hackathon with NEAR AI',
      description: 'Hack AI like it means something. Participate in Berlin Blockchain Week!',
      type: 'hackathon' as const,
      date: 'June 15, 2025',
      actionText: 'Join Event',
      image: '/sample/hackathon1.jpg',
      status: 'Upcoming' as const,
      timeLeft: '13 days',
      location: 'Berlin, Germany',
      tags: ['AI', 'Blockchain', 'Autonomous Agents', 'DeFi'],
      organizer: 'Hackbox',
      prizePool: '10,000',
      prizeCurrency: 'USD',
    },
    {
      id: '2',
      title: 'Integrate Civic Auth into Your Application',
      description: 'Seamless user management and authentication for your dApp.',
      type: 'workshop' as const,
      date: 'Ongoing',
      actionText: 'Register Now',
      image: '/sample/hackathon2.jpg',
      status: 'Ongoing' as const,
      timeLeft: '12 days',
      location: 'Virtual',
      tags: ['authentication', 'identity', 'blockchain', 'ReactJS', 'NodeJS', 'NextJS'],
      organizer: 'Civic',
      prizePool: '2,300',
      prizeCurrency: 'USD',
    },
    {
      id: '3',
      title: 'The Apex of Skills: TRN Labs Hackathon',
      description: 'Compete for $10,000 USDT in $ROOT. Show your Web3 skills!',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Join Event',
      image: '/sample/hackathon3.jpg',
      status: 'Upcoming' as const,
      timeLeft: '2 days',
      location: 'Virtual',
      tags: ['Web3', 'Gaming', 'DeFi', 'NFT'],
      organizer: 'TRN Labs',
      prizePool: '10,000',
      prizeCurrency: 'USD',
    },
    {
      id: '4',
      title: 'NERD CAMP by Polkadot',
      description: 'A virtual camp for blockchain, web3, startups, and apps.',
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Join Event',
      image: '/sample/hackathon4.jpg',
      status: 'Ongoing' as const,
      timeLeft: '3 hours',
      location: 'Virtual',
      tags: ['blockchain', 'web3', 'startups', 'apps'],
      organizer: 'NERDCONF',
      prizePool: '7,000',
      prizeCurrency: 'USD',
    },
  ]

  const actions = [
    {
      id: '1',
      label: 'Join Event',
      icon: <Plus className="w-4 h-4" />,
      color: 'orange' as const,
      onClick: () => console.log('Join Event clicked')
    },
    {
      id: '2',
      label: 'Claim Badge',
      icon: <Award className="w-4 h-4" />,
      color: 'blue' as const,
      onClick: () => console.log('Claim Badge clicked')
    },
    {
      id: '3',
      label: 'Customize Profile',
      icon: <Users className="w-4 h-4" />,
      color: 'purple' as const,
      onClick: () => console.log('Customize Profile clicked')
    },
    {
      id: '4',
      label: 'Invite Friends',
      icon: <UserPlus className="w-4 h-4" />,
      color: 'green' as const,
      onClick: () => console.log('Invite Friends clicked')
    }
  ]

  const assets = [
    {
      id: '1',
      label: 'Campus Points',
      value: 140
    },
    {
      id: '2',
      label: 'POAPs',
      value: 3
    },
    {
      id: '3',
      label: 'Badges',
      value: 3
    }
  ]

  return (
    <AuroraBackground className="fixed inset-0 -z-10">
      <div className="min-h-screen text-white relative overflow-x-hidden">
        <FeedHeader 
          authenticated={authenticated} 
          ready={ready} 
          user={user} 
          onWalletClick={() => setShowProfilePanel(true)} 
        />

        <div className="container mx-auto px-4 py-6 mt-12" data-feed-content>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <IdentitySection
                name="Camila"
                university="Universidad de Chile"
                rank={42}
              />
              
              <QuickStats
                points={140}
                badgesEarned={3}
                hasNewBadge={true}
              />

              {loadingEvents ? (
                <div className="text-center py-12 text-gray-400">Loading hackathons...</div>
              ) : (
                <EventsFeed events={events} />
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <NextActions actions={actions} />
              <AssetsSummary assets={assets} />
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
                <div className="font-bold text-lg mb-1 text-white">Camila</div>
                <div className="text-xs text-gray-400 mb-2">Universidad de Chile</div>
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold text-white">140 Points</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <Badge className="bg-blue-700 text-white">3 POAPs</Badge>
                  <Badge className="bg-purple-700 text-white">3 Badges</Badge>
                </div>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full mt-2" onClick={() => setShowProfilePanel(false)}>
                  Close
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AuroraBackground>
  )
} 