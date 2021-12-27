// Fungsi array pop berfungsi untuk menghapus data array yang terakhir

function panggilPop() {
    
    let kota = ['Sumedang','Palembang','Lampung','Padang']

    console.log('Sebelum Fungsi Pop Dijalankan');

    console.log(kota);

    kota = kota.pop()

    console.log('Sesudah Fungsi Pop Dijalankan');
    return kota
}

console.log(
    panggilPop()
);

// Hasil

// Sebelum Fungsi Pop Dijalankan
// [ 'Sumedang', 'Palembang', 'Lampung', 'Padang' ]
// Sesudah Fungsi Pop Dijalankan
// Padang


console.log('\n=================================\n');


function panggilPop2() {
    
    let kota = ['Sumedang','Palembang','Lampung','Padang']

    console.log('Sebelum Fungsi Pop Dijalankan');
    console.log(kota);

    kota.pop()

    console.log('Sesudah Fungsi Pop Dijalankan');
    return kota
}

console.log(
    panggilPop2()
);

// Hasil

// Sebelum Fungsi Pop Dijalankan
// [ 'Sumedang', 'Palembang', 'Lampung', 'Padang' ]
// Sesudah Fungsi Pop Dijalankan
// [ 'Sumedang', 'Palembang', 'Lampung' ]