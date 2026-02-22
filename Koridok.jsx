import "../Koridok.css";

function Koridok() {
  const results = [
    { pos: 1, time: "0:42.31", date: "2026.06.25" },
    { pos: 2, time: "0:43.05", date: "2026.07.12" },
    { pos: 3, time: "0:43.88", date: "2026.07.03" },
    { pos: 4, time: "0:44.12", date: "2026.08.01" },
    { pos: 5, time: "0:44.67", date: "2026.06.30" },
    { pos: 6, time: "0:45.20", date: "2026.07.22" },
    { pos: 7, time: "0:45.89", date: "2026.08.10" },
    { pos: 8, time: "0:46.33", date: "2026.07.15" },
    { pos: 9, time: "0:46.71", date: "2026.08.20" },
    { pos: 10, time: "0:47.02", date: "2026.06.28" },
  ];

  return (
    <div className="koridok">
      <h2>Koridok - Ranglista</h2>
      <p className="koridok-subtitle">
        A palyan elert legjobb koridok listaja
      </p>

      <div className="koridok-table-wrapper">
        <table className="koridok-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Rajtszam</th>
              <th>Korido</th>
              <th>Datum</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.pos}>
                <td>{r.pos}.</td>
                <td>{r.num}</td>
                <td>{r.time}</td>
                <td>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="koridok-info">
        Az idomeres automatikus, digitalis rendszerrel tortenik. Az eredmenyek
        azonnal megjelennek a monitoron. A ranglista havonta frissul.
      </div>
    </div>
  );
}

export default Koridok;
