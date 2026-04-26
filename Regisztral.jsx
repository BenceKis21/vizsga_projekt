
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Regisztral.css";

function Regisztral({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nev: "",
    telefon: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nev || !formData.telefon || !formData.email || !formData.jelszo) {
      setError("Kerlek toltsd ki az osszes mezot!");
      return;
    }

    if (formData.jelszo !== formData.passwordConfirm) {
      setError("A jelszavak nem egyeznek!");
      return;
    }

    if (formData.jelszo.length < 6) {
      setError("A jelszonak legalabb 6 karakter hosszunak kell lennie!");
      return;
    }

    // Sikeres regisztracio (valodi alkalmazasban backend kell)

    fetch("http://localhost:8000/api/regiszt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Hiba történt!");
        }

        return data;


      })
      .then(() => {
        alert("Sikeres regisztráció!");
      })
      .catch((error) => {
        console.log(error);
        alert("Sikertelen regisztráció!");
      });


    setSuccess(true);
    setError("");


    // Automatikus bejelentkeztetes
    setTimeout(() => {
      onRegister({
        id: Date.now(),
        nev: `${formData.nev}`,
        email: formData.email,
        foglalasok: [],
        koridok: [],
      });
      navigate("/profil");
    }, 1500);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Regisztracio</h1>
        <p className="register-subtitle">Hozd letre Go-Kart fiokod</p>

        {error && <div className="register-error">{error}</div>}
        {success && (
          <div className="register-success">
            Sikeres regisztracio! Atiranyitas a profilodra...
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nev">Nev</label>
              <input
                type="text"
                id="nev"
                name="nev"
                value={formData.nev}
                onChange={handleChange}
                placeholder="pl. Nagy Peter"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="telefon">Telefonszám</label>
            <input
              type="text"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              placeholder="+36 70 111 1111"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email cim</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nagyadam@email.hu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Jelszo</label>
            <input
              type="password"
              id="jelszo"
              name="jelszo"
              value={formData.jelszo}
              onChange={handleChange}
              placeholder="Legalabb 6 karakter"
            />
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirm">Jelszo megerositese</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="Jelszo ismet"
            />
          </div>

          <button type="submit" className="register-button" disabled={success}>
            Regisztracio
          </button>
        </form>

        <p className="register-footer">
          Mar van fiokod?{" "}
          <button className="link-button" onClick={() => navigate("/bejelentkezes")}>
            Jelentkezz be!
          </button>
        </p>
      </div>
    </div>
  );
}

export default Regisztral;
