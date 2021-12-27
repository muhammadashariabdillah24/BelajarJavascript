// Fungsi Split Adalah Mengubah String Menjadi Array


function panggilSplit() {
    
    let kata = "Niomic Memang Hebat"

    console.log(kata.split());

    // [ 'Niomic Memang Hebat' ]

    console.log(kata.split(''));

    // [
    //     'N', 'i', 'o', 'm', 'i',
    //     'c', ' ', 'M', 'e', 'm',
    //     'a', 'n', 'g', ' ', 'H',
    //     'e', 'b', 'a', 't'
    // ]

    console.log(kata.split(' '));

    // [ 'Niomic', 'Memang', 'Hebat' ]
}

panggilSplit()