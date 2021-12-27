// Fungsi includes adalah melakukan pengecekan apakah sebuah string yang kita targetan
// memiliki karakter atau huruf yang sama dengan includes

function panggilIncludes() {
    
    let inc = "Aku Bootcamp Intensif DiNiomic"
    console.log(inc.includes("Niomic"));

    // true

    console.log(inc.includes("Keren"));

    // false
}

panggilIncludes()