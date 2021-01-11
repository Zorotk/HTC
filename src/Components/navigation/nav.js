import React from 'react';
import {NavLink} from "react-router-dom";
import './nav.scss'
const Nav = () => {
    return (
        <div className={'navigation'}>
            <NavLink to='/films' className='navigation-item'>Фильмы</NavLink>
            <NavLink to='/channels' className='navigation-item'>Телеканалы</NavLink>
        </div>
    );
};

export default Nav;