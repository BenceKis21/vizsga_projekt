import { useState } from "react";
import "../Foglalas.css";

function Foglalas() {

  // STATE
  let [ujFoglalas, setUjFoglalas] = useState({
    nev: "",
    email: "",
    telefon: "",
    csomag: "",
    foglalt_idopont: "",
    resztvevok: 1
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

    fetch("http://localhost:8000/api/foglal", {
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
      .catch((error) => {
        alert("Sikertelen foglalas!",error);
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
          <label>Teljes Nev</label>
          <input 
            type="text" 
            name="nev"
            onChange={esemenykezelo}
            placeholder="pl. Nagy Peter" 
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
            type="text" 
            name="telefon"
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
            <option value="0">Egyeni Menet - 4.000 Ft</option>
            <option value="1">Csoportos Csomag - 12.000 Ft-tol</option>
            <option value="2">Tandem Menet - 4.600 Ft</option>
          </select>
        </div>

        <div className="foglalas-group">
          <label>Kivant idopont</label>
          <input 
            type="datetime-local"
            name="foglalt_idopont"
            onChange={esemenykezelo}
          />
        </div>

        <div className="foglalas-group">
          <label>Resztvevok szama</label>
          <input 
            type="number" 
            name="resztvevok"
            min="1" 
            max="10"
            onChange={esemenykezelo}
            placeholder="1" 
          />
        </div>

        

        <button type="submit" className="foglalas-submit">
          Foglalas elkuldese
        </button>

      </form>
    </div>
  );
}//regisztralas checkbox!!!!

export default Foglalas;