// Method Array sort digunakan untuk mengurutkan element dari array
// jika method ini dipanggil tanpa argument, element dari array akan diurutkan berdasarkan abjact
// jika elemen didalamnya bukan huruf akan diconvert menjadi string baru dilakukan proses pengurutan
// jika tidak ditemukan element dengan nilai null atau undefined maka akan ditempatkan pada urutan akhir

function panggilSort() {
    
    let kota = ['Jakarta','Makasar','Bekasi','Bogor']

    console.log(kota);

    kota = kota.sort()

    return kota
}

console.log(
    panggilSort()
);
