import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";


const Layout = (props) => {

    return (
        <>
            <Header/>
            <div className={'main-container'}>
                {props.children}

            </div>
            <Footer/>

        </>
    );
};

export default Layout;