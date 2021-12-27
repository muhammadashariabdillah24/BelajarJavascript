// Method Split digunakan untuk menggabungkan data string menjadi sebuah array
// atau bisa juga untuk memecah string menjadi array

function panggilSplit() {
    
    let kalimat = "Aku Bootcamp Di Niomic"

    kalimat = kalimat.split(' ')

    return kalimat

    // [ 'Aku', 'Bootcamp', 'Di', 'Niomic' ]
}

console.log(
    panggilSplit()
);

console.log('\n');

function panggilSplit2() {
    
    let kalimat = "Bootcamp Di Niomic Sangat Asyik"

    kalimat = kalimat.split(/ /,2)

    return kalimat

    // With RegExp
    // [ 'Bootcamp', 'Di' ]
}

console.log(
    panggilSplit2()
);

console.log('\n');

function panggilSplit3() {
    
    let kalimat = "Bootcamp Di Niomic Sangat Asyik"

    kalimat = kalimat.split(' ',3)

    return kalimat

    // [ 'Bootcamp', 'Di', 'Niomic' ]
}

console.log(
    panggilSplit3()
);