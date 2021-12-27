function tugas_13() {
    
    let dataBuah = ['Pisang','Jeruk'];
    console.log(dataBuah);
    dataBuah.unshift('Apel','Mangga');

    return dataBuah
}

console.log(
    tugas_13()
);

// Hasil

// [ 'Pisang', 'Jeruk' ]
// [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ]