import React from 'react';
import Contact from './Contact';
import Donations from './Donations';

const home = () => {
    const horoskop = [
        {
            title: '18.1 - 24.1',
            text: 'Spoznaj kaj te čaka v tekočem tednu, ali je to sreča ali nesreča. Mogoče boste spoznali svojo ljubezen ali pa dobili dobro poslovno ponudbo.',
            link: '/tedenski_horoskop'
        },
        {
            title: 'Januar 2021',
            text: 'Spoznaj kaj te čaka v tekočem mesecu, mogoče boljša služba, ali pa potovanje. Vse to in več lahko izvete na spodnji povezavi.',
            link: '/mesecni_horoskop/:year/:month'
        },
        {
            title: 'Misel tedna',
            text: 'Ključ do uspeha je osredotočiti se na stvari ki si jih želimo in ne na tiste, ki se jih bojimo.'
        }
    ];

    return (
        <div>
            <div className="jumbotron jumbotron-fluid home">
                <h1 id='homepage'>
                    Spoznaj sebe in svojo prihodnost
                </h1>
            </div>
            <div className='horoskop-parent'>
                <div className='col-6'>
                    {
                        horoskop.map((element, index) => {
                            return (
                                <div className='col-md-7 horoskop'
                                     key={`homepage${index}`}
                                >
                                    <h3>
                                        {element.title}
                                    </h3>
                                    <div>
                                        {element.text}
                                    </div>
                                    {
                                        element.link
                                            ? <a href={element.link}>
                                                Preberi več
                                            </a>
                                            : null
                                    }
                                    <p/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-4'>
                    <Contact/>
                    <Donations/>
                </div>
            </div>
        </div>
    );
}

export default home;