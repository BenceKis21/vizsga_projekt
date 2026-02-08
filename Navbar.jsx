'use client';

import "../Navbar.css";

function Navbar({ currentPage, onNavigate }) {
  const links = [
    { key: "fooldal", label: "Fooldal" },
    { key: "arak", label: "Arak" },
    { key: "foglalas", label: "Foglalas" },
    { key: "galeria", label: "Galeria" },
    { key: "koridok", label: "Koridok" },
    { key: "kapcsolat", label: "Kapcsolat" },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <button
          key={link.key}
          className={`navbar-link ${currentPage === link.key ? "active" : ""}`}
          onClick={() => onNavigate(link.key)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
