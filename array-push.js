// Fungsi push berguna untuk memasukan data kedalam sebuah array


function panggilPush() {
    
    let data = [1,2,3,4,5,6,7,8,9,10]

    console.log('Sebelum fungsi push dijalankan');
    console.log(data);

    data.push('Sebelas')

    console.log('Sesudah fungsi push dijalankan');
    return data
}

console.log(
    panggilPush()
);

// Hasil

// Sebelum fungsi push dijalankan
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// Sesudah fungsi push dijalankan
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Sebelas' ]

console.log('\n==========================================\n');

function panggilPush() {
    
    let data2 = [12,13,13,14,15,16,17,18,19,20]

    console.log('Sebelum fungsi push dijalankan');
    console.log(data2);

    data2 = data2.push('Dua Puluh Satu')

    console.log('Sesudah fungsi push dijalankan');
    return data2
}

console.log(
    panggilPush2()
);

// Hasil

// Sebelum fungsi push dijalankan
// [
//   12, 13, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]
// Sesudah fungsi push dijalankan
// [ 12, 13, 13, 14, 15, 16, 17, 18, 19, 20, 'Dua Puluh Satu' ]

