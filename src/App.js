import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Media from "./pages/Media";
import Recruiting from "./pages/Recruiting";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/media" element={<Media />} />
                <Route path="/recruiting" element={<Recruiting />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </Router>
    );
}

export default App;
