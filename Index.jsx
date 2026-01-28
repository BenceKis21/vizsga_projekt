import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Arak from "./Arak";
function Index()
{
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/Arak" element={<Arak/>}> </Route>
                </Routes>
                <Footer/>
            
            </BrowserRouter>
        </>
    )

}
export default Index;