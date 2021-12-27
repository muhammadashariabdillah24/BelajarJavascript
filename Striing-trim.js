// Fungsi trim adalah untuk menghapus whitespace / spasi di awal dan di akhir pada sebuah kalimat / string


function panggilTrim() {
    
    let kata = " Aku Belajar Di Niomic "

    console.log(kata);

    //  Aku Belajar Di Niomic

    console.log(kata.trim());

    // Aku Belajar Di Niomic
    
    console.log('      Aku Bootcamp Intensif Di Niomic     ');

    //       Aku Bootcamp Intensif Di Niomic     
    
    console.log('      Aku Bootcamp Intensif Di Niomic     '.trim());

    // Aku Bootcamp Intensif Di Niomic
}

panggilTrim()