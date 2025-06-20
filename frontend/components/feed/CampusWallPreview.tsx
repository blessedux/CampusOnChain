import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PFP_IMAGES = [
  "/PFPs/pixelcat.webp",
  "/PFPs/pixelfox.webp",
  "/PFPs/pixelowl.webp",
];

function getRandomPFP() {
  return PFP_IMAGES[Math.floor(Math.random() * PFP_IMAGES.length)];
}

const mockMessages = [
  { id: 1, user: "Camila", text: "¡Acabo de unirme al hackathon! 🚀" },
  { id: 2, user: "Lucas", text: "¿Alguien quiere armar un grupo de estudio?" },
  { id: 3, user: "Sofía", text: "¡Reclamé mi primer POAP!" },
  { id: 4, user: "Diego", text: "¡Miren mi nuevo proyecto en el muro!" },
  { id: 5, user: "Valentina", text: "¿Quién más está emocionado por el workshop?" },
].map(msg => ({ ...msg, avatar: getRandomPFP() }));

const pixelExplosion = {
  exit: {
    opacity: 0,
    filter: "url(#pixelate)",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export const CampusWallPreview = () => {
  const [messages, setMessages] = useState(mockMessages.slice(0, 3));
  const [queue, setQueue] = useState(mockMessages.slice(3));
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => {
        if (queue.length === 0) return prev;
        const next = queue[0];
        setQueue((q) => q.slice(1));
        return [...prev.slice(1), next];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [queue]);

  return (
    <div
      className="bg-[#18181a]/80 rounded-xl p-4 shadow-lg cursor-pointer mb-6"
      onClick={() => router.push("/feed/wall")}
    >
      <h3 className="text-lg font-bold mb-2 text-white">Muro del Campus</h3>
      <svg width="0" height="0">
        <filter id="pixelate">
          <feFlood x="4" y="4" height="8" width="8" />
          <feComposite in2="SourceGraphic" operator="in" />
          <feMorphology operator="dilate" radius="2" />
        </filter>
      </svg>
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={pixelExplosion.exit}
              layout
              className="bg-[#23232a]/80 rounded px-3 py-2 flex items-center gap-2 shadow"
            >
              <Avatar className="w-7 h-7 border-2 border-orange-500">
                <AvatarImage src={msg.avatar} />
                <AvatarFallback className="bg-gray-700 text-gray-300 text-xs">
                  {msg.user[0]}
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold text-orange-400">{msg.user}:</span>
              <span className="text-white">{msg.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="text-xs text-gray-400 mt-2">Toca para ver todo y publicar tu idea</div>
    </div>
  );
}; 