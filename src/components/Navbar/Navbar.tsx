import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item} >Profile</NavLink>


            </div>
            <div>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item} >Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news">News</NavLink>
            </div>
            <div>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};

