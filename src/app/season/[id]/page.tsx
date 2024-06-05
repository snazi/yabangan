// app/season/[id]/page.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

type Player = {
  id: number;
  name: string;
  points: number;
  assists: number;
  rebounds: number;
};

type Game = {
  id: number;
  date: string;
  opponent: string;
  result: string;
};

type SeasonData = {
  id: number;
  name: string;
  games: Game[];
  players: Player[];
};

const seasons: SeasonData[] = [
  {
    id: 1,
    name: '2020-2021',
    games: [
      { id: 1, date: '2020-10-10', opponent: 'Team A', result: 'W' },
      { id: 2, date: '2020-10-15', opponent: 'Team B', result: 'L' },
      { id: 3, date: '2020-10-20', opponent: 'Team C', result: 'W' },
    ],
    players: [
      { id: 1, name: 'Player 1', points: 500, assists: 200, rebounds: 300 },
      { id: 2, name: 'Player 2', points: 450, assists: 150, rebounds: 250 },
      { id: 3, name: 'Player 3', points: 400, assists: 180, rebounds: 280 },
    ],
  },
  {
    id: 2,
    name: '2021-2022',
    games: [
      { id: 1, date: '2021-10-10', opponent: 'Team X', result: 'W' },
      { id: 2, date: '2021-10-15', opponent: 'Team Y', result: 'L' },
      { id: 3, date: '2021-10-20', opponent: 'Team Z', result: 'W' },
    ],
    players: [
      { id: 1, name: 'Player 1', points: 600, assists: 250, rebounds: 350 },
      { id: 2, name: 'Player 2', points: 550, assists: 200, rebounds: 300 },
      { id: 3, name: 'Player 3', points: 500, assists: 230, rebounds: 330 },
    ],
  },
  {
    id: 3,
    name: '2022-2023',
    games: [
      { id: 1, date: '2022-10-10', opponent: 'Team P', result: 'W' },
      { id: 2, date: '2022-10-15', opponent: 'Team Q', result: 'L' },
      { id: 3, date: '2022-10-20', opponent: 'Team R', result: 'W' },
    ],
    players: [
      { id: 1, name: 'Player 1', points: 700, assists: 300, rebounds: 400 },
      { id: 2, name: 'Player 2', points: 650, assists: 270, rebounds: 370 },
      { id: 3, name: 'Player 3', points: 600, assists: 250, rebounds: 350 },
    ],
  },
];

export default function SeasonPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Find the season data based on the id
  const season = seasons.find((season) => season.id === parseInt(id));

  if (!season) {
    return <div>Season not found</div>;
  }

  const { name, games, players } = season;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Season {name}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Games</h2>
        <ul className="list-disc pl-8">
          {games.map((game) => (
            <li key={game.id}>{`${game.date}: ${game.opponent} (${game.result})`}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
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

      <Link href="/" className="mt-4 text-blue-500">
        Go back to main screen
      </Link>
    </div>
  );
}
