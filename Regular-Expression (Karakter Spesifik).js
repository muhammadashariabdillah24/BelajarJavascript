// Karakter Spesifik regex yang memiliki sebuah flags / tanda
// flags / tanda tersebut akan memberika hasil yang berbeda setiap pencarian

function panggilRegexChar(value) {

    // Mengambil sebuah kata "ke"
    let getData = value.match(/ke/g);
    console.log(getData);

    // [ 'ke', 'ke' ]

    // Mengambil semua karakter "k" , "e" , "a" , "B" dan "s"
    let getData2 = value.match(/[keaBs]/g)
    console.log(getData2);

    // [
    //     'B', 'a', 'k',
    //     'e', 's', 'k',
    //     'e'
    // ]

    // Mengambil karakter kecuali "k" dan "e"
    let getData3 = value.match(/[^ke]/g);
    console.log(getData3);

    // [
    //     'B', 'u', 'l', 'a',
    //     'n', ' ', ' ', '1',
    //     ' ', 's', 'd', ' ',
    //     ' ', '4'
    // ]

    // Mengambil karakter antara dari karakter tertentu
    // kita ingin mengambil semua karakter antara "a" sampai dengan "i"
    let getData4 = value.match(/[a-i]/g)
    console.log(getData4);

    // [ 'a', 'e', 'd', 'e' ]
}

panggilRegexChar("Bulan ke 1 sd ke 4")
