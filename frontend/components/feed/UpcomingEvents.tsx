import { Calendar } from "lucide-react";

const mockEvents = [
  { id: 1, title: "Luma: Web3 Onboarding Night", date: "June 10, 2025", location: "Santiago, Chile" },
  { id: 2, title: "Luma: Solidity Bootcamp", date: "June 15, 2025", location: "Online" },
];

export const UpcomingEvents = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg mb-4 w-full">
    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
      <Calendar className="w-5 h-5 text-orange-400" /> Upcoming Events
    </h3>
    <ul className="space-y-2">
      {mockEvents.map(ev => (
        <li key={ev.id} className="flex flex-col text-sm text-white/90">
          <span className="font-semibold text-orange-300">{ev.title}</span>
          <span className="text-xs text-gray-300">{ev.date} • {ev.location}</span>
        </li>
      ))}
    </ul>
  </div>
); 