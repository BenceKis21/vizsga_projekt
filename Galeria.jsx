import { useState } from "react";
import "../Galeria.css";


import palya1 from "../assets/gokartrajt.png";
import palya2 from "../assets/gokartmuhely.png";
import palya3 from "../assets/gokartkanyar.png";
import palya4 from "../assets/kanyar2.png";
import gokart1 from "../assets/gokart1.png";
import gokart2 from "../assets/gokart2.png";
import gokart3 from "../assets/gokart3.png";
import gokart4 from "../assets/gokart4.png";
import verseny1 from "../assets/verseny1.png";
import verseny2 from "../assets/verseny2.png";
import verseny3 from "../assets/verseny3.png";
import verseny4 from "../assets/verseny4.png";

const categories = ["osszes", "palya", "gokartok", "versenyek"];
const categoryLabels = { osszes: "Összes", palya: "Pálya", gokartok: "Gokartok", versenyek: "Versenyek" };


const images = [
  { id: 1, category: "palya", title: "Rajtrács", src: palya1 }, 
  { id: 2, category: "palya", title: "Műhely", src: palya2 }, 
  { id: 3, category: "palya", title: "Kanyar szekciók", src: palya3 },
  { id: 4, category: "palya", title: "Kanyar szekciók", src: palya4 },
  { id: 5, category: "gokartok", title: "Gokartok", src: gokart1 }, 
  { id: 6, category: "gokartok", title: "Gokartok", src: gokart2 }, 
  { id: 7, category: "gokartok", title: "Gokartok", src: gokart3 },
  { id: 8, category: "gokartok", title: "Gokartok", src: gokart4 },
  { id: 9, category: "versenyek", title: "Csoportos verseny", src: verseny1 },
  { id: 10, category: "versenyek", title: "Csoportos verseny", src: verseny2 },
  { id: 11, category: "versenyek", title: "Csoportos verseny", src: verseny3 },
  { id: 12, category: "versenyek", title: "Csoportos verseny", src: verseny4 },
];

export default function Galeria() {
  const [active, setActive] = useState("osszes");
  const filtered = active === "osszes" ? images : images.filter(img => img.category === active);

  return (
    <div className="galeria">
      <section className="galeria-header">
        <h2>Galéria</h2>
        <p>Nézd meg pályánk és eseményeink képeit!</p>
      </section>

      <div className="galeria-categories">
        {categories.map(cat => (
          <button key={cat} className={`galeria-cat-btn ${active === cat ? "active" : ""}`} onClick={() => setActive(cat)}>
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {filtered.map(img => (
          <div key={img.id} className="galeria-item">
            <img src={img.src} alt={img.title} />
            <div className="galeria-overlay"><span>{img.title}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}