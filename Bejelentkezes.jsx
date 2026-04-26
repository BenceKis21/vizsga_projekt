import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ÚJ: Navigációhoz szükséges
import "../Bejelentkezes.css";

function Bejelentkezes({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate(); // ÚJ: Navigációs függvény létrehozása

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Kérlek töltsd ki az összes mezőt!");
      return;
    }

    // useEffect(() => {
    // Adatlekérés megvalósítása
    fetch("http://localhost:8000/api/bejelentkezes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.length==0)
          {setError("Hibás email vagy jelszó");
          return}
          setUser(data);
       onLogin(data[0]);
      navigate(`/profil/`);
      
      })
      .catch(error => console.error("Hiba:", error));
    }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Bejelentkezés</h1>
        <p className="login-subtitle">Jelentkezz be a Go-Kart fiókodba</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email cím</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pelda@email.hu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Jelszó</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Jelszó"
            />
          </div>

          <button type="submit" className="login-button">
            Bejelentkezés
          </button>
        </form>

        <p className="login-footer">
          Nincs még fiókod?{" "}
          <button
            className="link-button"
            onClick={() => navigate("/regisztracio")} // BŐVÍTVE: Navigáció a regisztrációra
          >
            Regisztrálj itt!
          </button>
        </p>

        <div className="login-demo">
          <p>Teszt bejelentkezés:</p>
          <p>Email: teszt@gokart.hu</p>
          <p>Jelszó: jelszo123</p>
        </div>
      </div>
    </div>
  );
}

export default Bejelentkezes;