import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import channelsPage from "./Components/filmsPage/channelsPage";
import FilmsPage from "./Components/channelsPage/filmsPage";


const routes = () => {

    return (
        <Switch>
            <Route path='/films' exact component={FilmsPage}/>
            <Route path='/channels' exact component={channelsPage}/>
            <Redirect to='/films'/>
        </Switch>
    )


}

export default routes