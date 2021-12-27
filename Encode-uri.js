// Fungsi encode uri digunakan untuk menyandikan uri fungsi ini menyadikan karakter kursus kecuali #$ dll

function EncodeUri() {
    
    let uri = 'www. goggle .com';
    let res = encodeURI(uri)

    console.log(res);
    
    // www.%20goggle%20.com
}

EncodeUri()

function EncodeUri2() {
    
    let uri = 'www.keren.com   '
    let res = encodeURI(uri)

    console.log(res);
}

EncodeUri2()