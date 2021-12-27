// Konversi Ke Ada Dua Method Yang Bisa Digunakan
// Pertama Yaitu toString()
// Kedua Yaitu valueOF() 

function konversiKeString() {
    
    let thisString = new String('Aku Bootcamp Di Niomic')

    console.log(typeof thisString);
    console.log(thisString);

    // Cara Pertama Konversi Ke String
    let konvers = thisString.toString()

    console.log('Konversi Dengan toString');
    console.log(typeof konvers);

    console.log(konvers);

    console.log('\n');

    // Cara Kedua Konversi Ke String
    let konversLagi = thisString.valueOf()

    console.log('Konversi Dengan ValueOf');
    console.log(typeof konversLagi);

    console.log(konversLagi);

}

konversiKeString()