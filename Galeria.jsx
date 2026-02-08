
import { useState } from "react";
import "../Galeria.css";

const categories = [
  { key: "osszes", label: "Osszes" },
  { key: "palya", label: "Palya" },
  { key: "gokartok", label: "Gokartok" },
  { key: "versenyek", label: "Versenyek" },
  { key: "esemenyek", label: "Esemenyek" },
];

const images = [
  { id: 1, category: "palya", title: "A fopalya felulrol" },
  { id: 2, category: "palya", title: "Kanyar szekciok" },
  { id: 3, category: "palya", title: "Rajtvonal" },
  { id: 4, category: "gokartok", title: "Verseny gokart" },
  { id: 5, category: "gokartok", title: "Tandem gokart" },
  { id: 6, category: "gokartok", title: "Gyerek gokart" },
  { id: 7, category: "versenyek", title: "Csoportos verseny" },
  { id: 8, category: "versenyek", title: "Eredmenyhirdetes" },
  { id: 9, category: "esemenyek", title: "Szuletesnapi buli" },
  { id: 10, category: "esemenyek", title: "Ceges rendezvenyek" },
  { id: 11, category: "palya", title: "Esti vilagitas" },
  { id: 12, category: "versenyek", title: "Dij atadas" },
];

function Galeria() {
  const [activeCategory, setActiveCategory] = useState("osszes");

  const filtered =
    activeCategory === "osszes"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="galeria">
      <section className="galeria-header">
        <h2>Galeria</h2>
        <p>Nezd meg palyank es esemenyeink kepeit!</p>
      </section>

      <div className="galeria-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`galeria-cat-btn ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {filtered.map((img) => (
          <div key={img.id} className="galeria-item">
            <div className="galeria-placeholder-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              <span>{img.title}</span>
            </div>
            <div className="galeria-item-overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="galeria-info">
        <h3>Szeretned megoszlani sajat kepeidet?</h3>
        <p>
          Kuldd el nekunk a palyankrol keszult fotoidat es megjelenhetnek a
          galerianban! Irj nekunk a kapcsolat oldalon keresztul.
        </p>
      </div>
    </div>
  );
}

export default Galeria;
