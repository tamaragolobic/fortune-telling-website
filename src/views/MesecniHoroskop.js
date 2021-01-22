import React from 'react';

const Mhoroskopi = (props) => {
    const horoskop = [
        {
            mesec: 'januar',
            leto: '2021',
            napoved: 'Karkoli ste se odločili v zadnjih 3 mesecesih boste v decembru pokazali v dejanjih. V tem mesecu se lahko preselite ali doživite spremembo povezano z domom in družino. Komunikacija bo pogostejša. Lahko, da boste menjali službo ali pa se boste odločili za novo smer v poslovnem življenju. Če se ne preselite, boste spremenili, zamenjali, predelali ali na novo opremili pohištvo, da boste dobili občutek spremembe. Spremembe se nakazujejo tudi v zdravju in količini denarja, ki Vam je na voljo. Vse spremembe, ki se zgodijo peljejo v srečnejše in pozitivne smeri. Možen je vstop človeka rojenega v znamenju Raka v Vaše življenje, možna sprememba v odnosu do ljudi v tem znaku. To je mesec v katerem boste vse kar Vas je utesnjevalo ali zadrževalo enostavno prerasli, kot tudi nov način razmišljanja bi bil zelo dobrodošel. Vse kar ne potrebujete več odvrzite, sledi prelom s preteklostjo.\n' +
                'Na duhovnem področju Vas podpira 7 palic, ki pravi, da pridobite pogum in zagovarjajte stvari, ki jih cenite. Ne privolite na kompromise ali poravnave z ljudmi rojenimi v znamenju Leva ali iz teh mesecev, lahko zaupate v svoje izkušnje in svoji intuiciji. Ne bodite dominantni in odvisni od središča pozornosti ali priznanja okolice. Morate zaupati sami sebi, saj ste dovolj ustvarjalni. Naj Vas prva zavrnitev ne vrže iz tirnice, kajti ,kljub vsemu boste obdržali uspešen položaj v uspešnem podjetju.\n' +
                'Področje Vaše duševnosti imate 7 mečev in tukaj vidim nemočen um, ki ve kaj bi ampak vedno znova ponavljate pogojnike ; da, toda, če ; ali ponavljate razlage zakaj stvari ne bi delovale. To razmišljanje izvira iz družinske tradicije in eden od Vaših staršev Vam je vcepil tak način razmišljanja oziroma negotovost. Zelo naporni bodo meseci Januar – Februar, v službi boste omejeni in ne boste prenašali rutine, ne delajte poskuse brez odgovornosti in pazite se nepoštenja. Bodite praktični, inovativni saj boste začutili potrebo po svobodnem odločanju in se trudite v smeri samostojnega dela, ki bo vsem v dobro.'
        },
        {
            mesec: 'december',
            leto: '2020',
            napoved: 'Karkoli ste se odločili v zadnjih 3 mesecesih boste v decembru pokazali v dejanjih. V tem mesecu se lahko preselite ali doživite spremembo povezano z domom in družino. Komunikacija bo pogostejša. Lahko, da boste menjali službo ali pa se boste odločili za novo smer v poslovnem življenju. Če se ne preselite, boste spremenili, zamenjali, predelali ali na novo opremili pohištvo, da boste dobili občutek spremembe. Spremembe se nakazujejo tudi v zdravju in količini denarja, ki Vam je na voljo. Vse spremembe, ki se zgodijo peljejo v srečnejše in pozitivne smeri. Možen je vstop človeka rojenega v znamenju Raka v Vaše življenje, možna sprememba v odnosu do ljudi v tem znaku. To je mesec v katerem boste vse kar Vas je utesnjevalo ali zadrževalo enostavno prerasli, kot tudi nov način razmišljanja bi bil zelo dobrodošel. Vse kar ne potrebujete več odvrzite, sledi prelom s preteklostjo.\n' +
                'Na duhovnem področju Vas podpira 7 palic, ki pravi, da pridobite pogum in zagovarjajte stvari, ki jih cenite. Ne privolite na kompromise ali poravnave z ljudmi rojenimi v znamenju Leva ali iz teh mesecev, lahko zaupate v svoje izkušnje in svoji intuiciji. Ne bodite dominantni in odvisni od središča pozornosti ali priznanja okolice. Morate zaupati sami sebi, saj ste dovolj ustvarjalni. Naj Vas prva zavrnitev ne vrže iz tirnice, kajti ,kljub vsemu boste obdržali uspešen položaj v uspešnem podjetju.\n' +
                'Področje Vaše duševnosti imate 7 mečev in tukaj vidim nemočen um, ki ve kaj bi ampak vedno znova ponavljate pogojnike ; da, toda, če ; ali ponavljate razlage zakaj stvari ne bi delovale. To razmišljanje izvira iz družinske tradicije in eden od Vaših staršev Vam je vcepil tak način razmišljanja oziroma negotovost. Zelo naporni bodo meseci Januar – Februar, v službi boste omejeni in ne boste prenašali rutine, ne delajte poskuse brez odgovornosti in pazite se nepoštenja. Bodite praktični, inovativni saj boste začutili potrebo po svobodnem odločanju in se trudite v smeri samostojnega dela, ki bo vsem v dobro.'
        }
    ];

    return (
        <div className='fullScreenLayout'>
            {
                horoskop.map((element) => {
                    return <div className='col-8 horoskop'>
                        {
                            props.match.params.year === element.leto ?
                                <div>
                                    <h1>
                                        {element.mesec.toUpperCase()} {element.leto}
                                    </h1>
                                    {
                                        props.match.params.year === element.leto ?
                                            <p>
                                                {element.napoved}
                                            </p> : null
                                    }
                                </div> : null
                        }
                    </div>
                })
            }
        </div>
    );
}

export default Mhoroskopi;