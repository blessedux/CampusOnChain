import { Card, CardContent } from "@/components/ui/card"
import { Gift, Star, Medal } from "lucide-react"

interface QuickStatsProps {
  airdrops?: number;
  points: number;
  rank: number;
}

export const QuickStats = ({ 
  airdrops = 2, // mock value
  points, 
  rank 
}: QuickStatsProps) => {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Gift className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-white">Airdrops</p>
              <p className="text-xl font-bold text-white">{airdrops}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Star className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-white">Campus Points</p>
              <p className="text-xl font-bold text-white">{points}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Medal className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-white">Rank</p>
              <p className="text-xl font-bold text-white">#{rank}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 