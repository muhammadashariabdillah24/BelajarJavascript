// Regex Token Token regex dikelompokan berdasarkan yaitu :
// 1 . ada yang dipakai untuk jenis karakter
// 2 . dan untuk menentukan batas

// Regex token untuk karakter yaitu
// - titik (.) artinya untuk sembarang karakter
// - \d artinya sembarang angka dari 0 sampai 9
// - \D artinya sembarang karakter yang bukan angka
// - \w artinya sembarang angka untuk huruf kecil / huruf besar termasuk undescore
// - \W artinya huruf / angka dan underscore
// - \s artinya untuk karakter whitespace (spasi) , tab / linebreak


function panggilRegexToken() {
    
    let data = 'belajar di niomic.'

    let regex = /./g;

    console.log(data.match(regex));

    let data2 = 'sempurna.'
    let regex2 = /\./g;
    
    console.log(data2.match(regex2));
}

panggilRegexToken()