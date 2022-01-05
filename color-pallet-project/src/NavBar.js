import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav style={{ marginBottom: "35px"}} >
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/add">Add Color</NavLink>
        </nav>
    )
}

export default NavBar;