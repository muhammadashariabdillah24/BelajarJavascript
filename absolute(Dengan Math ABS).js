// Fungsi Absolute adalah untuk mengabsolutekan nilai
// yang dimana jika nilai itu negatif maka akan dirubah menjadi positif
// karena nilai absolute tidak bisa negatif atau dibawah 0
// dan absolute digunakan untuk mencari selisih daripada 2 angka

function panggilAbsolute() {
    
    let x = 30
    let y = 40

    console.log('Sebelum diabsolutekan = ',x-y);
    console.log('Sesudah diabsolutekan = ',Math.abs(x-y));
}

panggilAbsolute()

function panggilAbsolute2() {
    
    let a = 60;
    let b = 80;

    console.log('Sebelum diabsolutekan = ', a-b);
    console.log('Sesudah diabsolutekan = ', Math.abs(a-b));

}

panggilAbsolute2();


function panggilAbsolute3() {
    
    let x = 10;
    let y = 50;

    console.log(x-y);
    console.log(Math.abs(x-y));
}

panggilAbsolute3()