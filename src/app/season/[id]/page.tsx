// app/season/[id]/page.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

type Game = {
  id: number;
  date: string;
  opponent: string;
  result: string;
};

const gamesData: Game[] = [
  { id: 1, date: '2020-10-10', opponent: 'Team A', result: 'W' },
  { id: 2, date: '2020-10-15', opponent: 'Team B', result: 'L' },
  { id: 3, date: '2020-10-20', opponent: 'Team C', result: 'W' },
];

export default function SeasonPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Season {id}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Games</h2>
        <ul className="list-disc pl-8">
          {gamesData.map((game) => (
            <li key={game.id}>
              <Link href={`/season/${id}/game/${game.id}`}>
                {`${game.date}: ${game.opponent} (${game.result})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/" className="mt-4 text-blue-500">
        Go back to main screen
      </Link>
    </div>
  );
}
