// Fungsi Splice digunakan untuk menyisipkan atau memasukan sebuah data kedalam array
// peletakan indexnya sesuai dengan keinginannya
// dan juga bisa memotong beberapa array


// Fungsi Splice Untuk Menyisipkan
function panggilSplice() {
    
    let kota = ['Jakarta','Padang','Balikpapan','Sumbar','Sumsel','Sumut']
    kota.splice(0, 0,'Bekasi')
    // console.log(kota);
    return kota
}

console.log(

    panggilSplice()
);

// Hasil

// [
//     'Bekasi',
//     'Jakarta',
//     'Padang',
//     'Balikpapan',
//     'Sumbar',
//     'Sumsel',
//     'Sumut'
// ]

console.log('\n=====================================\n');

// Fungsi Splice untuk memotong beberapa array

function panggilSplice2() {
    
    let kota = ['Jakarta','Padang','Balikpapan','Sumbar','Sumsel','Sumut']
    kota.splice(0, 2)
    return kota
}

console.log(

    panggilSplice2()
);

// Hasil

// [ 'Balikpapan', 'Sumbar', 'Sumsel', 'Sumut' ]
