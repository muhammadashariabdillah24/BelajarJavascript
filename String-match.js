function panggilMatch() {

    let kalimat = 'Bangkitkan Macan Asia'

    console.log(kalimat.match('Macan'));

    // [
    //     'Macan',
    //     index: 11,
    //     input: 'Bangkitkan Macan Asia',
    //     groups: undefined
    //   ]

    console.log(kalimat.match(/Asia/));

    //   [
    //     'Asia',
    //     index: 17,
    //     input: 'Bangkitkan Macan Asia',
    //     groups: undefined
    // ]
}

panggilMatch()


function panggilMatch2() {

    let kalimat = 'Bootcamp Seru Di Niomic'

    let data = []

    data.push(kalimat.match(/Seru/));
    data.push(kalimat.match(/Di/));

    console.log(data);

    // [
    //     [
    //       'Seru',
    //       index: 9,
    //       input: 'Bootcamp Seru Di Niomic',
    //       groups: undefined
    //     ],
    //     [
    //       'Di',
    //       index: 14,
    //       input: 'Bootcamp Seru Di Niomic',
    //       groups: undefined
    //     ]
    // ]
}

panggilMatch2()