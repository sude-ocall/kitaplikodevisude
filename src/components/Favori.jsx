export default function Favori({ favoriler, toggleFavori }) {
  if (favoriler.length === 0) return <p>Favori kitap yok.</p>;
  return (
    <div className="border p-3 rounded w-full md:w-1/3">
      <h2 className="font-bold mb-2">Favoriler</h2>
      <ul>
        {favoriler.map((f) => (
          <li key={f.id} className="flex justify-between">
            {f.baslik}
            <button
              onClick={() => toggleFavori(f)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
