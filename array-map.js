// Method Map digunakan untuk melakukan perulangan berdasarkan jumlah data array yang menjadi acuan dalam perulangan tersebut.

function panggilMap() {

    let dataKota = ['Jakarta', 'Bekasi', 'Bandung', 'Bogor', 'Jogja'];

    dataKota.map((value, index) => {

        console.log(`${index} ${value}`);
    })

    // 0 Jakarta
    // 1 Bekasi
    // 2 Bandung
    // 3 Bogor
    // 4 Jogja

    console.log('\n');

    dataKota.map((item, value, index) => {

        console.log(`${index} ${value} ${item}`);
    })

    // Jakarta, Bekasi, Bandung, Bogor, Jogja 0 Jakarta
    // Jakarta, Bekasi, Bandung, Bogor, Jogja 1 Bekasi
    // Jakarta, Bekasi, Bandung, Bogor, Jogja 2 Bandung
    // Jakarta, Bekasi, Bandung, Bogor, Jogja 3 Bogor
    // Jakarta, Bekasi, Bandung, Bogor, Jogja 4 Jogja
}

panggilMap()