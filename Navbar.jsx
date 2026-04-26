'use client';

import { useState } from "react"; // Bővítve a state-el
import "../Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (  
    <nav className="navbar">
      {/* Hamburger gomb - csak mobilon látszik */}
      <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Menu">
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* A "Side Drawer" szerű menü */}
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Főoldal</Link>
          <Link to="/arak" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Árak</Link>
          <Link to="/foglalas" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Foglalás</Link>
          <Link to="/galeria" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Galéria</Link>
          <Link to="/koridok" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Köridők</Link>
          <Link to="/kapcsolat" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Kapcsolat</Link>
        </div>

        {/* Ez a rész mobilon a lista alja, laptopon a különálló profil szekció */}
        <div className="navbar-auth">
          <Link to="/profil" className="navbar-link auth-item" onClick={() => setIsMenuOpen(false)}>Profil</Link>
          <Link to="/bejelentkezes" className="navbar-link auth-item" onClick={() => setIsMenuOpen(false)}>Bejelentkezés</Link>
          <Link to="/regisztracio" className="navbar-link auth-item" onClick={() => setIsMenuOpen(false)}>Regisztráció</Link>
        </div>
      </div>

      {/* Windows-szerű profil ikon - Laptopon ez látszik a menü helyett a jobb szélen */}
      <Link to="/profil" className="windows-profile-icon" title="Profil">
        <div className="user-head"></div>
        <div className="user-body"></div>
      </Link>

      {/* Sötétítő réteg mobilon, ha nyitva a menü (kívülre kattintva bezár) */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </nav>
  );
}

export default Navbar;