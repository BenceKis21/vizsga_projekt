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
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fooldal from "./Fooldal";
import Arak from "./Arak";
import Foglalas from "./Foglalas";
import Koridok from "./Koridok";
import Galeria from "./Galeria";
import Kapcsolat from "./Kapcsolat";
import "../Index.css";

function Index() {
  return (
    <BrowserRouter>

        <Header />
        <Navbar />
          <Routes>
            <Route path="/" element={<Fooldal />} />
            <Route path="/arak" element={<Arak />} />
            <Route path="/foglalas" element={<Foglalas />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/koridok" element={<Koridok />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default Index;