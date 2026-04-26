import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Gokart Palya</h3>
          <p>
            A legjobb gokart elmeny Gyulan es kornyeken.
            Varjuk kezdoktol a profikig mindenkit!
          </p>
        </div>
        <div className="footer-col">
          <h3>Elerhetoseg</h3>
          <p>
            5700 Gyula, Palya utca 1.<br />
            Telefon: +36 66 123 456<br />
            Email: info@gokart.hu
          </p>
        </div>
        <div className="footer-col">
          <h3>Nyitvatartas</h3>
          <p>
            Hetfo - Pentek: 10:00 - 20:00<br />
            Szombat: 09:00 - 21:00<br />
            Vasarnap: 09:00 - 18:00
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 Go-Kart Palya. Minden jog fenntartva.
      </div>
    </footer>
  );
}

export default Footer;
