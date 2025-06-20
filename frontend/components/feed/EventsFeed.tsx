import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Trophy } from "lucide-react"
import Image from "next/image"

// DoraHacks logo (replace with your asset if needed)
const DORA_LOGO = "/logos/dorahackslogo.png";

interface Hackathon {
  id: string;
  title: string;
  description: string;
  type: 'hackathon';
  date: string;
  actionText: string;
  image: string;
  status: 'Upcoming' | 'Ongoing' | 'Over';
  timeLeft: string;
  location: string;
  tags: string[];
  organizer: string;
  prizePool: string;
  prizeCurrency: string;
  link: string;
  disabled?: boolean;
}

interface HackathonsFeedProps {
  hackathons: Hackathon[];
}

export const HackathonsFeed = ({ hackathons }: HackathonsFeedProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Image src={DORA_LOGO} alt="DoraHacks" width={32} height={32} className="rounded" />
        <h3 className="text-xl font-bold">Hackathons on DoraHacks</h3>
      </div>
      <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {hackathons.map((hackathon) => (
          <Card 
            key={hackathon.id}
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] bg-[#181818] border border-gray-800 flex-shrink-0 shadow-lg relative"
          >
            <div className="relative h-40 w-full rounded-t overflow-hidden">
              <Image
                src={hackathon.image}
                alt={hackathon.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t"
                sizes="340px"
                priority
              />
              <div className="absolute top-2 left-2 flex gap-2 z-10">
                <Badge className={`text-xs font-semibold ${hackathon.status === 'Upcoming' ? 'bg-yellow-700 text-yellow-300' : hackathon.status === 'Ongoing' ? 'bg-green-700 text-green-300' : 'bg-gray-700 text-gray-300'}`}>{hackathon.status}</Badge>
                <Badge className="text-xs bg-black/70 text-yellow-200 border-yellow-400 border font-semibold">
                  {hackathon.timeLeft} left
                </Badge>
              </div>
            </div>
            <CardContent className="p-4 flex flex-col h-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-400 font-medium">{hackathon.organizer}</span>
              </div>
              <div className="font-semibold text-base text-white mb-1 line-clamp-2">{hackathon.title}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                <MapPin className="w-3 h-3 mr-1" />
                {hackathon.location}
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {hackathon.tags.slice(0, 5).map((tag) => (
                  <Badge key={tag} className="bg-[#232323] text-orange-300 text-xs font-medium px-2 py-0.5 rounded">
                    {tag}
                  </Badge>
                ))}
                {hackathon.tags.length > 5 && (
                  <Badge className="bg-[#232323] text-orange-300 text-xs font-medium px-2 py-0.5 rounded">+{hackathon.tags.length - 5}</Badge>
                )}
              </div>
              <div className="text-xs text-gray-400 mb-2 line-clamp-2">{hackathon.description}</div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 text-yellow-400 font-bold text-base">
                  <Trophy className="w-4 h-4" />
                  <span>{hackathon.prizePool}</span>
                  <span className="text-xs text-gray-300 font-normal ml-1">{hackathon.prizeCurrency}</span>
                </div>
                <Button
                  size="sm"
                  className={
                    hackathon.disabled || hackathon.status === 'Over'
                      ? 'bg-gray-700 text-gray-400 px-3 py-1 text-xs font-semibold cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700 px-3 py-1 text-xs font-semibold'
                  }
                  onClick={() => {
                    if (!(hackathon.disabled || hackathon.status === 'Over')) {
                      window.open(hackathon.link, '_blank');
                    }
                  }}
                  disabled={hackathon.disabled || hackathon.status === 'Over'}
                >
                  {hackathon.status === 'Over' ? 'Finalizado' : hackathon.actionText}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {/* See more hacks card */}
        <a
          href="https://dorahacks.io"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] bg-gradient-to-br from-orange-500/20 to-blue-500/20 border-2 border-dashed border-orange-400 flex-shrink-0 shadow-lg rounded-2xl flex flex-col items-center justify-center p-8 hover:scale-105 transition cursor-pointer group"
        >
          <div className="flex flex-col items-center gap-3">
            <Image src={DORA_LOGO} alt="DoraHacks" width={64} height={64} className="rounded mb-2" />
            <span className="text-lg font-bold text-orange-300 group-hover:text-orange-400 transition">Ver más hackathons</span>
            <span className="text-xs text-gray-400 mt-1">Explora más eventos en DoraHacks.io</span>
          </div>
        </a>
      </div>
    </div>
  )
} 