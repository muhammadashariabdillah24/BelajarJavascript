// Method Startwith digunakan untuk mencari string pada awal string
// Dan Method EndWith digunakan untuk mencari string pada akhir string


function panggilTheWith() {
    
    let kalimat1 = "Niomic Asyik Dan Keren Sekali"
    let kalimat2 = "Ikut Bootcamp Di Niomic"

    // Cari Kata Niomic Diawal Apakah Ada ?
    console.log(kalimat1.startsWith("Niomic"));

    // Ada
    // Hasil

    // true

    // Cari Kata Keren Diawal Apakah Ada ?
    console.log(kalimat2.startsWith("Keren"));

    // Tidak Ada
    // Hasil

    // false


    console.log('\n==============================\n');

    
    // Cari Kata Sekali Diakhir Apakah Ada ?
    console.log(kalimat1.endsWith("Sekali"));

    // Ada
    // Hasil

    // true


    // Cari Kata Estestik Diakhir Apakah Ada ?
    console.log(kalimat2.endsWith("Estestik"));

    // Tidak Ada
    // Hasil

    // false
}

// panggilTheWith()

function panggilTheWith2() {
    
    let kalimat = "Aku Sangat Suka Dengan Niomic Karena Pembelajarannya Sangat Jelas Dan Mudah Dipahami"

    // Startwith dengan index
    console.log(kalimat.startsWith('Suka', 11));


    // EndWith dengan index
    console.log(kalimat.endsWith('Mudah'));
}

panggilTheWith2()