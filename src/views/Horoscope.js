import React from 'react';

const Horoscope = (props) => {
    const horoscope = [
        {
            sign: 'kozorog',
            date: '22.december - 20.januar',
            horoscopes: [
                {
                    title: '',
                    text: 'Za kozoroga je moč značaja vse: prepričani ste, da bi morali biti vsi močni in se znati spoprijeti z življenjem. Ne dajete sodb in le redkokdaj poveste svoje mnenje. Radi imate kvaliteto in raje nimate če ne morete najboljšega. Zmeraj bi bili radi koristni in ustrežljivi, vaš nasvet je zmeraj dober in ustrezen. Glavo imate na pravem mestu – v ljubezni in tudi v vseh drugih rečeh. Ste skrbni, razumni, pridni in bistri. Vsaj na zunaj, kar lahko vidimo. Kaj pa se skriva v globini? Temne skrivnosti? Ne – pač pa imate tudi občutljivo plat, ki jo le redkokdaj pokažete. Ta občutljivost vas včasih nese. Ste človek razuma – pameti, logični in razsodni – včasih pa pride na plano tudi srce. Veste kaj morate storiti, nekaj kar je pametno in pravilno, potem pa začnete mencati, kakor da se ne morete odločiti, kar pa ni res, saj se zmeraj znate odločiti. Ena izmed kozorogovih najbolj prikupnih lastnosti je nenavadni smisel za humor. Nenadoma lahko izbruhnete, celo takrat, ko so vsi najbolj resni in uradni. Vase prepričani podjetni kozorogi, so navadno zelo disciplinirani, vendar lahko vso disciplino zavržejo, če jim zmanjka samozavesti. Imate se v oblasti, ste razumni, ljudje najdejo v vas oporo. V nesreči ali kaosu gotovo mirno delite hrano ali gradite zavetišče – in ste vsem na voljo. Vaša moč je v moči misli, nikoli vas ne zgrabi panika.'
                },
                {
                    title: 'PARTNERSTVO',
                    text: 'Kozoroge je groza ob misli, da bi morali začeti družinsko življenje. V kakšni podrtiji in zato dostikrat odlašajo s čustvnimi razmerji, dokler nimajo trdno zagotovljenega poklica – kar se včasih zgodi precej pozno. Sposobni so se poročiti zaradi denarja ali družbenega položaja. Njihova čustvena raven ni kdove kako visoka. Težko izražajo pristna čustva, posebno v intimnih odnosih. Tega se morajo zavedati in sprejeti dejstvo, da njihov partner dostikrat potrebuje zagotovilo ljubezni. Posebno če je kozorog zelo zaposlen in veliko zdoma.'
                },
                {
                    title: 'LJUBEZEN',
                    text: 'Ljubezen je za vas resna zadeva in ne hec. Ne rečete »ljubim te« če res ne ljubite. Niste velik zapeljivec in osvajalec, kot ljubimec pa ste na zelo dobrem glasu. Ne začenjate sami, ampak počakate, da drugi začne. Niste posebej romantični, vendar ste neverjetno pozorni do partnerjevih potreb in občutij. V ljubezenskem odnosu ste prijazni, zaščitniški in ljubeči. Ne marate, da vas partner sprašuje o čustvih, ker čustev ne marate kazati. Ne marate, da se partner z vami samo igra, raje imate dobro, stalno in trdno zvezo, kakor več bežnih partnerjev. Za vas je seks ritual, način kako s telesnim stikom potrdiš ljubezen in predanost. Najbrž se vam samo pri seksu kdo sploh lahko približa. Samo v spalnici se lahko sprostite. Ste dober, domiseln ljubimec, z neskončno energije in vztrajnosti. Glede spolnosti ste zelo odprti in to ljudi zmeraj preseneti. Ker ste drugače tako zaprti. Skrbno pretehtate možnosti, preden se resno vežete. Ko pa se, se za vse življenje.'
                },
                {
                    title: 'SLABOSTI',
                    text: 'Ne marate hudih časov – ker to pomeni, da niste dobro načrtovali, vi pa najraje načrtujete vse do najmanjše podrobnosti. Ne marate presenečenje, nepričakovanih povabil, nepričakovanih gostov, nereda, direndaja, nemarnih ljudi, ne marate biti med štirimi stenami, ne marate božiča, rojstnih dni in drugih obletnic. Ne marate kupovati daril, vendar jih znate, če se le zavzamete. Ko potrebujete nekoga ob sebi, vam ni všeč, da morate čakati, da pride.'
                },
                {
                    title: 'ŠIBKI DELI TELESA',
                    text: 'Okostje, hrbtenica, kolena, kite, dlesni, zobje, koža, vranica, oko.'
                },
                {
                    title: 'UJEMANJE Z DRUGIMI ZNAKI',
                    text: 'Mogoče ravno kozoroga ? mogoče res. Čeprav vama manjka strasti in ognja, zato bi bilo malo dolgočasno. Bika? Bi tudi šlo, ker imata oba rada staromodno ugodje in varnost, vendar spet ne bi bilo pravega ognja – potrebovali bi nekoga, ki bi pritegnil vašo čustveno pozornost in vas odtegnil od bolj praktične plati življenja. Mogoče bi bila dobra devica, ker bi vas gnetla in obtesala – če bi ji seveda pustili. Vendar ste najbrž preveč trmasti.',
                },
                {
                    title: '',
                    text: 'Kaj pa vodna znamenja? Rak bi vas ljubil in ljubkoval. Škorpijon bi vas zmamil v pokvarjenost in temo – lahko bi bilo zanimivo. Ribi? Saj sploh ne veste o čem govori kajne?'
                },
                {
                    title: '',
                    text: 'Zrak? Dvojčki so preveč lahkotni in neresni, tehtnica preveč sladka in salonska. Vodnar pa preveč čuden in čudovit.'
                },
                {
                    title: '',
                    text: 'Lahko bi se posrečilo ognjenim znamenjem, da bi vaše skrivne straste pribrbotale na površino. Oven bi vas podžgal. Lev bi vam pomagal zažgati mostove za sabo (oprostite, da vas strašimo). Strelec pa bi vam pomagal zapraviti denar, ki vas peče v roke (oprostite, da smo vas spet prestrašili).'
                },
                {
                    title: 'IDEALNA KOMBINACIJA',
                    text: 'Sami izberite, vendar pametno in skrbno – saj vemo kako temeljito si preberete vsako pogodbo, še posebej poročno. Poskusite z bikom, z njim ne bo prehuda – ampak če se le da, z Luno v ovnu, da bo prinesel s sabo malo strasti.'
                }
            ]
        },
        {
            sign: 'vodnar',
            date: '21.januar - 20.februar',
            horoscopes: [
                {
                    title: '',
                    text: 'Sanjač ste, všeč so vam romantične reči, mavrice in čarovnije, enorogi in palčki. Notranjost skrivate in neradi pokažete, kdo pravzaprav ste. Kakor da svetu kažete samo predstavo. Vaš pravi jaz, pa po predstavi izgine. Ne da se vas kategorizirati in popredalčkati. Čeprav ste znani po svoji izjemni prijaznosti, v mnogih pogledih ljubijo zasebnost in ne marajo, da kdo vdira vanjo. Njihova prirojena prijaznost, je povezana z resnično pripravljenostjo pomagati. Vodnarji ste izvirni in idealistični in čim bolj izraziti sta ti dve lastnosti, tem več zadovoljstva jim prinašata. Vodnar je zračno znamenje, zato ti ljudje potrebujejo zrak, tako v telesnem kot v prenesenem smislu. Vodnarji, ki ostanejo veseli in optimistični, celo takrat, kadar življenje postane težko, redko zgubijo upanje. Njihova prirojena človečnost, pa jih vedno spomni na to, da vsi v življenju nimajo toliko sreče kot oni. Ste nepredvidljivi, presenetljivi, neortodoksni, nekonvencionalni, nedoumljivi in zelo zelo bizarni. Karkoli že pričakujemo od vas, zmeraj boste naredili ravno obratno. Pozorni ste na podrobnosti, pa vendar si lahko pozabite obuti nogavice. Prijateljski ste in družabni, vendar vas nekaj zadržuje, da se nikoli ne predate z vsem srcem in dušo. Kakor, da ste zmeraj korak stran ali dlje, da lahko presojate ali ocenjujete.'
                },
                {
                    title: 'PARTNERSTVO',
                    text: 'Kozoroge je groza ob misli, da bi morali začeti družinsko življenje. V kakšni podrtiji in zato dostikrat odlašajo s čustvnimi razmerji, dokler nimajo trdno zagotovljenega poklica – kar se včasih zgodi precej pozno. Sposobni so se poročiti zaradi denarja ali družbenega položaja. Njihova čustvena raven ni kdove kako visoka. Težko izražajo pristna čustva, posebno v intimnih odnosih. Tega se morajo zavedati in sprejeti dejstvo, da njihov partner dostikrat potrebuje zagotovilo ljubezni. Posebno če je kozorog zelo zaposlen in veliko zdoma.'
                },
                {
                    title: 'LJUBEZEN',
                    text: 'Ljubezen je za vas resna zadeva in ne hec. Ne rečete »ljubim te« če res ne ljubite. Niste velik zapeljivec in osvajalec, kot ljubimec pa ste na zelo dobrem glasu. Ne začenjate sami, ampak počakate, da drugi začne. Niste posebej romantični, vendar ste neverjetno pozorni do partnerjevih potreb in občutij. V ljubezenskem odnosu ste prijazni, zaščitniški in ljubeči. Ne marate, da vas partner sprašuje o čustvih, ker čustev ne marate kazati. Ne marate, da se partner z vami samo igra, raje imate dobro, stalno in trdno zvezo, kakor več bežnih partnerjev. Za vas je seks ritual, način kako s telesnim stikom potrdiš ljubezen in predanost. Najbrž se vam samo pri seksu kdo sploh lahko približa. Samo v spalnici se lahko sprostite. Ste dober, domiseln ljubimec, z neskončno energije in vztrajnosti. Glede spolnosti ste zelo odprti in to ljudi zmeraj preseneti. Ker ste drugače tako zaprti. Skrbno pretehtate možnosti, preden se resno vežete. Ko pa se, se za vse življenje.'
                },
                {
                    title: 'SLABOSTI',
                    text: 'Ne marate hudih časov – ker to pomeni, da niste dobro načrtovali, vi pa najraje načrtujete vse do najmanjše podrobnosti. Ne marate presenečenje, nepričakovanih povabil, nepričakovanih gostov, nereda, direndaja, nemarnih ljudi, ne marate biti med štirimi stenami, ne marate božiča, rojstnih dni in drugih obletnic. Ne marate kupovati daril, vendar jih znate, če se le zavzamete. Ko potrebujete nekoga ob sebi, vam ni všeč, da morate čakati, da pride.'
                },
                {
                    title: 'ŠIBKI DELI TELESA',
                    text: 'Okostje, hrbtenica, kolena, kite, dlesni, zobje, koža, vranica, oko.'
                },
                {
                    title: 'UJEMANJE Z DRUGIMI ZNAKI',
                    text: 'Mogoče ravno kozoroga ? mogoče res. Čeprav vama manjka strasti in ognja, zato bi bilo malo dolgočasno. Bika? Bi tudi šlo, ker imata oba rada staromodno ugodje in varnost, vendar spet ne bi bilo pravega ognja – potrebovali bi nekoga, ki bi pritegnil vašo čustveno pozornost in vas odtegnil od bolj praktične plati življenja. Mogoče bi bila dobra devica, ker bi vas gnetla in obtesala – če bi ji seveda pustili. Vendar ste najbrž preveč trmasti.',
                },
                {
                    title: '',
                    text: 'Kaj pa vodna znamenja? Rak bi vas ljubil in ljubkoval. Škorpijon bi vas zmamil v pokvarjenost in temo – lahko bi bilo zanimivo. Ribi? Saj sploh ne veste o čem govori kajne?'
                },
                {
                    title: '',
                    text: 'Zrak? Dvojčki so preveč lahkotni in neresni, tehtnica preveč sladka in salonska. Vodnar pa preveč čuden in čudovit.'
                },
                {
                    title: '',
                    text: 'Lahko bi se posrečilo ognjenim znamenjem, da bi vaše skrivne straste pribrbotale na površino. Oven bi vas podžgal. Lev bi vam pomagal zažgati mostove za sabo (oprostite, da vas strašimo). Strelec pa bi vam pomagal zapraviti denar, ki vas peče v roke (oprostite, da smo vas spet prestrašili).'
                },
                {
                    title: 'IDEALNA KOMBINACIJA',
                    text: 'Sami izberite, vendar pametno in skrbno – saj vemo kako temeljito si preberete vsako pogodbo, še posebej poročno. Poskusite z bikom, z njim ne bo prehuda – ampak če se le da, z Luno v ovnu, da bo prinesel s sabo malo strasti.'
                }
            ]
        },
    ];

    return (
        <div className='fullScreenLayout'>
            {
                horoscope.map((element, index) => {
                    return (
                        <div className=' horoskop'
                             key={`horoscopes${index}`}
                        >
                            {
                                props.match.params.sign === element.sign ?
                                    <div>
                                        <h1>
                                            {element.sign.toUpperCase()}
                                        </h1>
                                        {element.date}
                                        {
                                            props.match.params.sign === element.sign ?
                                                element.horoscopes.map((element, index) => {
                                                    return <div key={`horoscopess${index}`}>
                                                        {element.title}
                                                        <p>
                                                            {element.text}
                                                        </p>
                                                    </div>
                                                })
                                                : null
                                        }
                                    </div>
                                    : null
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Horoscope;