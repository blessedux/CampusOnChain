import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Meetup {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  tags: string[];
  organizer: string;
  attendees: string[];
  link: string;
}

interface MeetupsFeedProps {
  meetups: Meetup[];
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString('es-CL', { weekday: 'long' }),
    date: d.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' }),
    time: d.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }),
  };
};

export const MeetupsFeed = ({ meetups }: MeetupsFeedProps) => {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showAll, setShowAll] = useState(false);
  // For now, all are upcoming
  const visibleMeetups = showAll ? meetups : meetups.slice(0, 4);

  return (
    <div className="mb-8 relative">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold">Eventos & Meetups</h3>
        <div className="flex gap-2 bg-[#23232a] rounded-lg p-1">
          <button
            className={`px-3 py-1 rounded-md text-sm font-semibold transition ${tab === 'upcoming' ? 'bg-white/10 text-white' : 'text-gray-400'}`}
            onClick={() => setTab('upcoming')}
          >
            Próximos
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm font-semibold transition ${tab === 'past' ? 'bg-white/10 text-white' : 'text-gray-400'}`}
            onClick={() => setTab('past')}
          >
            Pasados
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full relative" style={{ minHeight: 340 }}>
        {visibleMeetups.map((event) => {
          const { day, date, time } = formatDate(event.date);
          return (
            <a
              key={event.id}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full rounded-2xl bg-[#18181a] border border-gray-800 shadow-lg hover:shadow-xl transition overflow-hidden hover:bg-[#23232a]"
            >
              {/* Timeline date */}
              <div className="flex flex-col items-center justify-center px-4 py-4 bg-[#23232a] min-w-[70px]">
                <span className="text-xs text-gray-400 font-semibold">{date}</span>
                <span className="text-xs text-gray-500">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
              </div>
              {/* Event info */}
              <div className="flex-1 flex flex-col justify-between px-4 py-3 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-400 font-medium truncate">{event.organizer}</span>
                </div>
                <div className="font-semibold text-base text-white mb-1 truncate">{event.title}</div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {event.location}
                  <span className="ml-2 text-blue-400">{time}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} className="bg-[#232323] text-blue-300 text-xs font-medium px-2 py-0.5 rounded">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="bg-white text-black font-semibold px-3 py-1 rounded-lg text-xs shadow hover:bg-blue-100 transition"
                    onClick={e => { e.preventDefault(); window.open(event.link, '_blank'); }}
                  >
                    Unirse
                  </button>
                  <div className="flex -space-x-2">
                    {event.attendees.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt="attendee"
                        className="w-6 h-6 rounded-full border-2 border-white bg-gray-700"
                        style={{ zIndex: 10 - i }}
                      />
                    ))}
                    <span className="ml-2 text-xs text-gray-400">+{Math.floor(Math.random() * 20) + 5}</span>
                  </div>
                </div>
              </div>
              {/* Thumbnail */}
              <div className="flex items-center justify-center min-w-[90px] bg-[#23232a]">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover"
                />
              </div>
            </a>
          );
        })}
        {/* Fade-out and Show More */}
        <AnimatePresence>
          {!showAll && meetups.length > 4 && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 w-full flex flex-col items-center z-20"
              style={{ pointerEvents: 'none' }}
            >
              <div className="w-full h-16 bg-gradient-to-t from-[#18181a] to-transparent transition-opacity" />
              <div className="flex justify-center mt-[-2.5rem] w-full" style={{ pointerEvents: 'auto' }}>
                <button
                  className="text-xs text-gray-400 hover:text-gray-200 font-normal bg-transparent px-2 py-1 rounded transition"
                  onClick={() => setShowAll(true)}
                >
                  Ver más eventos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}; 