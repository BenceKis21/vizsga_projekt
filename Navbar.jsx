'use client';

import "../Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (  
    <div className="navbar">
      <Link to="/" className="navbar-link">Főoldal</Link>
      <Link to="/arak" className="navbar-link">Árak</Link>
      <Link to="/foglalas" className="navbar-link">Foglalás</Link>
      <Link to="/galeria" className="navbar-link">Galéria</Link>
      <Link to="/koridok" className="navbar-link">Köridők</Link>
      <Link to="/kapcsolat" className="navbar-link">Kapcsolat</Link>
    </div>
  );
}

export default Navbar;