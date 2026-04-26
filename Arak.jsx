import "../Arak.css";
import { Link } from "react-router-dom";
function Arak() {
  return (
    <div className="arak">
      <section className="arak-header">
        <h2>Araink</h2>
        <p>
          Valassz a kulonbozo csomagjaink kozul es elvezd a sebességet kedvezo
          aron!
        </p>
      </section>

      <div className="arak-grid">
        <div className="arak-card">
          <h3>Egyeni Menet</h3>
          <div className="arak-price">4.000 Ft</div>
          <div className="arak-desc">10 perces menet</div>
          <ul className="arak-list">
            <li>Sisak, nyakvedő biztositva</li>
            <li>Idomeres</li>
            <li>Eredmenyjelzo</li>
          </ul>
           <Link to="/foglalas">
          <button className="arak-btn">Foglalas</button>
          </Link>
        </div>

        <div className="arak-card featured">
          <div className="arak-popular">NEPSZERU</div>
          <h3>Csoportos Csomag</h3>
          <div className="arak-price">12.000 Ft-tol</div>
          <div className="arak-desc">3-8 fo, 10+ perc/fo</div>
          <ul className="arak-list">
            <li>Sisak, nyakvedő biztositva</li>
            <li>Csoportos verseny</li>
            <li>Hosszabb menet lehetoseg</li>
            <li>Felvezeto kor</li>
            <li>Lampas inditas</li>
            <li>Eredmenyhirdetes</li>
          </ul>
          <Link to="/foglalas">
          <button className="arak-btn">Foglalas</button>
          </Link>
        </div>

        <div className="arak-card">
          <h3>Tandem Menet</h3>
          <div className="arak-price">4.600 Ft</div>
          <div className="arak-desc">10 perces menet</div>
          <ul className="arak-list">
            <li>Sisak, nyakvedő biztositva</li>
            <li>Ketszemelyes gokart</li>
            <li>Idomeres</li>
            <li>Eredmenyjelzo</li>
          </ul>
           <Link to="/foglalas">
          <button className="arak-btn">Foglalas</button>
          </Link>
        </div>
      </div>

      <div className="arak-extra">
        <h3>Kiegeszito Szolgaltatasok</h3>
        <div className="arak-extra-grid">
          <div className="arak-extra-item">
            <h4>Szuletesnapi Csomag</h4>
            <p>Kulonleges csomag szuletesnapi bulira 8+ fo reszere</p>
            <p className="arak-extra-price">25.000 Ft-tol</p>
          </div>
          <div className="arak-extra-item">
            <h4>Ceges Rendezvenyek</h4>
            <p>Csapatepito programok es ceges versenyek</p>
             <Link to="/kapcsolat">
            <p className="arak-extra-price">Egyedi arajanlat</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arak;
