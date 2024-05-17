import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
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
                        Staff
                    </NavLink>
                    <NavLink to="/news" activeStyle>
                        News
                    </NavLink>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/recruiting" activeStyle>
                        Recruiting
                    </NavLink>
                    <NavLink to="/alumni" activeStyle>
                        Alumni
                    </NavLink>
                    <NavLink to="/shop" activeStyle>
                        Shop
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;