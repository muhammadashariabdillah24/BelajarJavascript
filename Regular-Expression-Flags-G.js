// Regex Flag g digunakan untuk melakukan pencocokan dari suatu data yang ingin kita cari
// 
function panggilRegexFlag() {

    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz"

    console.log(str.match(/c/g));
    // [ 'c', 'c' ]

    let str2 = 'ug uqgwyewrywgb uy gwerg g23723 r2ybf2f b'

    console.log(str2.match(/2/g));
    // [ '2', '2', '2', '2' ]

    console.log(str2.match(/[gw]/g));

    // [
    //     'g', 'g', 'w', 'w',
    //     'w', 'g', 'g', 'w',
    //     'g', 'g'
    // ]
}

panggilRegexFlag()