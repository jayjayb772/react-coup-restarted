import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.JOINGAME}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.READYUP}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.PLAYING}>Account</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;