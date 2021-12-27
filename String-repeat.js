// Fungsi Repeat digunakan untuk menggulang string sebanyak berapa yang sudah ditentukan

function panggilRepeat() {
    
    let nama = "Muhammad Ashari Abdillah"

    nama = nama.repeat(10)
    console.log(nama);
}

panggilRepeat()

console.log('\n=====================================\n');

function panggilRepeat2() {
    
    let nama = "Muhammad Ashari Abdillah"

    nama = nama.concat(' ').repeat(10)

    console.log(nama);
}

panggilRepeat2()