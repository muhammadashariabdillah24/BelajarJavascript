// Fungsi Concat digunakan untuk menggabungkan dua buah data array atau lebih menjadi satu

function panggilConcat() {
    
    let data = ['Bandung','Jakarta','Bogor','Palembang','Balikpapan']

    let kota = ['Lampung','Bekasi','Depok']

    let hasil = data.concat(kota)

    return hasil

}

console.log(
    panggilConcat()
);


function panggilConcat2() {
    
    let data1 = ['Surabaya','Malang'];
    let data2 = ['Jogja','Magelang'];


    return data1.concat(data2);

}


console.log(panggilConcat2());
















































// function panggilConcat1() {
    
//     let kotaSatu = ['Jakarta','Bekasi','Bandung']
//     let kotaDua = ['Balikpapan','Samarinda','RangkasBitung']

//     let joinKota = kotaSatu.concat(' ',kotaDua)

//     console.log(joinKota);
// }

// panggilConcat1()