import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="wrapper topmenu">
            <div id="includedContent">
                <div className="insidewrapper">
                    <nav aria-labelledby="block-janssenspharmaceuticaprize-main-menu-menu" id="block-janssenspharmaceuticaprize-main-menu">
                        <ul>
                            <li>
                                <Link to="/" className="is-active">Home</Link>
                            </li>
                            <li>
                                <Link to="/history" className="is-active">History</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default Nav;