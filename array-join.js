// Method Join digunakan untuk merubah data yang sebelumnya array
// menjadi sebuah string dan setelah itu digabungkan

function panggilJoin() {
    let kota = ['Jakarta','Bekasi','Bogor','Balikpapan','Lampung']

    console.log(typeof kota);
    console.log(kota);

    console.log('\n');

    kota = kota.join(' && ')

    console.log(typeof kota);
    return kota
}

console.log(
    panggilJoin()
); 



// object
// [ 'Jakarta', 'Bekasi', 'Bogor', 'Balikpapan', 'Lampung' ]


// string
// Jakarta && Bekasi && Bogor && Balikpapan && Lampung