import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div style={{marginLeft:"700px", paddingTop:'15px'}} >
            <NavLink style={{marginRight:"40px", color:"white"}} exact to="/">Home</NavLink>
            <NavLink style={{color:"white"}} exact to="/add">Add Color</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;