import React from "react";
import logo from "./wulaxlogo.png";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./navbarStyling";
import "./index.css";

const Navbar = () => {
    return (
        <>
            <Nav>
                <div>
                    <img src={logo} alt="Logo" className="logoClass"/>
                </div>
                <Bars/>
                <NavMenu>
                    <NavLink to="/" >
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
            </Nav>
        </>
    );
};

export default Navbar;