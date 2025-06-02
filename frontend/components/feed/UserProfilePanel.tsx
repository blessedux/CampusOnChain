import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PFP_IMAGES = [
  "/PFPs/pixelcat.webp",
  "/PFPs/pixelfox.webp",
  "/PFPs/pixelowl.webp",
];

function getRandomPFP() {
  return PFP_IMAGES[Math.floor(Math.random() * PFP_IMAGES.length)];
}

const randomPFP = getRandomPFP();

export const UserProfilePanel = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg flex flex-col items-center w-64 border border-white/20">
    <Avatar className="w-16 h-16 mb-2 border-2 border-orange-500">
      <AvatarImage src={randomPFP} />
      <AvatarFallback className="bg-gray-700 text-gray-300 text-xl">CA</AvatarFallback>
    </Avatar>
    <div className="font-bold text-lg text-white mb-1">Camila</div>
    <div className="text-xs text-gray-400 mb-2">Universidad de Chile</div>
    <div className="flex items-center gap-2 mb-2">
      <span className="font-semibold text-orange-400">140 Points</span>
    </div>
    <div className="flex gap-2 mb-2">
      <span className="bg-blue-700 text-white rounded px-2 py-1 text-xs">3 POAPs</span>
      <span className="bg-purple-700 text-white rounded px-2 py-1 text-xs">3 Badges</span>
    </div>
  </div>
); 