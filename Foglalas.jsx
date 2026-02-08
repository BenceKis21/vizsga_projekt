'use client';

import "../Foglalas.css";

function Foglalas() {
  return (
    <div className="foglalas">
      <h2>Foglalas</h2>
      <p className="foglalas-subtitle">
        Toltsd ki az alabbi urlapot es foglald le a helyedet!
      </p>

      <form className="foglalas-form" onSubmit={(e) => e.preventDefault()}>
        <div className="foglalas-group">
          <label>Vezeteknev</label>
          <input type="text" placeholder="pl. Nagy" />
        </div>
        <div className="foglalas-group">
          <label>Keresztnev</label>
          <input type="text" placeholder="pl. Peter" />
        </div>
        <div className="foglalas-group">
          <label>Email cim</label>
          <input type="email" placeholder="pl. nagy.peter@email.hu" />
        </div>
        <div className="foglalas-group">
          <label>Telefonszam</label>
          <input type="tel" placeholder="+36 30 123 4567" />
        </div>
        <div className="foglalas-group">
          <label>Csomag</label>
          <select>
            <option value="">Valassz csomagot...</option>
            <option value="egyeni">Egyeni Menet - 4.000 Ft</option>
            <option value="csoportos">Csoportos Csomag - 12.000 Ft-tol</option>
            <option value="tandem">Tandem Menet - 4.600 Ft</option>
          </select>
        </div>
        <div className="foglalas-group">
          <label>Kivant idopont</label>
          <input type="datetime-local" />
        </div>
        <div className="foglalas-group">
          <label>Fo szama</label>
          <input type="number" min="1" max="20" placeholder="1" />
        </div>
        <div className="foglalas-group">
          <label>Megjegyzes</label>
          <textarea placeholder="Egyeb keresek, megjegyzesek..."></textarea>
        </div>
        <button type="submit" className="foglalas-submit">
          Foglalas elkuldese
        </button>
      </form>
    </div>
  );
}

export default Foglalas;
