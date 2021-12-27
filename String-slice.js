// Fungsi Slice adalah untuk memotong kalimat / string sesuai dengan keinginan kita

function panggilSlice() {
    
    // Index Dimulai dari 1 bukan 0
    let kata = "Aku Senang Selalu Belajar Di Niomic"

    // Jika Parameter Start Tidak Ada Maka Hanya Menampilkan Sisa Kalimat Yang Tidak DIPotong
    console.log(kata.slice(3));

    // Hasil

    //  Senang Selalu Belajar Di Niomic

    // Jika Parameter Start Di Berikan Maka Hanya Kata Yang Dipotong Saja Yang Di Ambil
    console.log(kata.slice(0, 3));

    // Hasil

    // Aku

    // *Tidak Menggunakan Parameter Start
    // Jika parameter bernilai negatif maka pemotongan kalimat dimulai dari belakang
    console.log(kata.slice(-6));

    // Hasil

    // Niomic

    // *Menggunakan Parameter Start
    // Jika parameter bernilai negatif maka pemotongan kalimat dimulai dari belakang
    console.log(kata.slice(-0, -9));

    // Hasil

    // Aku Senang Selalu Belajar
}

panggilSlice()

console.log('\n==========================\n');

function panggilSlice2() {
    
    let kata = "Aku Bootcamp Intensif Di Niomic"

    kata = kata.slice(3)

    console.log(kata);
}

// panggilSlice2()

// Hasil

//  Bootcamp Intensif Di Niomic