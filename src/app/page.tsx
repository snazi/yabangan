// app/page.tsx
import { promises as fs } from 'fs';

type Season = {
  id: number;
  name: string;
};

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
  console.log("test")
  const seasons = JSON.parse(file);

  console.log("something"+ seasons)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Yabangan League Seasons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {seasons['seasons'].map((season) => (
          <a
            key={season.id}
            href={`/season/${season.id}`}
            className="flex items-center justify-center bg-white border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-lg font-medium text-gray-700">{season.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
