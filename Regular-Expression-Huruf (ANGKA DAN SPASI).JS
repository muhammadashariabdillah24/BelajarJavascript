function panggilRegex(value) {

    // \w digunakan untuk mengambil semua huruf kecil atau huruf besar dan juga angka
    let getData = value.match(/\w/g);
    console.log(getData);

    // [
    //     'B', 'u', 'l', 'a',
    //     'n', 'k', 'e', '1',
    //     's', 'd', 'k', 'e',
    //     '4'
    // ]

    // \d digunakan untuk mengambil semua angka saja
    let getData2 = value.match(/\d/g);
    console.log(getData2);

    // [ '1', '4' ]

    // \s digunakan untuk mengambil spasi yang ada pada sebuah kalimat atau string
    let getData3 = value.match(/\s/g);
    console.log(getData3);
    console.log(`Banyak Spasi : ${getData3.length}`);

    // [' ', ' ', ' ', ' ', ' ']
    // Banyak Spasi: 5
}

panggilRegex("Bulan ke 1 sd ke 4")