import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Contact from "./Contact";
import Donations from './Donations';

const NameMeaning = () => {
    const nameMeanings = {
        Tamara: "Ime Tamara je svetopisemsko in izhaja iz hebrejskega imena Tamár, ki je nastalo iz starohebrejskega tāmār 'dateljnova palma'; 'figovo drevo'. V grščini in vulgati ima to ime obliko Thamar. Po stari zavezi je bila Tamara snaha praočeta Judovega rodu. Od Juda si je po smrti moža Era, preoblečena v prostitutko, s prevaro pridobila potomca Peresa in Zeraha. Kljub tej dokaj neslavni osebni zgodbi je Tamara svetopisemska žena obljube, ker je pomagala graditi Judovo rodovino, iz katere je bil David in njegovi potomci vse do Kristusa. Ker od Peresa izhaja Davidova dinastija, je Tamara omenjena v Jezusovem rodovniku. Spomin nanjo je v Izraelu ostal živ vsa stoletja. Judovsko izročilo jo je sprejelo v svoj duhovni, verski, družbeni in vsakdanji življenjski proces in ji odmerilo odlično mesto v celotnem poslanstvu izvoljenega ljudstva. Tamara se je imenovala tudi Davidova hči, prav tako hči Davidovega sina Absaloma.",
        Andraz: "Ime Andrej izhaja iz latinskega imena Andreas, to pa iz grškega Andréas.Grško ime razlagajo iz grškega pridevnika andréios v pomenu 'možat, pogumen'. Ustrezno slovansko ime bi lahko bilo Hrabroslav, germansko pa Manno.",
        Sara: "Sara je svetopisemsko ime. Izhaja iz hebrejskega imena Sará s prvotnim pomenom 'kneginja, vladarica'. Svetopisemska Sara, ki se je najprej imenovala Saraja, je bila žena praočeta judovskega rodu Abrahama, najprej Abrama. Kot mati 'sina obljube' Izaka je tudi mati izvoljenega ljudstva. Različica Sarah je angleška oblika imena Sara, različica Šarika pa se pojavlja zlasti v Prekmurju in izhaja iz madžarske oblike imena Sara Sárika. Šarika je ena od oseb v romanu Miška Kranjca Strici so mi povedali.",
        Tilen: "Ime Tilen izhaja iz imena Egidij. Nastalo je iz narečnih Ilj, Tilj, Tiljen, Tilih. Te izhajajo iz bavarskih oblik imena Aegilius, ki je različica latinskega imena Aegidius: Gilj, Gilg, Gidl, Gil, Gilh, Jilh, Jilgen. Iz teh oblik je nastalo slovensko Ilj, ki ga npr. vsebuje tudi krajevno ime Šentilj. Začetni T- v imenu Tilen ali Tilj, Tilih je prišel iz besede šent, tj. sveti, ki se je dodajala imenu svetnika in je tudi v omenjenem krajevnem imenu. Izhodiščno ime Egidij izhaja iz latinskega Aegidius, to pa iz grškega Aigidios. To povezujejo z grškim aigís, v rodilniku aigídos v pomenu 'usnjen ščit in 'kozja koža'. Ženski imeni Tilka in Ilka lahko izhajata tudi iz imen Matilda in Otilija.",
        Luka: "Ime Luka izhaja iz latinskega imena Lucas. To naj bi nastalo po krajšanju iz *Lucanus v pomenu 'kdor izhaja iz Lukanije', tj. pokrajine v južni Italiji. Po drugi razlagi ga podobno kot ime Lucius, slovensko Lucij z žensko obliko Lucija, povezujejo z latinsko besedo lux, v rodilniku lucis, v pomenu 'svetloba, svetlost, sijaj'. Prvotna in starejša oblika za latinsko Lucas je Lukež, zdaj prevladujoča Luka, poslovenjena Lukas. Skrajšana oblika Luc je lahko nastala tudi iz imena Lucij, medtem ko je ljubkovalno Luki večinoma samo klicna oblika."
    };

    const [getCurrentName, setCurrentName] = useState(null);

    const autocompleteChange = event => {
        let name = event.target.textContent;
        setCurrentName(name);
    }

    return (
        <div className='row'>
            <div className='names col-8'>
                <Autocomplete id="combo-box-demo"
                              options={Object.keys(nameMeanings)}
                              getOptionLabel={key => key}
                              onChange={autocompleteChange}
                              renderInput={
                                  (params) =>
                                      <TextField {...params}
                                                 label="Name"
                                                 variant="outlined"
                                      />
                              }
                />
            </div>
            {
                getCurrentName && nameMeanings[getCurrentName] ?
                    <div className='col-8'>
                        <h1>
                            {getCurrentName}
                        </h1>
                        <p>
                            {nameMeanings[getCurrentName]}
                        </p>
                    </div>
                    : null
            }
            <div className='col-4'>
                <Contact/>
                <div>
                    <Donations/>
                </div>
            </div>
        </div>
    );
}

export default NameMeaning;