'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { UpcomingEvents } from "@/components/feed/UpcomingEvents";
import { HackathonsFeed } from "@/components/feed/EventsFeed";
import { LeaderboardStats } from "@/components/feed/LeaderboardStats";
import { UserProfilePanel } from "@/components/feed/UserProfilePanel";

const mockMessages = [
  { id: 1, user: "Camila", text: "Just joined the hackathon! 🚀" },
  { id: 2, user: "Lucas", text: "Anyone up for a study group?" },
  { id: 3, user: "Sofia", text: "Claimed my first POAP!" },
  { id: 4, user: "Diego", text: "Check out my new project on the wall!" },
  { id: 5, user: "Valentina", text: "Who else is excited for the workshop?" },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Web3 & AI Pitch Competition & VC networking',
    date: 'Tomorrow',
    location: 'New York, NY',
    image: '/events/web3auoitchcompetition.webp',
    link: 'https://lu.ma/jz5gdw3g?tk=uN74AU',
  },
  {
    id: '2',
    title: 'Triggers, Not Apps: Sherry x Avalanche Minithon',
    date: 'June 6, 2025',
    location: 'Google Meet',
    image: '/events/triggersminithon.webp',
    link: 'https://lu.ma/6rpyc0pz?tk=Wy4BJQ',
  },
  {
    id: '3',
    title: 'The Oz city – a pop-up city & bootcamp on Agents',
    date: 'June 21, 2025',
    location: 'Valbonne',
    image: '/events/theozcity.webp',
    link: 'https://lu.ma/ozcity?tk=SHXzqC',
  },
];

const hackathons = [
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
    link: 'https://dorahacks.io/hackathon/agents-without-masters',
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
    link: '',
  },
];

export default function CampusWallPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const router = useRouter();

  const handlePost = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), user: "You", text: input.trim() },
      ]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-transparent relative px-2">
      {/* Back Arrow (mobile only) */}
      <button
        className="absolute top-4 left-4 bg-black/40 rounded-full p-2 hover:bg-black/60 transition lg:hidden"
        onClick={() => router.back()}
        aria-label="Back"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      {/* Left Column (Events, Hackathons, Leaderboard) */}
      <div className="flex-1 flex flex-col gap-4 max-w-lg mx-auto lg:mx-0 lg:pl-12 pt-8">
        <UpcomingEvents events={upcomingEvents} />
        <HackathonsFeed hackathons={hackathons} />
        <LeaderboardStats />
      </div>

      {/* Center Chat Module */}
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-2 text-center">Campus Wall</h2>
          <div className="flex-1 min-h-[200px] max-h-80 overflow-y-auto space-y-3 mb-2">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/20 rounded-lg px-4 py-2 flex items-center gap-2 shadow"
                >
                  <span className="font-semibold text-orange-400">{msg.user}:</span>
                  <span className="text-white">{msg.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              className="flex-1 rounded-lg px-3 py-2 bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-md border border-white/20"
              placeholder="Write your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handlePost(); }}
              maxLength={200}
            />
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg transition"
              onClick={handlePost}
              disabled={!input.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Right Column (User Profile, desktop only) */}
      <div className="hidden lg:flex flex-col items-end justify-start pt-8 pr-12 min-w-[300px]">
        <UserProfilePanel />
      </div>
    </div>
  );
} 