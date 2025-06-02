"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import FeedHeader from "@/components/FeedHeader"
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
import { CampusWallPreview } from "@/components/feed/CampusWallPreview"
import { UserProfilePanel } from "@/components/feed/UserProfilePanel"
import { MeetupsFeed } from "@/components/feed/MeetupsFeed"
import { StudentsPanel } from "@/components/feed/StudentsPanel"
import { Footer } from "@/components/feed/Footer"
import WallModal from "@/components/feed/WallModal"

export default function FeedPage() {
  const [showProfilePanel, setShowProfilePanel] = useState(false)
  const { ready, authenticated, user } = usePrivy()
  const router = useRouter()
  const [wallOpen, setWallOpen] = useState(false)

  // Redirect if not authenticated or if user disconnects wallet
  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/')
    }
  }, [ready, authenticated, router])

  // Hardcoded hackathon events
  const events = [
    {
      id: 'nerdcamp',
      title: 'NERD CAMP by Polkadot',
      description: 'A virtual camp for blockchain, web3, startups, and apps.',
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Join Event',
      image: '/hackathons/nerdcamppolkadot.png',
      status: 'Ongoing' as const,
      timeLeft: '1 hour',
      location: 'Virtual',
      tags: ['blockchain', 'web3', 'startups', 'apps'],
      organizer: 'polkadot',
      prizePool: '7,000',
      prizeCurrency: 'USD',
      link: 'https://dorahacks.io/org/nerdconf',
    },
    {
      id: '1',
      title: 'Agents Without Masters Hackathon with NEAR AI',
      description: 'Hack AI like it means something. Participate in Berlin Blockchain Week!',
      type: 'hackathon' as const,
      date: 'June 15, 2025',
      actionText: 'Join Event',
      image: '/hackathons/agentswithuotmasters.webp',
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
      title: 'The Apex of Skills: TRN Labs Hackathon',
      description: 'Compete for $10,000 USDT in $ROOT. Show your Web3 skills!',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Join Event',
      image: '/hackathons/theapexofskills.webp',
      status: 'Upcoming' as const,
      timeLeft: '2 days',
      location: 'Virtual',
      tags: ['Web3', 'Gaming', 'DeFi', 'NFT'],
      organizer: 'TRN Labs',
      prizePool: '10,000',
      prizeCurrency: 'USD',
    },
    {
      id: '3',
      title: 'ChainOpera Hackathon',
      description: 'A hackathon for music and blockchain innovation.',
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Join Event',
      image: '/hackathons/chainopera.webp',
      status: 'Ongoing' as const,
      timeLeft: '5 days',
      location: 'Virtual',
      tags: ['Music', 'Blockchain', 'Opera'],
      organizer: 'ChainOpera',
      prizePool: '5,000',
      prizeCurrency: 'USD',
    },
    {
      id: '4',
      title: 'ApeChain Africa',
      description: "Build on ApeChain and empower Africa's Web3 future.",
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Join Event',
      image: '/hackathons/apechainafrica.webp',
      status: 'Ongoing' as const,
      timeLeft: '3 hours',
      location: 'Africa',
      tags: ['Africa', 'Web3', 'ApeChain'],
      organizer: 'ApeChain',
      prizePool: '7,000',
      prizeCurrency: 'USD',
    },
    {
      id: '5',
      title: 'Hack the League',
      description: 'A global hackathon for league builders.',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Join Event',
      image: '/hackathons/hacktheleague.webp',
      status: 'Upcoming' as const,
      timeLeft: '7 days',
      location: 'Global',
      tags: ['League', 'Global', 'Builders'],
      organizer: 'HackLeague',
      prizePool: '8,000',
      prizeCurrency: 'USD',
    },
    {
      id: '6',
      title: 'AssetHub Hackathon',
      description: 'Innovate with AssetHub and win big prizes.',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Join Event',
      image: '/hackathons/assethubhackathon.webp',
      status: 'Upcoming' as const,
      timeLeft: '10 days',
      location: 'Virtual',
      tags: ['AssetHub', 'Innovation', 'Prizes'],
      organizer: 'AssetHub',
      prizePool: '12,000',
      prizeCurrency: 'USD',
    },
    {
      id: '7',
      title: 'ZoHouse Hack',
      description: 'A hackathon for ZoHouse builders and creators.',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Join Event',
      image: '/hackathons/zohousehack.webp',
      status: 'Upcoming' as const,
      timeLeft: '15 days',
      location: 'Virtual',
      tags: ['ZoHouse', 'Builders', 'Creators'],
      organizer: 'ZoHouse',
      prizePool: '9,000',
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
      <div className="min-h-screen text-white relative overflow-x-hidden w-full flex flex-col">
        {/* Main content: full width, but inner content centered and max width */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6">
            <FeedHeader 
              authenticated={authenticated} 
              ready={ready} 
              user={user} 
              onWalletClick={() => setShowProfilePanel(true)} 
            />
            <div className="mt-8">
              <QuickStats
                airdrops={2}
                points={140}
                rank={42}
              />
            </div>
            <div onClick={() => setWallOpen(true)}>
              <CampusWallPreview />
            </div>
            <EventsFeed events={events} />
            <MeetupsFeed />
            <StudentsPanel />
            <Footer />
          </div>
        </div>
        {/* Desktop only: Profile panel fixed to right edge */}
        <div className="hidden lg:block fixed top-0 right-0 pt-16 pr-8 z-30">
          <UserProfilePanel />
        </div>
        <WallModal open={wallOpen} onClose={() => setWallOpen(false)} />
      </div>
    </AuroraBackground>
  )
} 