import React, {useEffect} from 'react';
import '../css/app.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    const elements = [
        {
            type: 'link',
            path: '/',
            text: 'Domov',
            id: 'home'
        },
        {
            type: 'link',
            path: '/info',
            text: 'O Nas',
            id: 'info'
        },
        {
            type: 'dropdown',
            text: 'Horoskop',
            id: 'horoscope navbarDropdownMenuLink',
            items: [
                {
                    path: '/horoskop/splosni',
                    text: 'Splošni',
                    id: 'general'
                },
                {
                    path: '/horoskop/tedenski',
                    text: 'Tedenski',
                    id: 'weekly'
                },
                {
                    path: '/horoskop/mesecni',
                    text: 'Mesečni',
                    id: 'monthly'
                }
            ]
        },
        {
            type: 'link',
            path: '/numerologija',
            text: 'Numerologija',
            id: 'numerology'
        },
        {
            type: 'link',
            path: '/pomen_imena',
            text: 'Pomen Imen',
            id: 'nameMeaning'
        },
        {
            type: 'link',
            path: '/kontakt',
            text: 'Kontakt',
            id: 'contact'
        }
    ];

    useEffect(() => {
        const route = window.location.pathname;
        const links = document.getElementsByClassName('active');

        for (let link of links) {
            link.classList.remove('active');
        }

        for (let element of elements) {
            if (route === element.path) {
                document.getElementById(element.id).classList.add('active');
            }
        }
    });

    return (
        <nav className="navbar navbar-expand-md navbar-dark"
             id='nav'
        >
            <a className="navbar-brand">
                Zodiak
            </a>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse"
                 id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        elements.map((element, navbarIndex) => {
                            return element.type === 'link'
                                ? (
                                    <li className="nav-item"
                                        key={`navbar${navbarIndex}`}
                                    >
                                        <Link className="nav-link"
                                              to={element.path}
                                              id={element.id}
                                        >
                                            {element.text}
                                        </Link>
                                    </li>
                                )
                                : (
                                    <li className="nav-item dropdown"
                                        key={`navbar${navbarIndex}`}
                                    >
                                        <a className="nav-link dropdown-toggle"
                                           href="#"
                                           id={element.id}
                                           data-toggle="dropdown"
                                           aria-haspopup="true"
                                           aria-expanded="false"
                                        >
                                            {element.text}
                                        </a>
                                        <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            {
                                                element.items.map((item, itemIndex) => {
                                                    return (
                                                        <li key={`navbar${navbarIndex}item${itemIndex}`}>
                                                            <Link className="dropdown-item"
                                                                  to={item.path}
                                                                  id={item.id}
                                                            >
                                                                {item.text}
                                                            </Link>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;