import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";
import Staff from "./pages/Staff";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Recruiting from "./pages/Recruiting";
import Alumni from "./pages/Alumni";
import Shop from "./pages/Shop";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roster" element={<Roster />} />
                <Route
                    path="/schedule"
                    element={<Schedule />}
                />
                <Route
                    path="/staff"
                    element={<Staff />}
                />
                <Route path="/news" element={<News />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                    path="/recruiting"
                    element={<Recruiting />}
                />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </Router>
    );
}

export default App;