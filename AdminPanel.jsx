import { useState, useEffect } from "react";
import "../AdminPanel.css";

function AdminPanel() {
  const [activeTab, setActiveTab] = useState("foglalasok");
  const [foglalasok, setFoglalasok] = useState([]);
  const [vendegek, setVendegek] = useState([]);
  const [koridok, setKoridok] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/foglalasok")
      .then(res => res.json())
      .then(data => setFoglalasok(data));

    fetch("http://localhost:8000/api/vendegek")
      .then(res => res.json())
      .then(data => setVendegek(data));

    fetch("http://localhost:8000/api/koridok")
      .then(res => res.json())
      .then(data => {
        setKoridok(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const inditSzerkesztes = (item) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  if (loading) return <div className="admin-status-msg">Betöltés...</div>;

  const aktualisLista = activeTab === "foglalasok" ? foglalasok : (activeTab === "vendegek" ? vendegek : koridok);

  return (
    <div className="admin-page-wrapper">
      <div className="admin-header-section">
        <h1>Go-Kart Vezérlőpult</h1>
      </div>

      <div className="admin-tabs-nav">
        <button className={activeTab === "foglalasok" ? "tab-btn active" : "tab-btn"} onClick={() => setActiveTab("foglalasok")}>Foglalások</button>
        <button className={activeTab === "vendegek" ? "tab-btn active" : "tab-btn"} onClick={() => setActiveTab("vendegek")}>Vendégek</button>
        <button className={activeTab === "koridok" ? "tab-btn active" : "tab-btn"} onClick={() => setActiveTab("koridok")}>Köridők</button>
      </div>

      <div className="admin-cards-container">
        {aktualisLista.map(item => (
          <div key={item.id} className={editingId === item.id ? "admin-card editing" : "admin-card"}>
            <div className="admin-card-body">
              {activeTab === "foglalasok" && (
                <>
                  <div className="data-row"><label>Név:</label> 
                    {editingId === item.id ? <input value={editForm.nev} onChange={e => setEditForm({...editForm, nev: e.target.value})} /> : <span>{item.nev || "Nincs megadva"}</span>}
                  </div>
                  <div className="data-row"><label>Időpont:</label> 
                    {editingId === item.id ? <input type="datetime-local" value={editForm.foglalt_idopont?.replace(" ", "T")} onChange={e => setEditForm({...editForm, foglalt_idopont: e.target.value})} /> : <span>{item.foglalt_idopont}</span>}
                  </div>
                  <div className="data-row"><label>Csomag:</label> 
                    {editingId === item.id ? 
                      <select value={editForm.csomag} onChange={e => setEditForm({...editForm, csomag: e.target.value})}>
                        <option value="1">1. Csomag</option>
                        <option value="2">2. Csomag</option>
                        <option value="3">3. Csomag</option>
                      </select> : <span className="package-tag">{item.csomag}. csomag</span>}
                  </div>
                  <div className="data-row"><label>Létszám:</label> 
                    {editingId === item.id ? <input type="number" value={editForm.resztvevok} onChange={e => setEditForm({...editForm, resztvevok: e.target.value})} /> : <span>{item.resztvevok} fő</span>}
                  </div>
                </>
              )}
              {activeTab === "vendegek" && (
                 <div className="data-row-flex">
                   <div><label>Név:</label> <span>{item.nev}</span></div>
                   <div><label>Email:</label> <span>{item.email}</span></div>
                 </div>
              )}
              {activeTab === "koridok" && (
                 <div className="data-row-flex">
                   <div><label>Köridő:</label> <span className="time-highlight">{item.futott_korido} mp</span></div>
                   <div><label>Autó:</label> <span>#{item.kocsi_rajtszama}</span></div>
                 </div>
              )}
            </div>

            <div className="admin-card-footer">
              {editingId === item.id ? (
                <>
                  <button className="btn-save" onClick={() => setEditingId(null)}>Mentés</button>
                  <button className="btn-cancel" onClick={() => setEditingId(null)}>Mégse</button>
                </>
              ) : (
                <>
                  {activeTab === "foglalasok" && <button className="btn-edit" onClick={() => inditSzerkesztes(item)}>Szerkesztés</button>}
                  <button className="btn-delete">Törlés</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;