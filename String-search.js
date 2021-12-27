// Method Search digunakan untuk pencarian sama seperti indexOf
// tapi pencariannya bisa menggunakan reguler expression

function panggilSearch() {
    
    let kalimat = 'Belajar Di Niomic 22 Sangat Asyik'
    console.log(kalimat.search('Di'));
    // 8

    console.log(kalimat.search(/22/));
    // 18

    console.log(kalimat.search(/Sangat/));
    // 21
}

panggilSearch()

function panggilSearch2() {
    
    let kalimat = 'Aku Di Bootcamp Di Niomic'
    console.log(kalimat.search(/Di/));
}


panggilSearch2()
