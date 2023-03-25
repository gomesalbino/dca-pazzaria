import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuNave from "./components/header";
import Cardapio from "./pages/cardapio";
import Home from "./pages/home";
import Footer from "components/Footer";


function AppRouter() {
    return ( 
        <main>

            <Router>
                <MenuNave />
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="/sabores" element={<Cardapio />} />
                </Routes>
                <Footer />
            </Router>
        </main>
     );
}

export default AppRouter;


