// Method LastIndexOf berfungsi mencari sebuah kata pada kalimat tapi dimulainya pada akhir string

function panggilLastIndexOf() {
    
    let kalimat = 'Aku Bootcamp Intensif Di Niomic Yang Sangat Mengasyikan Keren Loh Bootcamp ini'

    console.log(kalimat.lastIndexOf('Bootcamp'))
}

panggilLastIndexOf()

function panggilLastIndexOf2() {
    
    let kalimat = ' Aku Intensif Aku Aku  Aku  Aku Aku  Aku  Aku  Aku  Aku  Aku  Aku  Aku  Aku Intensif Aku '

    console.log(kalimat.lastIndexOf('Intensif'));

}

panggilLastIndexOf2()