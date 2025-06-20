"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import FeedHeader from "@/components/FeedHeader"
import { QuickStats } from "@/components/feed/QuickStats"
import { HackathonsFeed } from "@/components/feed/EventsFeed"
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
import { FadeInCard } from "@/components/ui/FadeInCard"
import { LeaderboardStats } from "@/components/feed/LeaderboardStats"
import { EducationSection } from "@/components/feed/EducationSection"
import { InternshipsSection } from "@/components/feed/InternshipsSection"
import { FeedTutorial } from "@/components/feed/FeedTutorial"
import { UpcomingEvents } from "@/components/feed/UpcomingEvents"

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

  // Updated events for FeedPage
  const events = [
    // Hackathons (images in /hackathons)
    {
      id: 'nerdcamp',
      title: 'NERD CAMP by Polkadot',
      description: 'A virtual camp for blockchain, web3, startups, and apps.',
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Unirse',
      image: '/hackathons/nerdcamppolkadot.png',
      status: 'Over' as const,
      timeLeft: '-',
      location: 'Virtual',
      tags: ['blockchain', 'web3', 'startups', 'apps'],
      organizer: 'polkadot',
      prizePool: '7,000',
      prizeCurrency: 'USD',
      link: 'https://dorahacks.io/hackathon/nerdconf-polkadot',
      disabled: true,
    },
    {
      id: 'agents-without-masters',
      title: 'Agents Without Masters Hackathon with NEAR AI',
      description: 'Hack AI like it means something. Participate in Berlin Blockchain Week!',
      type: 'hackathon' as const,
      date: 'June 15, 2025',
      actionText: 'Unirse',
      image: '/hackathons/agentswithuotmasters.webp',
      status: 'Upcoming' as const,
      timeLeft: '13 days',
      location: 'Berlin, Germany',
      tags: ['AI', 'Blockchain', 'Autonomous Agents', 'DeFi'],
      organizer: 'Hackbox',
      prizePool: '10,000',
      prizeCurrency: 'USD',
      link: '',
    },
    {
      id: 'the-apex-of-skills',
      title: 'The Apex of Skills: TRN Labs Hackathon',
      description: 'Compete for $10,000 USDT in $ROOT. Show your Web3 skills!',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Unirse',
      image: '/hackathons/theapexofskills.webp',
      status: 'Upcoming' as const,
      timeLeft: '2 days',
      location: 'Virtual',
      tags: ['Web3', 'Gaming', 'DeFi', 'NFT'],
      organizer: 'TRN Labs',
      prizePool: '10,000',
      prizeCurrency: 'USD',
      link: '',
    },
    {
      id: 'chainopera',
      title: 'ChainOpera Hackathon',
      description: 'A hackathon for music and blockchain innovation.',
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Unirse',
      image: '/hackathons/chainopera.webp',
      status: 'Ongoing' as const,
      timeLeft: '5 days',
      location: 'Virtual',
      tags: ['Music', 'Blockchain', 'Opera'],
      organizer: 'ChainOpera',
      prizePool: '5,000',
      prizeCurrency: 'USD',
      link: '',
    },
    {
      id: 'apechain-africa',
      title: 'ApeChain Africa',
      description: "Build on ApeChain and empower Africa's Web3 future.",
      type: 'hackathon' as const,
      date: 'Ongoing',
      actionText: 'Unirse',
      image: '/hackathons/apechainafrica.webp',
      status: 'Ongoing' as const,
      timeLeft: '3 hours',
      location: 'Africa',
      tags: ['Africa', 'Web3', 'ApeChain'],
      organizer: 'ApeChain',
      prizePool: '7,000',
      prizeCurrency: 'USD',
      link: '',
    },
    {
      id: 'hacktheleague',
      title: 'Hack the League',
      description: 'A global hackathon for league builders.',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Unirse',
      image: '/hackathons/hacktheleague.webp',
      status: 'Upcoming' as const,
      timeLeft: '7 days',
      location: 'Global',
      tags: ['League', 'Global', 'Builders'],
      organizer: 'HackLeague',
      prizePool: '8,000',
      prizeCurrency: 'USD',
      link: '',
    },
    {
      id: 'assethub',
      title: 'AssetHub Hackathon',
      description: 'Innovate with AssetHub and win big prizes.',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Unirse',
      image: '/hackathons/assethubhackathon.webp',
      status: 'Upcoming' as const,
      timeLeft: '10 days',
      location: 'Virtual',
      tags: ['AssetHub', 'Innovation', 'Prizes'],
      organizer: 'AssetHub',
      prizePool: '12,000',
      prizeCurrency: 'USD',
      link: '',
    },
    {
      id: 'zohouse',
      title: 'ZoHouse Hack',
      description: 'A hackathon for ZoHouse builders and creators.',
      type: 'hackathon' as const,
      date: 'Upcoming',
      actionText: 'Unirse',
      image: '/hackathons/zohousehack.webp',
      status: 'Upcoming' as const,
      timeLeft: '15 days',
      location: 'Virtual',
      tags: ['ZoHouse', 'Builders', 'Creators'],
      organizer: 'ZoHouse',
      prizePool: '9,000',
      prizeCurrency: 'USD',
      link: '',
    },
    // Meetups/Events (images in /events)
    {
      id: 'web3-ai-pitch',
      title: 'Web3 & AI Pitch Competition & VC networking',
      description: 'Pitch competition, networking y VC en TECHWEEK2025 NYC.',
      type: 'event' as const,
      date: 'Tomorrow',
      actionText: 'Unirse',
      image: '/events/web3auoitchcompetition.webp',
      status: 'Upcoming' as const,
      timeLeft: '1 day',
      location: 'New York, NY',
      tags: ['Web3', 'AI', 'Pitch', 'VC', 'Networking'],
      organizer: 'Ga^3in Ventures x Fibonacci Capital',
      prizePool: 'Pitch',
      prizeCurrency: '',
      link: 'https://lu.ma/jz5gdw3g?tk=uN74AU',
    },
    {
      id: 'triggers-minithon',
      title: 'Triggers, Not Apps: Sherry x Avalanche Minithon (Online)',
      description: 'Minithon online sobre Avalanche y Sherry.',
      type: 'event' as const,
      date: 'June 6, 2025',
      actionText: 'Unirse',
      image: '/events/triggersminithon.webp',
      status: 'Upcoming' as const,
      timeLeft: '3 days',
      location: 'Google Meet',
      tags: ['Avalanche', 'Sherry', 'Minithon', 'Online'],
      organizer: 'Juvenal',
      prizePool: 'Certificados',
      prizeCurrency: '',
      link: 'https://lu.ma/6rpyc0pz?tk=Wy4BJQ',
    },
    {
      id: 'the-oz-city',
      title: 'The Oz city – a pop-up city & bootcamp on Agents',
      description: 'Pop-up city y bootcamp sobre agentes y Web3.',
      type: 'event' as const,
      date: 'June 21, 2025',
      actionText: 'Unirse',
      image: '/events/theozcity.webp',
      status: 'Upcoming' as const,
      timeLeft: '2 weeks',
      location: 'Valbonne',
      tags: ['Bootcamp', 'Web3', 'Pop-up', 'Agents'],
      organizer: 'Epic Web3',
      prizePool: 'Invitaciones',
      prizeCurrency: '',
      link: 'https://lu.ma/ozcity?tk=SHXzqC',
    },
    {
      id: 'sozuhaus-mallorca',
      title: 'Sozu Haus Mallorca (Pre-EthCC)',
      description: 'Evento previo a EthCC en Mallorca.',
      type: 'event' as const,
      date: 'June 22, 2025',
      actionText: 'Unirse',
      image: '/events/sozuhausmallorca.webp',
      status: 'Upcoming' as const,
      timeLeft: '2 weeks',
      location: 'Mallorca',
      tags: ['Mallorca', 'EthCC', 'Web3'],
      organizer: 'Sozu Haus',
      prizePool: 'Networking',
      prizeCurrency: '',
      link: 'https://lu.ma/vyji07hq?tk=Hkc4bs',
    },
    {
      id: 'infratalks',
      title: 'Infra Talks: Conectando Tecnologías Descentralizadas',
      description: 'Un evento único donde los principales actores del ecosistema Web3 se unen para hablar de interoperabilidad, infraestructura descentralizada y el futuro de las tecnologías blockchain.',
      type: 'event' as const,
      date: 'May 26, 2025',
      actionText: 'Unirse',
      image: '/events/infratalks.webp',
      status: 'Ongoing' as const,
      timeLeft: '1 day',
      location: 'Virtual',
      tags: ['Web3', 'Infraestructura', 'Blockchain', 'Interoperabilidad'],
      organizer: 'ICP HUB Argentina & ICP HUBS Network',
      prizePool: 'Certificados',
      prizeCurrency: '',
      link: 'https://lu.ma/8x9p396m?tk=kVdZ6G',
    },
    {
      id: 'cryptocitiesmonth',
      title: 'Crypto Cities Month',
      description: 'Lanzamiento de proyectos cripto en el mundo real. ¡Construye tu summit, DAO, DeFi, off-ramp, ZK o blockchain project!',
      type: 'event' as const,
      date: 'Today',
      actionText: 'Unirse',
      image: '/events/cryptocitiesmonth.webp',
      status: 'Ongoing' as const,
      timeLeft: '1 month',
      location: 'Prospera',
      tags: ['Crypto', 'Cities', 'DAO', 'DeFi', 'ZK'],
      organizer: 'Infinita City',
      prizePool: 'Networking',
      prizeCurrency: '',
      link: 'https://lu.ma/infinita-crypto-cities?tk=TcmgLO',
    },
    {
      id: 'casatigre',
      title: 'Casa Tigre',
      description: 'Evento en Río San Antonio.',
      type: 'event' as const,
      date: 'Nov 24, 2025',
      actionText: 'Unirse',
      image: '/events/casatigre.webp',
      status: 'Upcoming' as const,
      timeLeft: '5 months',
      location: 'Río San Antonio',
      tags: ['Casa', 'Tigre', 'Evento'],
      organizer: 'Casa Tigre',
      prizePool: 'Networking',
      prizeCurrency: '',
      link: 'https://lu.ma/62qx28n9',
    },
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

  // Separate hackathons and meetups by type and image path
  const hackathons = events.filter(e => e.type === 'hackathon' && e.image.startsWith('/hackathons/')) as any;
  const upcomingEvents = events.filter(e => e.type === 'event' && e.image.startsWith('/events/'));

  return (
    <AuroraBackground className="w-full">
      <div className="min-h-screen w-full flex flex-col lg:flex-row relative px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <FeedTutorial />
        
        {/* Mobile: Right sidebar elements at top */}
        <div className="lg:hidden flex flex-col gap-4 pt-8 w-full max-w-[90%] mx-auto">
          <div className="user-profile-panel w-full">
            <UserProfilePanel />
          </div>
          <div className="assets-summary w-full">
            <AssetsSummary assets={assets} />
          </div>
        </div>

        {/* Main Content - 80% on desktop, 90% on mobile */}
        <div className="flex-1 flex flex-col gap-4 lg:pr-8 pt-8 w-full max-w-[90%] lg:max-w-none lg:w-4/5 mx-auto lg:mx-0">
          <div className="quick-stats w-full">
            <QuickStats points={140} rank={5} />
          </div>
          <div className="campus-wall w-full">
            <CampusWallPreview />
          </div>
          <div className="upcoming-events w-full">
            <UpcomingEvents events={upcomingEvents} />
          </div>
          <div className="hackathons-feed w-full">
            <HackathonsFeed hackathons={hackathons} />
          </div>
          <div className="leaderboard-stats w-full">
            <LeaderboardStats />
          </div>
        </div>

        {/* Desktop: Right Column - 20% width */}
        <div className="hidden lg:flex flex-col items-end justify-start pt-8 lg:pl-8 w-1/5 gap-4 flex-shrink-0">
          <div className="user-profile-panel w-full">
            <UserProfilePanel />
          </div>
          <div className="assets-summary w-full">
            <AssetsSummary assets={assets} />
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
} 