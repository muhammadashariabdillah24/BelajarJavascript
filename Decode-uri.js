// Fungsi decode uri digunakan untuk memecahkan kode uri

function DecodeUri() {
    
    let uri = 'www.goggle.co%20%20m'

    let res = decodeURI(uri)

    console.log(res);
    // www.goggle.co  m
}

DecodeUri()