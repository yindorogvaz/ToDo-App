import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper #0091ea light-blue accent-4 px1">
                <a href="/" className="brand-logo">ToDo</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">ToDo</Link></li>
                    <li><Link to="/about">About me</Link></li>
                </ul>
            </div>
        </nav>
    )
}