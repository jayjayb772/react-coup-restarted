import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
} from "react-router-dom";

import * as ROUTES from '../../constants/routes';
import HomePage from "../Pages/HomePage/HomePage";
import CreatePage from "../Pages/CreatePage/CreatePage";
import ReadyUpPage from "../Pages/ReadyUpPage/ReadyUpPage";

const ReactRouter = () => (
    <Router>
        <div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to={ROUTES.LANDING}>home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={ROUTES.JOINGAME}>join game</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={ROUTES.CREATEGAME}>create game</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={ROUTES.READYUP}>ready up</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={ROUTES.PLAYING}>playing</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            <Switch>
                <Route path={ROUTES.JOINGAME}>
                    <JoinGame />
                </Route>
                <Route path={ROUTES.CREATEGAME}>
                    <CreatePage />
                </Route>
                <Route path={ROUTES.READYUP}>
                    <ReadyUpPage />
                </Route>
                <Route path={ROUTES.PLAYING}>
                    <Playing />
                </Route>
                <Route path={ROUTES.LANDING}>
                    <HomePage />
                </Route>
            </Switch>
        </div>
    </Router>
);

function JoinGame(){
    return <h2>Join game</h2>;
}



function Playing(){
    return <h2>Playing</h2>;
}

export default ReactRouter;