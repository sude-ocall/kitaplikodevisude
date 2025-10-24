import Kitapkarti from "./Kitapkarti";

export default function Kitapliste({ kitaplar, toggleFavori, favoriler }) {
  if (kitaplar.length === 0) return <p>Hiç kitap bulunamadı.</p>;

  return (
    <div className="kitap-liste">
      {kitaplar.map((kitap) => (
        <Kitapkarti
          key={kitap.id}
          kitap={kitap}
          toggleFavori={toggleFavori}
          favoriler={favoriler}
        />
      ))}
    </div>
  );
}
