import { useState, useEffect } from "react";
import AramaCubugu from "./components/AramaCubugu";
import Katagorifiltrele from "./components/Katagorifiltrele"; // ✅ DÜZELTİLDİ
import Kitapliste from "./components/Kitapliste";
import Favori from "./components/Favori";
import kitaplarData from "./data/kitaplar";

export default function App() {
  const [aramaMetni, setAramaMetni] = useState("");
  const [kategori, setKategori] = useState("Hepsi");
  const [favoriler, setFavoriler] = useState([]);

  // LocalStorage'dan yükleme
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favoriler") || "[]");
    const arama = localStorage.getItem("aramaMetni") || "";
    setFavoriler(fav);
    setAramaMetni(arama);
  }, []);

  // LocalStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
    localStorage.setItem("aramaMetni", aramaMetni);
  }, [favoriler, aramaMetni]);

  const toggleFavori = (kitap) => {
    setFavoriler((eski) =>
      eski.some((f) => f.id === kitap.id)
        ? eski.filter((f) => f.id !== kitap.id)
        : [...eski, kitap]
    );
  };

  const filtrelenmis = kitaplarData.filter((k) => {
    const katOK = kategori === "Hepsi" || k.kategori === kategori;
    const araOK = k.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    return katOK && araOK;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        📚 Okul Kulübü Kütüphanesi
      </h1>

      <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Katagorifiltrele kategori={kategori} setKategori={setKategori} /> {/* ✅ DÜZELTİLDİ */}
        <Kitapliste
          kitaplar={filtrelenmis}
          toggleFavori={toggleFavori}
          favoriler={favoriler}
        />
        <Favori favoriler={favoriler} toggleFavori={toggleFavori} />
      </div>
    </div>
  );
}
