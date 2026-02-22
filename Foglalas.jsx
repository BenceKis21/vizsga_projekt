import { useState } from "react";
import "../Foglalas.css";

function Foglalas() {

  // STATE
  let [ujFoglalas, setUjFoglalas] = useState({
    vezeteknev: "",
    keresztnev: "",
    email: "",
    telefonszam: "",
    csomag: "",
    idopont: "",
    foSzam: 1,
    megjegyzes: ""
  });

  // INPUT KEZELŐ
  let esemenykezelo = (event) => {
    let nameID = event.target.name;
    let value = event.target.value;

    setUjFoglalas((prevState) => {
      return {
        ...prevState,
        [nameID]: value
      };
    });
  };

  // FELTÖLTÉS
  let feltoltes = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/foglalasok", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ujFoglalas)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hiba tortent!");
        }
        return res.json();
      })
      .then(() => {
        alert("Sikeres foglalas!");
      })
      .catch(() => {
        alert("Sikertelen foglalas!");
      });
  };

  return (
    <div className="foglalas">
      <h2>Foglalas</h2>
      <p className="foglalas-subtitle">
        Toltsd ki az alabbi urlapot es foglald le az idopontod!
      </p>

      <form className="foglalas-form" onSubmit={feltoltes}>
        
        <div className="foglalas-group">
          <label>Vezeteknev</label>
          <input 
            type="text" 
            name="vezeteknev"
            onChange={esemenykezelo}
            placeholder="pl. Nagy" 
          />
        </div>

        <div className="foglalas-group">
          <label>Keresztnev</label>
          <input 
            type="text" 
            name="keresztnev"
            onChange={esemenykezelo}
            placeholder="pl. Peter" 
          />
        </div>

        <div className="foglalas-group">
          <label>Email cim</label>
          <input 
            type="email" 
            name="email"
            onChange={esemenykezelo}
            placeholder="pl. nagy.peter@email.hu" 
          />
        </div>

        <div className="foglalas-group">
          <label>Telefonszam</label>
          <input 
            type="tel" 
            name="telefonszam"
            onChange={esemenykezelo}
            placeholder="+36 30 123 4567" 
          />
        </div>

        <div className="foglalas-group">
          <label>Csomag</label>
          <select 
            name="csomag"
            onChange={esemenykezelo}
          >
            <option value="">Valassz csomagot...</option>
            <option value="egyeni">Egyeni Menet - 4.000 Ft</option>
            <option value="csoportos">Csoportos Csomag - 12.000 Ft-tol</option>
            <option value="tandem">Tandem Menet - 4.600 Ft</option>
          </select>
        </div>

        <div className="foglalas-group">
          <label>Kivant idopont</label>
          <input 
            type="datetime-local"
            name="idopont"
            onChange={esemenykezelo}
          />
        </div>

        <div className="foglalas-group">
          <label>Resztvevok szama</label>
          <input 
            type="number" 
            name="rvSzam"
            min="1" 
            max="20"
            onChange={esemenykezelo}
            placeholder="1" 
          />
        </div>

        <div className="foglalas-group">
          <label>Megjegyzes</label>
          <textarea 
            name="megjegyzes"
            onChange={esemenykezelo}
            placeholder="Egyeb keresek, megjegyzesek..."
          ></textarea>
        </div>

        <button type="submit" className="foglalas-submit">
          Foglalas elkuldese
        </button>

      </form>
    </div>
  );
}

export default Foglalas;