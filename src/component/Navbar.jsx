import React from "react";
import "../cssStyling/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <label class="logo">YOGA</label>
            <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/mycourses">myCourses</Link></li>
                <li><Link to="/login">Login/Sign-Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;