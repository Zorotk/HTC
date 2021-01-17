import React from 'react'
import './App.scss';
import Layout from "./Components/layout/layout";
import {route} from "./routes";


const App = () => {
    return (
        <div className={'layout-container'}>
            <Layout>
                {route()}
            </Layout>
        </div>
    );
}
export default App;
