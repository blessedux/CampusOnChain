const mockLeaders = [
  { id: 1, name: "Camila", points: 320, challenge: "NFT Hunt" },
  { id: 2, name: "Lucas", points: 280, challenge: "Referral Blitz" },
  { id: 3, name: "Sofia", points: 250, challenge: "Quiz Master" },
  { id: 4, name: "Diego", points: 200, challenge: "Workshop Winner" },
  { id: 5, name: "Valentina", points: 180, challenge: "Social Media Star" },
];

export const LeaderboardStats = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg mt-4 w-full">
    <h3 className="text-lg font-bold mb-2 text-purple-300">Leaderboard: Campus Challenges & Activations</h3>
    <p className="text-xs text-gray-400 mb-3">Top students in gamified challenges, marketing campaigns, and special activations.</p>
    <ul className="space-y-1">
      {mockLeaders.map((user, idx) => (
        <li key={user.id} className="flex items-center gap-2 text-white/90">
          <span className="font-bold text-lg text-orange-400">#{idx + 1}</span>
          <span className="font-semibold">{user.name}</span>
          <span className="ml-auto text-xs text-gray-300">{user.points} pts</span>
          <span className="ml-4 text-xs text-purple-300 italic">{user.challenge}</span>
        </li>
      ))}
    </ul>
  </div>
); 