// app/page.tsx
type Season = {
  id: number;
  name: string;
};

const seasons: Season[] = [
  { id: 1, name: 'Season 1' },
  { id: 2, name: 'Season 2' },
  { id: 3, name: 'Season 3' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Yabangan League Seasons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {seasons.map((season) => (
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
