import React from 'react';
import '../css/app.css';

const navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-md navbar-dark"
            id='nav'
        >
            <a
                className="navbar-brand"
            >
                Zodiak
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/"
                        >
                            Domov
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/info"
                        >
                            O Nas
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Horoskop
                        </a>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="/horoskop"
                                >
                                    Splošni
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="/tedenski_horoskop"
                                >
                                    Tedenski
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="/mesecni_horoskop"
                                >
                                    Mesečni
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/numerologija"
                        >
                            Numerologija
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/kontakt"
                        >
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;