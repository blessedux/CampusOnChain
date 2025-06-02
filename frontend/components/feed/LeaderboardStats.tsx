import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";

// Generate 100 mock users with varied data
const generateMockUsers = () => {
  const names = [
    "Camila", "Lucas", "Sofia", "Diego", "Valentina", "Mateo", "Isabella", "Santiago",
    "Emma", "Daniel", "Mariana", "Alejandro", "Lucia", "Gabriel", "Ana", "Carlos",
    "Maria", "Juan", "Laura", "Andres", "Paula", "Felipe", "Catalina", "Sebastian"
  ];
  const challenges = [
    "NFT Hunt", "Referral Blitz", "Quiz Master", "Workshop Winner", "Social Media Star",
    "Hackathon Champion", "Community Builder", "Content Creator", "Bug Bounty Hunter",
    "Protocol Expert", "DeFi Master", "DAO Contributor", "Web3 Developer", "Blockchain Researcher"
  ];
  const bios = [
    "Passionate about Web3 and blockchain technology",
    "Building the future of decentralized applications",
    "Crypto enthusiast and developer",
    "Exploring the intersection of AI and blockchain",
    "DeFi researcher and protocol analyst",
    "Community builder in the Web3 space",
    "Smart contract developer and security expert",
    "Blockchain educator and content creator"
  ];
  const pfps = [
    "/PFPs/pixelcat.webp",
    "/PFPs/pixelfox.webp",
    "/PFPs/pixelowl.webp",
    "/PFPs/pixelbear.webp",
    "/PFPs/pixelwolf.webp",
    "/PFPs/pixelpanda.webp",
    "/PFPs/pixelraccoon.webp",
    "/PFPs/pixeldeer.webp"
  ];

  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    points: Math.floor(Math.random() * 500) + 100,
    challenge: challenges[Math.floor(Math.random() * challenges.length)],
    bio: bios[Math.floor(Math.random() * bios.length)],
    pfp: pfps[Math.floor(Math.random() * pfps.length)],
    social: {
      github: Math.random() > 0.3 ? `https://github.com/${names[Math.floor(Math.random() * names.length)].toLowerCase()}` : null,
      twitter: Math.random() > 0.3 ? `https://twitter.com/${names[Math.floor(Math.random() * names.length)].toLowerCase()}` : null,
      linkedin: Math.random() > 0.3 ? `https://linkedin.com/in/${names[Math.floor(Math.random() * names.length)].toLowerCase()}` : null,
      website: Math.random() > 0.5 ? `https://${names[Math.floor(Math.random() * names.length)].toLowerCase()}.web3` : null
    }
  })).sort((a, b) => b.points - a.points);
};

const mockLeaders = generateMockUsers();

interface HoverCardProps {
  user: typeof mockLeaders[0];
  position: { x: number; y: number };
}

const HoverCard = ({ user, position }: HoverCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="absolute z-50"
    style={{
      left: position.x,
      top: position.y,
    }}
  >
    <Card className="w-64 bg-white/10 backdrop-blur-xl border-white/20 p-4">
      <div className="flex flex-col items-center">
        <Avatar className="w-16 h-16 mb-2 border-2 border-orange-500">
          <AvatarImage src={user.pfp} />
          <AvatarFallback className="bg-gray-700 text-gray-300 text-xl">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>
        <h4 className="font-bold text-white mb-1">{user.name}</h4>
        <p className="text-xs text-gray-300 text-center mb-3">{user.bio}</p>
        <div className="flex gap-2">
          {user.social.github && (
            <a href={user.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github className="w-4 h-4" />
            </a>
          )}
          {user.social.twitter && (
            <a href={user.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {user.social.linkedin && (
            <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {user.social.website && (
            <a href={user.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  </motion.div>
);

export const LeaderboardStats = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [hoveredUser, setHoveredUser] = useState<typeof mockLeaders[0] | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  // Merge refs
  const setRefs = (node: any) => {
    ref.current = node;
    inViewRef(node);
  };

  const handleMouseEnter = (user: typeof mockLeaders[0], e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left + rect.width + 10,
      y: rect.top
    });
    setHoveredUser(user);
  };

  return (
    <motion.div
      ref={setRefs}
      initial={{ height: 220 }}
      animate={{ height: inView ? '80vh' : 220 }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg mt-4 w-full overflow-hidden flex flex-col"
      style={{ minHeight: 220, maxHeight: '80vh' }}
    >
      <h3 className="text-lg font-bold mb-2 text-purple-300">Leaderboard: Campus Challenges & Activations</h3>
      <p className="text-xs text-gray-400 mb-3">Top students in gamified challenges, marketing campaigns, and special activations.</p>
      <ul className="space-y-1 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {mockLeaders.map((user, idx) => (
          <li
            key={user.id}
            className="flex items-center gap-2 text-white/90 hover:bg-white/5 rounded-lg p-2 transition-colors cursor-pointer group"
            onMouseEnter={(e) => handleMouseEnter(user, e)}
            onMouseLeave={() => setHoveredUser(null)}
          >
            <span className="font-bold text-lg text-orange-400 min-w-[2rem]">#{idx + 1}</span>
            <Avatar className="w-8 h-8 border border-orange-500/50 group-hover:border-orange-500 transition-colors">
              <AvatarImage src={user.pfp} />
              <AvatarFallback className="bg-gray-700 text-gray-300 text-xs">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold">{user.name}</span>
            <span className="ml-auto text-xs text-gray-300">{user.points} pts</span>
            <span className="ml-4 text-xs text-purple-300 italic">{user.challenge}</span>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {hoveredUser && (
          <HoverCard user={hoveredUser} position={hoverPosition} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 