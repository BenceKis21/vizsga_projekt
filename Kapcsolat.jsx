'use client';

import "../Kapcsolat.css";

function Kapcsolat() {
  return (
    <div className="kapcsolat">
      <h2>Kapcsolat</h2>

      <div className="kapcsolat-grid">
        <div className="kapcsolat-info">
          <div className="kapcsolat-item">
            <div className="kapcsolat-icon">&#9743;</div>
            <div>
              <h3>Telefon</h3>
              <p>+36 66 123 456</p>
            </div>
          </div>
          <div className="kapcsolat-item">
            <div className="kapcsolat-icon">&#9993;</div>
            <div>
              <h3>Email</h3>
              <p>info@gokart.hu</p>
            </div>
          </div>
          <div className="kapcsolat-item">
            <div className="kapcsolat-icon">&#9873;</div>
            <div>
              <h3>Cim</h3>
              <p>5700 Gyula, Palya utca 1.</p>
            </div>
          </div>
          <div className="kapcsolat-item">
            <div className="kapcsolat-icon">&#9200;</div>
            <div>
              <h3>Nyitvatartas</h3>
              <p>
                H-P: 10:00-20:00<br />
                Szo: 09:00-21:00<br />
                V: 09:00-18:00
              </p>
            </div>
          </div>
        </div>

        <form className="kapcsolat-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Irj nekunk!</h3>
          <input type="text" placeholder="Nev" />
          <input type="email" placeholder="Email cim" />
          <input type="text" placeholder="Targy" />
          <textarea placeholder="Uzenet..."></textarea>
          <button type="submit" className="kapcsolat-btn">
            Kuldes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Kapcsolat;
