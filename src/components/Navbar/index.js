import React, { useState } from "react";
import logo from "./wulaxlogo.png";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./navbarStyling";
import "./index.css";

function Navbar() {
    // State to manage the visibility of the dropdown menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to open the Roster page in a new tab
    const openRoster = () => {
        window.open('https://mcla.us/team/washington_st_louis/2024/roster.html', '_blank');
    };

    // Function to open the Schedule page in a new tab
    const openSchedule = () => {
        window.open('https://mcla.us/team/washington_st_louis/2024/schedule.html', '_blank');
    };

    return (
        <>
            <Nav>
                <div>
                    <img src={logo} alt="Logo" className="logoClass"/>
                </div>
                {/* Hamburger menu for smaller screens */}
                <Bars onClick={toggleMenu} className="bars" />
                {/* Regular navbar menu for larger screens */}
                <NavMenu className="nav-menu">
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="#" onClick={openRoster} className="white-text">
                        Roster
                    </NavLink>
                    <NavLink to="#" onClick={openSchedule} className="white-text">
                        Schedule
                    </NavLink>
                    <NavLink to="/staff" activeStyle>
                        Staff & Leadership
                    </NavLink>
                    <NavLink to="/media" activeStyle>
                        Media
                    </NavLink>
                    <NavLink to="/recruiting" activeStyle>
                        Recruiting
                    </NavLink>
                    <NavLink to="/shop" activeStyle>
                        Shop
                    </NavLink>
                    <NavLink to="/donate" activeStyle>
                        Donate
                    </NavLink>
                </NavMenu>
                {/* Dropdown menu for smaller screens */}
                <NavMenu className={`nav-menu dropdown ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={toggleMenu}>
                        Home
                    </NavLink>
                    <NavLink to="#" onClick={() => { openRoster(); toggleMenu(); }} className="white-text">
                        Roster
                    </NavLink>
                    <NavLink to="#" onClick={() => { openSchedule(); toggleMenu(); }} className="white-text">
                        Schedule
                    </NavLink>
                    <NavLink to="/staff" onClick={toggleMenu}>
                        Staff & Leadership
                    </NavLink>
                    <NavLink to="/media" onClick={toggleMenu}>
                        Media
                    </NavLink>
                    <NavLink to="/recruiting" onClick={toggleMenu}>
                        Recruiting
                    </NavLink>
                    <NavLink to="/shop" onClick={toggleMenu}>
                        Shop
                    </NavLink>
                    <NavLink to="/donate" onClick={toggleMenu}>
                        Donate
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;
