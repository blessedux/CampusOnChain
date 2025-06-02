import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Medal } from "lucide-react"

interface IdentitySectionProps {
  name: string;
  university: string;
  rank: number;
  avatarUrl?: string;
}

export const IdentitySection = ({ 
  name, 
  university, 
  rank, 
  avatarUrl = "/placeholder.svg?height=64&width=64" 
}: IdentitySectionProps) => {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-orange-500">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-gray-700 text-gray-300 text-xl">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">Welcome back, {name}!</h2>
            <p className="text-gray-400">{university}</p>
            <div className="flex items-center gap-2 mt-1">
              <Medal className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-500">Campus Rank #{rank}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 