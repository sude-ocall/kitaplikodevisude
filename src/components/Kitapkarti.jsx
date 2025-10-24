export default function Kitapkarti({ kitap, favoriler, toggleFavori }) {
  const favorideMi = favoriler.some((f) => f.id === kitap.id);

  return (
    <div className="kitap-karti">
      <h3 className="font-semibold text-lg">{kitap.baslik}</h3>
      <p className="text-sm text-gray-700">Yazar: {kitap.yazar}</p>
      <p className="text-xs text-gray-500 mb-2">Kategori: {kitap.kategori}</p>

      <button
        onClick={() => toggleFavori(kitap)}
        className={`favori-btn ${favorideMi ? "favori" : ""}`}
      >
        {favorideMi ? "Favoriden Çıkar" : "Favoriye Ekle"}
      </button>
    </div>
  );
}
