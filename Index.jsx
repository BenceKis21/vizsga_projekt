/*import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Fooldal from "./Fooldal.jsx";
import Arak from "./Arak.jsx";
//import Galeria from "./Galeria.jsx"; <Route path="/Galeria" element={<Galeria/>}></Route>
import Kapcsolat from "./Kapcsolat.jsx";
import Navbar from "./Navbar.jsx";
function Index()
{
    return(
        <>
            <BrowserRouter>
            <Header/>
                 <Navbar/>
                <Routes>
                    <Route path="/" element={<Fooldal/>}></Route>
                    <Route path="/Arak" element={<Arak/>}></Route>
                    <Route path="/Kapcsolat" elemet={<Kapcsolat/>}></Route>
                    <Route path="/Foglalas" elemet={<Kapcsolat/>}></Route>
                </Routes>
                <Footer/>
            
            </BrowserRouter>
        </>
    )

}*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fooldal from "./Fooldal";
import Arak from "./Arak";
import Foglalas from "./Foglalas";
import Koridok from "./Koridok";
import Galeria from "./Galeria";
import Kapcsolat from "./Kapcsolat";
import Profil from "./Profil";
import "../Index.css";
import Bejelentkezes from "./Bejelentkezes";
import Regisztral from "./Regisztral";
import Betolt from "./Betolt";
import AdminPanel from "./AdminPanel";

function Index() {
  const [showIntro, setShowIntro] = useState(true);
  // ÚJ: Itt tároljuk a bejelentkezett felhasználót
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    console.log("Bejelentkezett felhasználó:", userData);
  };
 const handleRegister = (userData) => {
    setUser(userData); // Elmenti a regisztrációkor megadott adatokat a 'user' state-be
  console.log("Sikeres regisztráció:", userData);
};

  return (
    <>
      {showIntro && <Betolt onComplete={() => setShowIntro(false)} />}
      
      <div 
        className="app-wrapper" 
        style={{
          opacity: showIntro ? 0 : 1,
          transition: 'opacity 0.5s ease-in'
        }}
      >
        <BrowserRouter>
          <Header />
          <Navbar />
          <main className="app-content"> 
            <Routes>
              <Route path="/" element={<Fooldal />} />
              <Route path="/arak" element={<Arak />} />
              <Route path="/foglalas" element={<Foglalas />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/koridok" element={<Koridok />} />
              <Route path="/kapcsolat" element={<Kapcsolat />} />
              <Route path="/admin" element={<AdminPanel />} />
              
              
              {/* BŐVÍTVE: Átadjuk a user adatokat a profilnak */}
              <Route path="/profil" element={<Profil user={user} />} />
              
              {/* BŐVÍTVE: Bekötjük az onLogin függvényt */}
              <Route path="/bejelentkezes" element={<Bejelentkezes onLogin={handleLogin} />} />
            
              <Route path="/regisztracio" element={<Regisztral onRegister={handleRegister} />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default Index;