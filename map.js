// Perintah / Fungsi / Method MAP ini berfungsi mirip seperti ForEach. Perintah MAP juga digunakan untuk melakukan perulangan 
// berdasarkan jumlah data array yang menjadi acuan dalam perulangan tersebut.

function panggilPerintahMap() {
    
    let dataKota = ['Jakarta','Bali','Bekasi','Medan']

    dataKota.map((item, index, array) => {

        console.log(`Item dalam sebuah array : ${item}\n`);
        console.log(`Index dari isi array : ${index}\n`);
        console.log(`Array : ${array}`);
    })
}

panggilPerintahMap()


// Item dalam sebuah array : Jakarta

// Index dari isi array : 0

// Array : Jakarta,Bali,Bekasi,Medan
// Item dalam sebuah array : Bali

// Index dari isi array : 1

// Array : Jakarta,Bali,Bekasi,Medan
// Item dalam sebuah array : Bekasi

// Index dari isi array : 2

// Array : Jakarta,Bali,Bekasi,Medan
// Item dalam sebuah array : Medan

// Index dari isi array : 3

// Array : Jakarta,Bali,Bekasi,Medan