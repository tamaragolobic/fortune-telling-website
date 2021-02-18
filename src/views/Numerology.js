import React from 'react';
import Contact from "./Contact";

const numerology = () => {
    const horoscope = [
        {
            title: 'ZGODOVINA NUMEROLOGIJE',
            text: 'Začetek numerologije sega več tisoč let v preteklost. Obstajajo zgodovinski zapisi iz katerih lahko sklepamo, da so se s števili in numerologijo ukvarjali že Babilonci, Egipčani, stari Kitajci, Grki in Rimljani. K razvoju sodobne numerologije je veliko prispeval Pitagora, ki je bil eden najbolj znanih filozofov svojega časa, ki se je ukvarjal z matematiko, filozofijo in glasbo. Ker je numerologijo postavil na novo raven, Pitagoro pogosto smatramo za očeta numerologije. Numerologija je v nekaterih religijah vera v mistično oziroma ezoterično povezavo med števili in objekti ali živimi bitji.\n' +
                'Pitagora nedvomno velja za očeta moderne numerologije. Iz njegove numerološke šole je izšla pitagorejska numerology, ki je danes v svetu najbolj razširjena, v kateri posameznim črkam odgovarjajo števila po abecednem vrstnem redu: A=1, B=2 do 9 itd.\n' +
                'Drugi danes najbolj priljubljen sistem je kaldejska numerology, ki naj bi imela korenine v stari Babiloniji. V njej ima vsaka črka odgovarjajočo številčno vrednost, vendar ne po vrstnem redu v abecedi, temveč glede na zvočne vibracije črk.',
            picture: 'https://cdn.pixabay.com/photo/2012/03/01/01/40/numbers-20319__340.jpg'
        },
        {
            title: 'POMEN NUMEROLOGIJE',
            text: 'Znanje je skrito v številkah in numerology je veda o številkah. Vsaka črka ima svojo številčno vrednost, ki zagotavlja povezano kozmično vibracijo. Vsota števil v vašem rojstnem datumu in vsota vrednosti, ki izhajajo iz črk v imenu, zagotovi medsebojna razmerja vibracij. Te številke nam povedo veliko o značaju, namenu v življenju, kaj nas motivira in katere talente lahko v življenju izrazimo. Modrost skrita v številih, nas lahko vodi in usmerja v vsakodnevnem življenju.',
            picture: 'https://cdn.pixabay.com/photo/2012/04/24/21/19/numbers-40904__340.png'
        },
        {
            title: '',
            text: 'V zadnjih desetletjih se vedno pogosteje obujajo znanja in veščine starih ljudstev, ki so živela veliko pred Kristusovim rojstvom. Obstajajo določena pravila življenja, ki so stara kot sam planet, na katerem živimo. Ta spoznanja pa se kljub vsemu napredku, ki smo mu priča, ne spreminjajo in imajo svoje zakonitosti, kot jih ima tudi zemlja, na kateri vladajo določeni nespremenjeni naravni pojavi. Jutru sledi dan, ki se prevesi v večer, dokler ne nastopi noč. Staro pravilo, ki se z razvojem ni spremenilo. Vsi poznamo ta dejstva in se ravnamo v skladu z njimi. Podobno si določena obdobja sledijo v našem življenju. Tukaj se pokaže korist starodavnega znanja, kakršno je numerology. Le-ta nas med drugim uči, kako si sledijo posamezna obdobja na naši življenjski poti. Kdaj se za nas začne “jutro”, ko smo polni energije in z lahkoto rešujemo težave ter se soočamo z novimi izzivi, kdaj je za nas “dan”, ko nam sije sonce sreče in nam korist prinaša čim večja aktivnost, in kdaj se začne obdobje "noči", ko je najbolj pametno, da se ne lotevamo nobenih novih projektov, ker se zapletemo v izgube in velike težave? Numerologija je pripomoček, ki nam pomaga pametneje izbirati v danih možnostih. Te možnosti oz. okoliščine so dejstva, na katera ne moremo vplivati. Numerologija nas že vnaprej posvari, da se nam ta dejstva bližajo, zato nismo nepripravljeni in se lažje soočimo tudi z neprijetnimi okoliščinami. Ko nas vremenoslovci posvarijo, da bodo nevihte in padavine, ostanemo doma ali se primerno oblečemo in vzamemo dežnik. Numerologija nam torej svetuje, katera izbira je za nas v danem trenutku najboljša.'
        }
    ];

    return (
        <div className='row padding'>
            <div className='col-md-8'>
                {
                    horoscope.map((element, index) => {
                        return (
                            <div key={`numerology${index}`}>
                                {
                                    element.picture ?
                                        <img src={element.picture}
                                             alt='image'
                                        />
                                        : null
                                }
                                <h5>
                                    {element.title}
                                </h5>
                                <p>
                                    {element.text}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='col-md-4 side'>
                <Contact/>
            </div>
        </div>
    );
}

export default numerology;