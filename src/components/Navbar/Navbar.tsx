import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                Profile
            </div>
            <div className={s.item}>
                Messages
            </div>
            <div className={`${s.item} ${s.active}`}>
                News
            </div>
            <div className={s.item}>
                Music
            </div>
            <div className={s.item}>
                Settings
            </div>
        </nav>
    );
};

