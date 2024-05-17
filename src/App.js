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
import Media from "./pages/Media";
import Recruiting from "./pages/Recruiting";
import Awards from "./pages/Awards";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate";

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
                <Route path="/media" element={<Media />} />
                <Route
                    path="/recruiting"
                    element={<Recruiting />}
                />
                <Route path="/awards" element={<Awards />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </Router>
    );
}

export default App;