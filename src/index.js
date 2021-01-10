import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/main.scss'

import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from "react-redux";
import {store} from "./redux/store";
import {route} from "./routes";

import Layout from "./Components/layout/layout";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Layout>
                    {route()}
                </Layout>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
