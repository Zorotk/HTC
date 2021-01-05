import React from 'react'

import './App.scss';
import routes from "./routes";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import {NavLink} from "react-router-dom";

// import Footer from "./components/Footer/Footer";


const App = () => {


    return (
        <div className={'layout-container'}>
            <Header/>
            <nav className={'navigation'}>
                <NavLink to='/films' className='navigation-item'>Фильмы</NavLink>
                <NavLink to='/channels' className='navigation-item'>Телеканалы</NavLink>
            </nav>
            <article className="tab-container">
                {routes()}
            </article>
            <footer className={'footer-container'}>
                <Footer/>
            </footer>
        </div>
    );
}


export default App;
