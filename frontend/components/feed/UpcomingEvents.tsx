import { Calendar } from "lucide-react";

interface Event {
  id: string | number;
  title: string;
  date: string;
  location: string;
  image?: string;
  link?: string;
}

export const UpcomingEvents = ({ events }: { events: Event[] }) => {
  // Sort by soonest date if possible, fallback to original order
  const sorted = [...events].sort((a, b) => {
    const da = new Date(a.date);
    const db = new Date(b.date);
    return isNaN(da.getTime()) || isNaN(db.getTime()) ? 0 : da.getTime() - db.getTime();
  });
  const topEvents = sorted.slice(0, 3);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg mb-4 w-full">
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-orange-400" /> Upcoming Events
      </h3>
      <ul className="space-y-3">
        {topEvents.length === 0 && (
          <li className="text-gray-300 text-sm">No upcoming events.</li>
        )}
        {topEvents.map(ev => (
          <li key={ev.id} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
            {ev.image && (
              <img src={ev.image} alt={ev.title} className="w-10 h-10 rounded object-cover border border-white/20" />
            )}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-orange-300 truncate">{ev.title}</div>
              <div className="text-xs text-gray-300 truncate">{ev.date} • {ev.location}</div>
            </div>
            {ev.link && (
              <a href={ev.link} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:underline whitespace-nowrap">Details</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
} 