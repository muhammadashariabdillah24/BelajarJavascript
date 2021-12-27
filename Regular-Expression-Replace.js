// Fungsi regex replace digunakan untuk pergantian data pada sebuah variable string
// dengan menggunakan perintah replace

function panggilReplace() {
    
    let data = 'Bootcamp Asyik Di Niomic'

    console.log(data.replace(/Asyik/i, 'Seru'));
}

panggilReplace()

function tantanganRegexReplace() {
    
    let data = 'Belajar-Satu-Tahun-Bersama-Niomic'

    console.log(data.replaceAll(/-/g,' '));

}

tantanganRegexReplace()