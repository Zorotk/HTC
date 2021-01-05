import React from 'react';
import './header.scss'


import Input from "./input/input";
import Button from "./button/button";
import Logo from "./logo/logo";


const Header = () => {
    return (
        <header className="header-container">
            <div className="header-item logo">
                <Logo/>
            </div>

            <div className="header-item search">
                <Input className={'header-input-search'}
                       props={{placeholder: 'Поиск...', type: "text"}}/>
                <div className={'search-btn'}>Найти</div>
            </div>

            <div className="header-item auth">
                <Button>
                    войти
                </Button>
            </div>
        </header>
    );
};

export default Header;