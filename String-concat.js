// Fungsi Concat digunakan untuk menyambungkan string sama seperti operator plus +

function panggilConcat() {
    
    let kalimatPertama = "Aku Bootcamp"
    let spasi = " "
    let kalimatKedua = "Intensif Di Niomic"

    console.log(kalimatPertama);
    
    // Aku Bootcamp

    console.log(spasi);

    // *spasi

    console.log(kalimatKedua);

    // Intensif Di Niomic

    // Gabungkan Semua
    console.log(kalimatPertama.concat(spasi,kalimatKedua,' Asyik Sekali'));

    // Aku Bootcamp Intensif Di Niomic Asyik Sekali
}

panggilConcat()