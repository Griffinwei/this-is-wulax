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
                    <NavLink to="/roster" activeStyle>
                        Roster
                    </NavLink>
                    <NavLink to="/schedule" activeStyle>
                        Schedule
                    </NavLink>
                    <NavLink to="/staff" activeStyle>
                        Staff & Leadership
                    </NavLink>
                    <NavLink to="/media" activeStyle>
                        Media
                    </NavLink>
                    <NavLink to="/awards" activeStyle>
                        Awards
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
                    <NavLink to="/roster" onClick={toggleMenu} activeStyle>
                        Roster
                    </NavLink>
                    <NavLink to="/schedule" onClick={toggleMenu} activeStyle>
                        Schedule
                    </NavLink>
                    <NavLink to="/staff" onClick={toggleMenu} activeStyle>
                        Staff & Leadership
                    </NavLink>
                    <NavLink to="/media" onClick={toggleMenu} activeStyle>
                        Media
                    </NavLink>
                    <NavLink to="/awards" onClick={toggleMenu} activeStyle>
                        Awards
                    </NavLink>
                    <NavLink to="/recruiting" onClick={toggleMenu} activeStyle>
                        Recruiting
                    </NavLink>
                    <NavLink to="/shop" onClick={toggleMenu} activeStyle>
                        Shop
                    </NavLink>
                    <NavLink to="/donate" onClick={toggleMenu} activeStyle>
                        Donate
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;
