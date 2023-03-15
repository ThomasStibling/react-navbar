import React, { useContext } from "react";
import { NavLink } from "npm i react-router-dom";
import { Nav } from "react-bootstrap";
import {
    HouseFill,
    CalendarFill,
    Sunglasses,
    CarFrontFill,
    BarChartLineFill,
    PersonFillGear
} from "react-bootstrap-icons";

function Sidebar() {
    return (
        <Nav variant="pills" className="col-md-12 d-md-block def">
            <div className="sidebar-sticky"></div>
            <div className="navbar-header">
                <h1>SIRH</h1>
            </div>

            <NavLink to="/" className={({ isActive }) => (isActive ? "active-nav" : "inactive-nav")}>
                <Nav.Item className="navbar-item">
                    <HouseFill size={50} className="navbar-icon" />
                    Accueil
                </Nav.Item>
            </NavLink>
        </Nav>
    );
}

export default Sidebar;
