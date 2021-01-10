import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={'navigation'}>
            <NavLink to='/films' className='navigation-item'>Фильмы</NavLink>
            <NavLink to='/channels' className='navigation-item'>Телеканалы</NavLink>
        </nav>
    );
};

export default Nav;