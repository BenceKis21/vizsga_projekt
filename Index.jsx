import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Fooldal from "./Fooldal";
import Arak from "./Arak";
import Kapcsolat from "./Kapcsolat";
function Index()
{
    return(
        <>
            <BrowserRouter>
                <Header/>
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

}
export default Index;