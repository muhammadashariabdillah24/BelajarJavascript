// Fungsi Unshift digunakan untuk menyisipkan / memasukan sebuah data kedalam sebuah array

function panggilUnshift() {
    let data = ['Jakarta','Bandung','Medan']
    console.log(data);
    data.unshift('Bekasi','Bogor')

    return data
}

console.log(
    panggilUnshift()
);