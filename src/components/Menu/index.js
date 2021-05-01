import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <ul>
        <li>
            <Link to="/">
                Home
            </Link>
        </li>
        <li>
            <Link to="/about-us">
                About
            </Link>
        </li>
    </ul>
);

Menu.displayName = 'Menu';

export default Menu;
