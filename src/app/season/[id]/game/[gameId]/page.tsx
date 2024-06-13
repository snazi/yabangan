// app/season/[id]/game/[gameId]/page.tsx
import Link from 'next/link';

type Player = {
  id: number;
  name: string;
  points: number;
  assists: number;
  rebounds: number;
};

const playersData: Player[] = [
  { id: 1, name: 'Player 1', points: 20, assists: 5, rebounds: 10 },
  { id: 2, name: 'Player 2', points: 15, assists: 3, rebounds: 8 },
  { id: 3, name: 'Player 3', points: 10, assists: 2, rebounds: 6 },
];

type GamePageProps = {
  id: string;
  gameId: string;
};

export default function GamePage({ id, gameId }: GamePageProps) {
  // Find the game data based on the gameId
  // For now, just display static data
  const game = { id: gameId, date: '2020-10-10', opponent: 'Team A', result: 'W' };
  const players = playersData; // Assuming all players participated in this game

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Game {game.date}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Players Stats</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4 text-left">Player</th>
              <th className="border-b-2 p-4 text-left">Points</th>
              <th className="border-b-2 p-4 text-left">Assists</th>
              <th className="border-b-2 p-4 text-left">Rebounds</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td className="border-b p-4">{player.name}</td>
                <td className="border-b p-4">{player.points}</td>
                <td className="border-b p-4">{player.assists}</td>
                <td className="border-b p-4">{player.rebounds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href={`/season/${id}`} className="mt-4 text-blue-500">
        Go back to season
      </Link>
    </div>
  );
}
