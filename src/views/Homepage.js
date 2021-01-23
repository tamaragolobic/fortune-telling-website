import React from 'react';
import Contact from './Contact';

const home = () => {
    const horoskop = [
        {
            title: '18.1 - 24.1',
            text: 'Spoznaj kaj te čaka v tekočem tednu',
            link: '/tedenski_horoskop'
        },
        {
            title: 'Januar 2021',
            text: 'Spoznaj kaj te čaka v tekočem mesecu',
            link: '/mesecni_horoskop'
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
                                <div className='col-md-5 horoskop'
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
                <div>
                    <Contact/>
                </div>
            </div>
        </div>
    );
}

export default home;