import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

export default function WallModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");

  const handlePost = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), user: "Tú", text: input.trim(), avatar: getRandomPFP() },
      ]);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Blurred/dark background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-all duration-300 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Modal content */}
          <motion.div
            className="relative z-[10000] w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-white/20"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/40 rounded-full p-2 hover:bg-black/60 transition z-20"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <h2 className="text-xl font-bold text-white mb-2 text-center">Muro del Campus</h2>
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
            <div className="flex items-center gap-2 mt-2">
              <input
                className="flex-1 rounded-lg px-3 py-2 bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-md border border-white/20"
                placeholder="Escribe tu mensaje..."
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
                Publicar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 