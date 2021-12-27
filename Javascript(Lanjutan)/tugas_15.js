// Rumus Mencari Sisi Miring

// c = √ (a2 + b2)

function cariSisiMiring() {

    // Pertama Kita Tentukan Lebar
    // Kedua kita Tentukan Tinggi
    let AB = 8
    let BC = 6
    
    // Lalu kita pangkatkan lebar ( powAb )
    let powAb = Math.pow(AB, 2)
    // Lalu kita pangkatkan tinggi ( powBc )
    let powBc = Math.pow(BC, 2)

    // Lalu kita tambahkan hasil pangkat dari lebar dan tinggi
    let plus = powAb + powBc

    // Terakhir kita cari akar dari hasil pangkat yang sudah dijumlahkan tadi
    let sqrt = Math.sqrt(plus)

    return sqrt
}

console.log(
    cariSisiMiring()
);

// Hasil

// 10