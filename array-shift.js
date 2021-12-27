// Fungsi shift untuk menghapus data array yang pertama

function panggilShift() {

    console.log('Contoh 1');
    
    let kota = ['Bekasi','Jakarta','Bandung','Jogja']

    kota = kota.shift()

    return kota
}

console.log(
    panggilShift()
);

// Hasil

// Contoh 1
// Bekasi


function panggilShift2() {

    console.log('Contoh 2');
    
    let kota = ['Bekasi','Jakarta','Bandung','Jogja']

    let tampungKota = kota.shift()

    console.log(tampungKota);

    return kota
}

console.log(
    panggilShift2()
);

// Hasil

// Contoh 2
// Bekasi
// [ 'Jakarta', 'Bandung', 'Jogja' ]
