// Callback adalah suatu method yang dimana ketika kita ingin menjalankan suatu fungsi
// harus fungsi utama dahulu baru sub fungsi dijalankan


const jalan = () => {

    console.log('Motor Sudah Jalan');
}

const jalankanMotor = (callback) => {

    console.log('Check Apakah Sudah Jalan');
    console.log('Sedang Mengecek');
    callback()
}

jalankanMotor(jalan)

// Check Apakah Sudah Jalan
// Sedang Mengecek
// Motor Sudah Jalan

const namaHewan = () => {

    console.log('Burung Unta');
}

const print = (panggilHewan) => {

    console.log('Nama Hewan ?');

    panggilHewan()
}

print(namaHewan)

// Nama Hewan ?
// Burung Unta


const tang = () => {

    console.log('Tang');
}

const linggis = () => {

    console.log('Linggis');
}

const palu = () => {

    console.log('Palu');
}


const printPerkakas = (callTang,callLinggis,callPalu) => {

    console.log('Print Semua');

    callTang()
    callLinggis()
    callPalu()

}

printPerkakas(tang,linggis,palu)

// Print Semua
// Tang
// Linggis
// Palu