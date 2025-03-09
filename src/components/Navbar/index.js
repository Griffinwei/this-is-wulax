import React, { useState } from "react";
import logo from "./wulaxlogo.png";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./navbarStyling";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const openRoster = () => window.open('https://mcla.us/team/washington_st_louis/2025/roster.html', '_blank');
    const openSchedule = () => window.open('https://mcla.us/team/washington_st_louis/2025/schedule.html', '_blank');
    const openShop = () => window.open('https://teamlocker.squadlocker.com/#/lockers/washu-lacrosse', '_blank');
    return (
        <>
            <Nav>
                <div className="social-media-icons">
                    <a href="https://facebook.com/wulax/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="social-media-icon" />
                    </a>
                    <a href="https://twitter.com/washumenslax?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faXTwitter} className="social-media-icon" />
                    </a>
                    <a href="https://www.instagram.com/wustlmlacrosse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
                    </a>
                </div>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logoClass"/>
                </div>
                <Bars onClick={toggleMenu} className="bars" />
                <NavMenu className="nav-menu">
                    <NavLink to="/" activeStyle>Home</NavLink>
                    <NavLink to="#" onClick={openRoster} className="desktop-link">Roster</NavLink>
                    <NavLink to="#" onClick={openSchedule} className="desktop-link">Schedule</NavLink>
                    <NavLink to="/media" activeStyle>Media</NavLink>
                    <NavLink to="/recruiting" activeStyle>Recruiting</NavLink>
                    <NavLink to="#" onClick={openShop} className="desktop-link">Shop</NavLink>
                    <NavLink to="/donate" activeStyle>Donate</NavLink>
                </NavMenu>
                <NavMenu className={`nav-menu dropdown ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="#" onClick={() => { openRoster(); toggleMenu(); }} className="mobile-link">Roster</NavLink>
                    <NavLink to="#" onClick={() => { openSchedule(); toggleMenu(); }} className="mobile-link">Schedule</NavLink>
                    <NavLink to="/media" onClick={toggleMenu}>Media</NavLink>
                    <NavLink to="/recruiting" onClick={toggleMenu}>Recruiting</NavLink>
                    <NavLink to="#" onClick={() => { openShop(); toggleMenu(); }} className="mobile-link">Schedule</NavLink>
                    <NavLink to="/donate" onClick={toggleMenu}>Donate</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;
