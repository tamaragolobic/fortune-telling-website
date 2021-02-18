import React from 'react';
import Contact from "./Contact";

const info = () => {
    const information = [
        {
            title: 'Kdo in kaj sem?',
            text: 'Da imam dobro intuicijo sem se zavedala zelo hitro, ampak kot vsi mi, je nikakor nisem želela slišati. V življenju sem imela kar nekaj globokih padcev in seveda potem tudi še močnejših prebojev nazaj v pozitivni svet. Moja stara mama (sedaj že pokojna) je bila zelo obiskana šlogarca in mi je vedno govorila, da bom nadaljevala njeno pot in zadnja leta spoznavam, da je imela prav. Zadnjih 15 let se ukvarjam samo z vedeževanjem. Vmes sem imela kratek premor, ampak to sem potrebovala, da sem lahko delala na sebi in še dodatno izostrila znanje in intuicijo.\n' +
                '                Lahko bi tukaj naštevala vse diplome, pridobljene v tem času, ampak sama sem mnenja, da papir prenese vse, meni osebno pa vsa priznanja in diplome izobešene v pisarni ne pomenijo nič.\n' +
                '                Vedno si vzamem čas za globoki vpogled osebe, ki me sprašuje, saj se zavedam svoje odgovornosti pri delu.',
            picture: 'https://cdn.pixabay.com/photo/2017/10/09/13/24/priest-2833384__340.jpg'
        },
        {
            title: '',
            text: 'O sebi ne govorim veliko in predvsem ne pogosto. Moji najbližji in meni najdražji me poznajo kot osebo, ki zna prisluhniti, ki sliši in ki svetuje samo, ko je k temu pozvana.'
        },
        {
            title: '',
            text: 'Življenje me je preizkušalo in izoblikovalo. Za vse kar sem doživela sem neskončno hvaležna, saj vem, da brez vsega tega danes ne bi bila tu, kjer sem... preprosto ne bi bila jaz.'
        },
        {
            title: '',
            text: 'Moja zgodba je pravzaprav vaša zgodba. Vedno je tako. Poznam vas. Z vsem, s čimer se trenutno ubadate, sem se nekoč ubadala sama. Pa naj bo to pomanjkanje samozavesti, pomanjkanje zaupanja vase in v svoje védenje, ali pa kar nepovezanost s sabo in predvsem nesprejemanje same sebe - veliko področij mojega življenja, ki niso delovala, kot sem si želela. Prav nič drugačna nisem od vas. Morda sem le kakšen korak bližje sestavljanki, ki se ji reče polno življenje. Vsi si želimo tja, vsi smo na poti tja. In kar je še pomembneje, vsi zmoremo. Vsi imamo že od rojstva v sebi vse naravne danosti, ki jih za to potrebujemo, le naučiti se moramo kako jih uporabiti v svoje najvišje dobro. Z vami bom delala korake in vam skušala poiskati in pokazati zlasti tisti del poti, ki vam bo prinesel polnost življenja na vseh nivojih.'
        },
        {
            title: '',
            text: 'Z števili sem se poigravala že v otroštvu, danes pa mi je prav zaradi navedenega tako zelo blizu numerologija. Vem namreč, da lahko z njeno pomočjo spoznamo sebe in svojo življenjsko pot, okoliščine, ki vplivajo na naše življenje, možnosti in ovire, ki nas čakajo v posameznih življenjskih obdobjih, področja na katerih nas čakajo največji uspehi ter tista, na katerih nas čakajo največje ovire in preizkušnje. Vedenje, da so nam okoliščine in zunanji vplivi usojeni in da je naš odziv nanje izključno naša svobodna volja, ki lahko bistveno vpliva na kvaliteto našega življenja, pa je tisto zaradi česar numerologijo tako zelo spoštujem (“Life is like a game of cards. The hand that is dealt you is determinism; the way you play it is free will.” Jawaharlal Nehru ). In ker je odločitve, kljub takšnim spoznanjem, včasih vendarle težko sprejeti (saj se praviloma bojimo posledic), pri svojem delu in analizah že vrsto let uporabljam karte. Karte (ciganske, tarot, angelske...) so vedno pomemben pripomoček vsake vedeževalke in za vse oblike vedeževanj. Ker se poleg numerologije ukvarjam tudi z vedeževanjem, kot vedeževalka s pomočjo kart vpogledam v trenutno situacijo na način, ki izpraševalcu omogoča lažji sprejem odločitve.'
        },
        {
            title: 'Moj cilj?',
            text: 'Največ, kar mi pomeni pri delu šloganja in vedeževanja, je to, da me slišite ampak RESNIČNO SLIŠITE, ne da me poslušate ampak res slišite v pravem pomenu besede, ker le tako lahko preženete temo in stopite v svetlejši jutri. To pomeni, da vam pomagam najti rešitev, ne da vas pustim z kratkim odgovorom ja ali  ne…. in potem postanete zbegani, ne da bi vedeli kako delovati oziroma živeti naprej.',
            picture: 'https://cdn.pixabay.com/photo/2017/10/25/00/50/third-eye-2886688__340.jpg'
        },
        {
            title: '',
            text: 'Dovolite mi, da Vam z vsem svojim znanjem, videnjem in energijami pokažem pot, saj si Vi to zaslužite.'
        },
        {
            title: '',
            text: 'Delam z vsem svojim srcem in svetlo dušno energijo. Sem energija, tako kot mi vsi.'
        },
        {
            title: '',
            text: 'Vabljeni k ogledu še ostalih tem, ki sem vam jih pripravila in seveda da me pokličete, ko potrebujete vpogled in nasvet za vaš boljši in svetlejši jutri.'
        }
    ];

    return (
        <div className='row padding'>
            <div className='col-md-8'>
                {
                    information.map((element, index) => {
                        return (
                            <div key={`info${index}`}>
                                {
                                    element.picture ?
                                        <img
                                            src={element.picture}
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

export default info;