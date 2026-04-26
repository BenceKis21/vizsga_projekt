import React, { useState, useEffect } from "react";
import "../Koridok.css";

function Koridok() {
  // Az állapot kezelése a lekért adatoknak
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Adatlekérés megvalósítása
    fetch("http://localhost:8000/api/koridok")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error("Hiba az adatok lekérésekor:", error));
  }, []); // Üres függőségi lista: csak egyszer fut le mountoláskor

  return (
    <div className="koridok">
      <h2>Koridok - Ranglista</h2>
      <p className="koridok-subtitle">
        A palyan elert legjobb koridok listaja
      </p>

      <div className="koridok-table-wrapper">
        <table className="koridok-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Rajtszam</th>
              <th>Korido</th>
              <th>Datum</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r,pos) => (
              <tr key={pos}>
                <td>{pos+1}.</td>
                <td>{r.kocsi_rajtszama}</td>
                <td>{r.futott_korido}</td>
                <td>{r.datum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="koridok-info">
        Az idomeres automatikus, digitalis rendszerrel tortenik. Az eredmenyek
        azonnal megjelennek a monitoron. A ranglista havonta frissul.
      </div>
    </div>
  );
}

export default Koridok;