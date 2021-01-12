import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import channelsPage from "./Components/films/channelsPage";
import FilmsPage from "./Components/channelsPage/filmsPage";
import DescriptionPage from "./Components/descriptionPage/descriptionPage";


export const route = () => {

    return (
        <Switch>
            <Route path='/films' exact component={FilmsPage}/>
            <Route path='/channels' exact component={channelsPage}/>
            <Route path='/description' component={DescriptionPage}/>
            <Redirect to='/films'/>
        </Switch>
    )


}