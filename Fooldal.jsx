import "../Fooldal.css";
import probaKep from "./proba2.png"
function Fooldal() {
  return (
    <div className="fooldal">
      <section className="fooldal-hero">
        <h2>Go-Kart palya, ahol Te lehetsz a nyertes!</h2>
        <p>
          Magyarorszag egyik legkedveltebb gokart palyaja varja a
          sebessegmaniasokat! Professzionalis palya, biztonsagos kornyezet,
          felejthetetlen elmenyek.
        </p>
      </section>

      <section className="fooldal-track">
        <h2>A Palyankrol</h2>
        <div className="fooldal-track-content">
          <div className="fooldal-image-placeholder">
            <img src={probaKep} alt="xd"/>
          </div>
          <div className="fooldal-features"> 
            <div className="fooldal-feature">
              <div className="fooldal-feature-icon">&#10003;</div>
              <div>
                <h3>300m hosszu palya</h3>
                <p>Kihivasokkal teli kanyarok es egyenesek</p>
              </div>
            </div>
            <div className="fooldal-feature">
              <div className="fooldal-feature-icon">&#10003;</div>
              <div>
                <h3>Profi gokartok</h3>
                <p>Rendszeresen karbantartott, biztonsagos jarmuvek</p>
              </div>
            </div>
            <div className="fooldal-feature">
              <div className="fooldal-feature-icon">&#10003;</div>
              <div>
                <h3>Idomero rendszer</h3>
                <p>Digitalis korido meres es eredmenyjelzo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fooldal;
