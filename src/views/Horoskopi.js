import React from 'react';
import {Icon} from '@iconify/react';
import zodiacCapricorn from '@iconify-icons/mdi/zodiac-capricorn';
import zodiacAquarius from '@iconify-icons/mdi/zodiac-aquarius';
import zodiacPisces from '@iconify-icons/mdi/zodiac-pisces';
import zodiacAries from '@iconify-icons/mdi/zodiac-aries';
import zodiacTaurus from '@iconify-icons/mdi/zodiac-taurus';
import zodiacGemini from '@iconify-icons/mdi/zodiac-gemini';
import zodiacCancer from '@iconify-icons/mdi/zodiac-cancer';
import zodiacLeo from '@iconify-icons/mdi/zodiac-leo';
import zodiacVirgo from '@iconify-icons/mdi/zodiac-virgo';
import zodiacLibra from '@iconify-icons/mdi/zodiac-libra';
import zodiacScorpio from '@iconify-icons/mdi/zodiac-scorpio';
import zodiacSagittarius from '@iconify-icons/mdi/zodiac-sagittarius';
import {Link} from "react-router-dom";

const MAX_LENGTH = 250;

const Horoskopi = () => {
    const horoskop = [
        {
            sign: 'kozorog',
            horoscope: 'Za kozoroga je moč značaja vse: prepričani ste, da bi morali biti vsi močni in se znati spoprijeti z življenjem. Ne dajete sodb in le redkokdaj poveste svoje mnenje. Radi imate kvaliteto in raje nimate če ne morete najboljšega. Zmeraj bi bili radi koristni in ustrežljivi, vaš nasvet je zmeraj dober in ustrezen.',
            icon: zodiacCapricorn,
            date: '22.december - 20.januar'
        },
        {
            sign: 'vodnar',
            horoscope: 'Sanjač ste, všeč so vam romantične reči, mavrice in čarovnije, enorogi in palčki. Notranjost skrivate in neradi pokažete, kdo pravzaprav ste. Kakor da svetu kažete samo predstavo. Vaš pravi jaz, pa po predstavi izgine. Ne da se vas kategorizirati in popredalčkati.',
            icon: zodiacAquarius,
            date: '21.januar - 18.februar'
        },
        {
            sign: 'ribi',
            horoscope: 'Življenje kot ga poznate, se bo odvijalo izjemno intenzivno. Vse to vam bo dajalo energijo, da sledite svojim sanjam. Vzemite si čas, da si sestavite seznam svojih želja. Ne zadržujte se – ciljajte najvišje. Seme, ki ga boste posejali sedaj, bo obrodilo do konca marca. Edina konstanta v vašem življenju bo v tem času sprememba.',
            icon: zodiacPisces,
            date: '19.februar - 20.marec'
        },
        {
            sign: 'oven',
            horoscope: 'Kam se zatečete po mir? Danes boste opomnjeni na pomembnost tega, da imate svoj prostor za takšen namen.  Imelo vas bo, da bi šli v tujino, na krepčilno potovanje. Če kdaj, potem ste sedaj pripravljeni razrešiti neko pomembno zadevo, na najboljši možni način. Če razmišljate o tem kako bi se umaknili iz neke situacije, potem boste sedaj vedeli katera strategija bi bila najboljša.',
            icon: zodiacAries,
            date: '21.marec - 20.april'
        },
        {
            sign: 'bik',
            horoscope: 'Pred vami so številne spremembe in izboljšave, tudi na poslovnem področju. Tokratne kozmične spremembe utegnejo od vas pričakovati potrebo po spremembi okolja in ljudi ob katerih se nahajate. Poleg tega boste prav sedaj z lahkoto našli najbolj primerne ljudi za sodelovanje.',
            icon: zodiacTaurus,
            date: '21.april - 21.maj'
        },
        {
            sign: 'dvojčka',
            horoscope: 'Razmislite o tem kako si želite, da bi v naslednjih šestih mesecih vplivali na svet? Čas je, da skušate stvari vizualizirati, saj vam bo icon povedala veliko več kot tisoč besed. Če je mogoče, si naredite tablo, na katero pritrdite fotografije, ki najbolje opisujejo vaše želje za prihodnost.',
            icon: zodiacGemini,
            date: '22.maj - 21.junij'
        },
        {
            sign: 'rak',
            horoscope: 'Načrtujte potovanja za katera potrebujete potne liste, morda celo na Bali. Tokratna zvezdna postavitev vam utegne dati pogum za začetek nekega novega posla, za širjenje obstoječega ali pa za začeteke nekega povsem neodvisnega projekta. Nekateri Raki se boste morda morali celo preseliti samo zato, da bi izpeljali naslednje poglavje svojega življenja.',
            icon: zodiacCancer,
            date: '22.junij - 22.julij'
        },
        {
            sign: 'lev',
            horoscope: 'Tokrat bo kozmos v vas zbudil pomladno razpoloženje. Če se niste počutili najbolj seksi, potem se to utegne sedaj spremeniti. Samski utegnete začutiti privlačnost do nekoga, ki vam je blizu.',
            icon: zodiacLeo,
            date: '23.julij - 23.avgust'
        },
        {
            sign: 'devica',
            horoscope: 'Revolucija v zvezi. Pred vami je šestmesečno obdobje namenjeno vašemu partnerstvu, v katerem lahko pride tudi do nekaj pomembnih sprememb. Status vašega razmerja se utegne hitro spremeniti iz “občasna ljubimca” v tista “poročena”.  Če niste bili zadovoljni s sedanjim položajem, potem je čas za spremembo.',
            icon: zodiacVirgo,
            date: '24.avgust - 22.september'
        },
        {
            sign: 'tehtnica',
            horoscope: 'Že mogoče, da so še zimske temperature, vendar vi boste že pripravljeni na pomlad. To je začetek šestmesečnega cikla, zato poglejte naprej in pozabite na preteklost. Če ste kakšne bolečine ignorirali, potem je sedaj čas, da jih opazite. Ne zdravite sami sebe, tako boste veliko hitreje zdravi. Tudi pri delu utegnejo nastati številne spremembe.',
            icon: zodiacLibra,
            date: '23.september - 23.oktober'
        },
        {
            sign: 'škorpijon',
            horoscope: 'Kjer je dim je tudi ogenj. Pred vami je vzdušje z veliko romantike. V vašem življenju se utegne pojaviti neka nova oseba. Prav tako vas čaka dramatična novica (morda celo o nosečnosti). Čeprav bo to morda nekoliko šokantno, pa bo vaš odziv na to veliko pomembnejši. Ostanite mirni. Ta sprememba je nujna.',
            icon: zodiacScorpio,
            date: '24.oktober - 22.november'
        },
        {
            sign: 'strelec',
            horoscope: 'Ves teden ste trdo delali. Sedaj je čas, da se ponovno povežete s prijatelji in doživite vsaj nekaj potrebne spremembe. Do konca marca boste polni energije, zato to izkoristite. Nek projekt, ki ste mu namenjali veliko svojega časa in energije, bo katapultiran v stratosfero uspeha. Razmislite o prednostih in slabostih, preden naredite kakšen večji korak. Poskrbite tudi za obdobja miru in počitka. Potrebovali boste čustva, zato naj vam ne bo nerodno, da se po pomoč in nasvet zatečete k ženski osebi v vašem življenju.',
            icon: zodiacSagittarius,
            date: '23.november - 21.december'
        }
    ];

    return (
        <div className='horoskop-parent flex-wrap'>
            {
                horoskop.map((element) => {
                    return (
                        <div className="card col-md-5 col-xl-3 horoskop">
                            <div className="card-body">
                                <Icon
                                    icon={element.icon}
                                    className='icon'
                                />
                                <h6 className="sign">
                                    {element.sign.toUpperCase()}
                                </h6>
                                <h4>
                                    {element.date}
                                </h4>
                                {
                                    element.horoscope.length > MAX_LENGTH ?
                                        <div>
                                            <div className="horoscope">
                                                {element.horoscope.substring(0, MAX_LENGTH)}
                                            </div>
                                            <Link to={'/horoskop/' + element.sign}>
                                                Preberi več
                                            </Link>
                                        </div>
                                        : <div className="horoscope">
                                            {element.horoscope}
                                        </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Horoskopi;