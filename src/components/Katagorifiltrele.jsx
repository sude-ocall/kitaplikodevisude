const kategoriler = ["Hepsi", "Roman", "Klasik"];

export default function Kategorifiltrele({ kategori, setKategori }) {
  return (
    <select
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
      className="p-2 border rounded"
    >
      {kategoriler.map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
}
