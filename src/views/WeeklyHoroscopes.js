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

const WeeklyHoroscopes = () => {
    const horoscope = [{
        from: '18.1',
        to: '24.1',
        horoscope: [
            {
                sign: 'KOZOROG',
                horoscope: 'Potovanje se vedno začne s prvim korakom. Začnite raziskovati priložnosti lokalno in na kratke razdalje. V tem obdobju se bo razživelo tudi vaše družabno življenje.  V naslednjih šestih mesecih pa vse skupaj celo podvojilo. Utegnete se združiti z osebo, ki vam je blizu, pri nekem projektu, od katerega bosta imela oba profit. Bodite pozorni na ljudi okoli vas.',
                icon: zodiacCapricorn
            },
            {
                sign: 'VODNAR',
                horoscope: 'Pred vami je svež val obilja. Kot da tega pravzaprav niti niste pričakovali. Nekaj kar bi vi naredili tudi brez plačila, se vam utegne finančno obrestovati v naslednjih šestih mesecih. Če morate predelati vaše finance, potem boste sedaj to tudi predelali. Ne bodite trmasti. Zategnite pas in si poiščite delo za boljši zaslužek. Če morate, potem investirajte v svoje sposobnosti.',
                icon: zodiacAquarius
            },
            {
                sign: 'RIBI',
                horoscope: 'Življenje kot ga poznate, se bo odvijalo izjemno intenzivno. Vse to vam bo dajalo energijo, da sledite svojim sanjam. Vzemite si čas, da si sestavite seznam svojih želja. Ne zadržujte se – ciljajte najvišje. Seme, ki ga boste posejali sedaj, bo obrodilo do konca marca. Edina konstanta v vašem življenju bo v tem času sprememba.',
                icon: zodiacPisces
            },
            {
                sign: 'OVEN',
                horoscope: 'Kam se zatečete po mir? Danes boste opomnjeni na pomembnost tega, da imate svoj prostor za takšen namen.  Imelo vas bo, da bi šli v tujino, na krepčilno potovanje. Če kdaj, potem ste sedaj pripravljeni razrešiti neko pomembno zadevo, na najboljši možni način. Če razmišljate o tem kako bi se umaknili iz neke situacije, potem boste sedaj vedeli katera strategija bi bila najboljša.',
                icon: zodiacAries
            },
            {
                sign: 'BIK',
                horoscope: 'Pred vami so številne spremembe in izboljšave, tudi na poslovnem področju. Tokratne kozmične spremembe utegnejo od vas pričakovati potrebo po spremembi okolja in ljudi ob katerih se nahajate. Poleg tega boste prav sedaj z lahkoto našli najbolj primerne ljudi za sodelovanje.',
                icon: zodiacTaurus
            },
            {
                sign: 'DVOJČKA',
                horoscope: 'Razmislite o tem kako si želite, da bi v naslednjih šestih mesecih vplivali na svet? Čas je, da skušate stvari vizualizirati, saj vam bo icon povedala veliko več kot tisoč besed. Če je mogoče, si naredite tablo, na katero pritrdite fotografije, ki najbolje opisujejo vaše želje za prihodnost.',
                icon: zodiacGemini
            },
            {
                sign: 'RAK',
                horoscope: 'Načrtujte potovanja za katera potrebujete potne liste, morda celo na Bali. Tokratna zvezdna postavitev vam utegne dati pogum za začetek nekega novega posla, za širjenje obstoječega ali pa za začeteke nekega povsem neodvisnega projekta. Nekateri Raki se boste morda morali celo preseliti samo zato, da bi izpeljali naslednje poglavje svojega življenja.',
                icon: zodiacCancer
            },
            {
                sign: 'LEV',
                horoscope: 'Tokrat bo kozmos v vas zbudil pomladno razpoloženje. Če se niste počutili najbolj seksi, potem se to utegne sedaj spremeniti. Samski utegnete začutiti privlačnost do nekoga, ki vam je blizu.',
                icon: zodiacLeo
            },
            {
                sign: 'DEVICA',
                horoscope: 'Revolucija v zvezi. Pred vami je šestmesečno obdobje namenjeno vašemu partnerstvu, v katerem lahko pride tudi do nekaj pomembnih sprememb. Status vašega razmerja se utegne hitro spremeniti iz “občasna ljubimca” v tista “poročena”.  Če niste bili zadovoljni s sedanjim položajem, potem je čas za spremembo.',
                icon: zodiacVirgo
            },
            {
                sign: 'TEHTNICA',
                horoscope: 'Že mogoče, da so še zimske temperature, vendar vi boste že pripravljeni na pomlad. To je začetek šestmesečnega cikla, zato poglejte naprej in pozabite na preteklost. Če ste kakšne bolečine ignorirali, potem je sedaj čas, da jih opazite. Ne zdravite sami sebe, tako boste veliko hitreje zdravi. Tudi pri delu utegnejo nastati številne spremembe.',
                icon: zodiacLibra
            },
            {
                sign: 'ŠKORPIJON',
                horoscope: 'Kjer je dim je tudi ogenj. Pred vami je vzdušje z veliko romantike. V vašem življenju se utegne pojaviti neka nova oseba. Prav tako vas čaka dramatična novica (morda celo o nosečnosti). Čeprav bo to morda nekoliko šokantno, pa bo vaš odziv na to veliko pomembnejši. Ostanite mirni. Ta sprememba je nujna.',
                icon: zodiacScorpio
            },
            {
                sign: 'STRELEC',
                horoscope: 'Ves teden ste trdo delali. Sedaj je čas, da se ponovno povežete s prijatelji in doživite vsaj nekaj potrebne spremembe. Do konca marca boste polni energije, zato to izkoristite. Nek projekt, ki ste mu namenjali veliko svojega časa in energije, bo katapultiran v stratosfero uspeha. Razmislite o prednostih in slabostih, preden naredite kakšen večji korak. Poskrbite tudi za obdobja miru in počitka. Potrebovali boste čustva, zato naj vam ne bo nerodno, da se po pomoč in nasvet zatečete k ženski osebi v vašem življenju.',
                icon: zodiacSagittarius
            }]
    }];

    return (
        <div>
            {
                horoscope.map((week, index) => {
                    return (
                        <div className='horoskop-parent flex-wrap'
                             key={`weeklyhoroscope${index}`}
                        >
                            <div className="card col-12 horoskop">
                                <div className="card-body week">
                                    <h1>
                                        {week.from} - {week.to}
                                    </h1>
                                </div>
                            </div>
                            {
                                week.horoscope.map((element, index) => {
                                    return (
                                        <div className="card col-md-5 col-xl-3 horoskop"
                                             key={`weeklyhoroscopee${index}`}
                                        >
                                            <div className="card-body">
                                                <Icon icon={element.icon}
                                                      className='icon'
                                                />
                                                <h6>
                                                    {element.sign}
                                                </h6>
                                                <div>
                                                    {element.horoscope}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }

        </div>
    );
}

export default WeeklyHoroscopes;