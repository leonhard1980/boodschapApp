import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png"
import './TopMenu.css';

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/"
                         activeClassName="active-link">
                    <img className="plaatje"
                         src={logo}
                         alt="logo" />
                </NavLink>

                <ul>
                    <li>
                        <NavLink to="/product"
                                 activeClassName="active-link"> Products </NavLink>
                    </li>

                    <li>
                        <NavLink to="/getinvolved"
                                 activeClassName="active-link"> Get Involved </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about"
                                 activeClassName="active-link">About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/register"
                                 activeClassName="active-link"> Register </NavLink>
                    </li>
                </ul>


            </div>

        </nav>
    );
}

export default TopMenu;