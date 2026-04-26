import { useState, useEffect } from "react"; // Hozzáadva: useState és useEffect
import { useNavigate } from "react-router-dom";
import "../Profil.css";

function Profil({ user, onLogout }) {
  const navigate = useNavigate();
  //const [extraData, setExtraData] = useState(null); // Állapot az API adatoknak
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // API hívás kiszervezése useEffect-be
  useEffect(() => {
    if (user && user.id) {
      setLoading(true);
      fetch(`http://localhost:8000/api/profil/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data)
          setLoading(false);
        })
        .catch((error) => {
          console.error("Hiba az adatok lekérésekor:", error);
          setLoading(false);
        });
    }
  }, [user]); // Csak akkor fut le, ha a user változik

  // 1. eset: Ha nincs bejelentkezve
  if (!user) {
    return (
      <div className="profil-container">
        <div className="profil-card login-prompt">
          <h1 className="profil-title">Nem vagy bejelentkezve</h1>
          <p>Kérlek, jelentkezz be vagy hozz létre egy fiókot a profilod megtekintéséhez.</p>
          <div className="profil-actions-horizontal">
            <button className="profil-button" onClick={() => navigate("/bejelentkezes")}>
              Bejelentkezés
            </button>
            <button className="profil-button secondary" onClick={() => navigate("/regisztracio")}>
              Regisztráció
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. eset: Ha épp töltődnek az adatok (opcionális, de ajánlott)
  if (loading) return <div className="profil-container">Betöltés...</div>;

  // 3. eset: Bejelentkezett profil megjelenítése
  return (
    <div className="profil-container">
      <div className="profil-header-card">
        <div className="profil-avatar">
          {user.nev ? user.nev.charAt(0).toUpperCase() : "?"}
        </div>
        <div className="profil-info">
          <h1 className="profil-name">{user.nev}</h1>
          <p className="profil-email">{user.email}</p>
        </div>
        <button className="logout-button" onClick={onLogout}>
          Kijelentkezés
        </button>
      </div>

      <div className="profil-section">
        <h2 className="section-title">Foglalt időpontok</h2>
        {user.foglalasok && user.foglalasok.length > 0 ? (
          <div className="foglalasok-list">
            {user.foglalasok.map((foglalas, index) => (
              <div key={index} className="foglalas-card">
                <div className="foglalas-date">
                  <span className="date-label">Dátum</span>
                  <span className="date-value">{foglalas.datum}</span>
                </div>
                <div className="foglalas-time">
                  <span className="time-label">Időpont</span>
                  <span className="time-value">{foglalas.idopont}</span>
                </div>
                <div className="foglalas-package">
                  <span className="package-label">Csomag</span>
                  <span className="package-value">{foglalas.csomag}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Nincs aktív foglalásod.</p>
            <button className="profil-button" onClick={() => navigate("/foglalas")}>
              Foglalj most!
            </button>
          </div>
        )}
      </div>

      <div className="profil-section">
        <h2 className="section-title">Lefutott köridők</h2>
        {results.length > 0 ? (
          <div className="koridok-table-container">
            <table className="koridok-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Rajtszám</th>
                  <th>Köridő</th>
                  <th>Dátum</th>
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
            <div className="koridok-stats">
              <div className="stat-item">
                <span className="stat-label">Összes futam</span>
                <span className="stat-value">{results.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Legjobb idő</span>
                <span className="stat-value best-time">
                 {results[0].futott_korido}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>Még nincsenek rögzített köridőid.</p>
            <p className="empty-hint">A köridők automatikusan rögzítődnek a pályán való vezetéskor.</p>
          </div>
        )}
      </div>
    </div>
  
  );
}

export default Profil;