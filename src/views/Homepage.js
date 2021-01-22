import React from 'react';
import Kontakt from './Kontakt';

const home = () => {
    const horoskop = [
        {
            naslov: '18.1 - 24.1',
            besedilo: 'Spoznaj kaj te čaka v tekočem tednu',
            link: '/tedenski_horoskop'
        },
        {
            naslov: 'Januar 2021',
            besedilo: 'Spoznaj kaj te čaka v tekočem mesecu',
            link: '/mesecni_horoskop'
        },
        {
            naslov: 'Misel tedna',
            besedilo: 'Ključ do uspeha je osredotočiti se na stvari ki si jih želimo in ne na tiste, ki se jih bojimo.'
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
                        horoskop.map((element) => {
                            return (
                                <div className='col-md-5 horoskop'>
                                    <h3>
                                        {element.naslov}
                                    </h3>
                                    <div>
                                        {element.besedilo}
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
                    <Kontakt/>
                </div>
            </div>
        </div>
    );
}

export default home;