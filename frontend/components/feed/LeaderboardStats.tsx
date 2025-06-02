const mockLeaders = [
  { id: 1, name: "Camila", points: 140 },
  { id: 2, name: "Lucas", points: 120 },
  { id: 3, name: "Sofia", points: 110 },
];

export const LeaderboardStats = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg mt-4 w-full">
    <h3 className="text-lg font-bold mb-2 text-purple-300">Leaderboard</h3>
    <ul className="space-y-1">
      {mockLeaders.map((user, idx) => (
        <li key={user.id} className="flex items-center gap-2 text-white/90">
          <span className="font-bold text-lg text-orange-400">#{idx + 1}</span>
          <span className="font-semibold">{user.name}</span>
          <span className="ml-auto text-xs text-gray-300">{user.points} pts</span>
        </li>
      ))}
    </ul>
  </div>
); 