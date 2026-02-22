import { useState } from "react";
import "../Galeria.css";

// 👉 IDE IMPORTÁLD A KÉPEKET
//import palya1 from "../assets/palya1.jpg";src: palya1
//import palya2 from "../assets/palya2.jpg";src: palya2
//import gokart1 from "../assets/gokart1.jpg";src: gokart1
//import verseny1 from "../assets/verseny1.jpg";src: verseny1

const categories = [
  { key: "osszes", label: "Összes" },
  { key: "palya", label: "Pálya" },
  { key: "gokartok", label: "Gokartok" },
  { key: "versenyek", label: "Versenyek" },
];

const images = [
  { id: 1, category: "palya", title: "A főpálya felülről",  },
  { id: 2, category: "palya", title: "Kanyar szekciók",  },
  { id: 3, category: "gokartok", title: "Verseny gokart",  },
  { id: 4, category: "versenyek", title: "Csoportos verseny",  },
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
        <h2>Galéria</h2>
        <p>Nézd meg pályánk és eseményeink képeit!</p>
      </section>

      <div className="galeria-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`galeria-cat-btn ${
              activeCategory === cat.key ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {filtered.map((img) => (
          <div key={img.id} className="galeria-item">
            <img src={img.src} alt={img.title} />
            <div className="galeria-overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;