import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import channelsPage from "./Components/filmsPage/channelsPage";
import FilmsPage from "./Components/channelsPage/filmsPage";
import DescriptionPage from "./Components/descriptionPage/descriptionPage";


//  export const routes = () => {
//
//     return (
//         <Switch>
//             <Route path='/films' exact component={FilmsPage}/>
//             <Route path='/channels' exact component={channelsPage}/>
//             {/*<Route path='/description' exact component={DescriptionPage}/>*/}
//             <Redirect to='/films'/>
//         </Switch>
//     )
// }

export const route = () => {

    return (
        <Switch>
            <Route path='/films' exact component={FilmsPage}/>
            <Route path='/channels' exact component={channelsPage}/>
            <Route path='/description' exact component={DescriptionPage}/>
            <Redirect to='/films'/>
        </Switch>
    )


}