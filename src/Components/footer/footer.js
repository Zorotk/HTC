import React from 'react';
import './footer.scss'
import logo from "../../assets/img/htc_logo.svg";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-body">
                    <div className='footer-htcLogo'>
                        <img src={logo} alt="HTC логотип"/>
                    </div>
                    <div className='footer-contacts'>
                        <p className='footer-address'>
                            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                        </p>
                        <p className='footer-numbers'>+7 (3412) 93-88-61, 43-29-29</p>
                        <a href="https://htc-cs.ru/"
                           target='_blank'
                           className='footer-htcLink'
                           rel="noreferrer">
                            htc-cs.ru
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;