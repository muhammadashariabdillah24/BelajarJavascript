function panggilRegex(params) {

    // \W digunakan untuk mengambil semua karakter kecuali huruf dan angka
    let getData = params.match(/\W/g)
    console.log(getData);

    // [
    //     ' ', ' ', ' ', ' ',
    //     ' ', ' ', '%', '$',
    //     '^', '&', '*', '&'
    // ]

    // \D digunakan untuk mengambil semua data / karakter kecuali angka
    let getData2 = params.match(/\D/g);
    console.log(getData2);

    // [
    //     'B', 'u', 'l', 'a', 'n',
    //     ' ', 'k', 'e', ' ', ' ',
    //     's', 'd', ' ', 'k', 'e',
    //     ' ', ' ', '%', '$', '^',
    //     '&', '*', '&'
    // ]

    // \S digunakan untuk mengambil semua karakter kecuali spasi
    let getData3 = params.match(/\S/g)
    console.log(getData3);

    // [
    //     'B', 'u', 'l', 'a', 'n',
    //     'k', 'e', '1', 's', 'd',
    //     'k', 'e', '4', '%', '$',
    //     '^', '&', '*', '&'
    // ]

}

panggilRegex("Bulan ke 1 sd ke 4 %$^&*&")