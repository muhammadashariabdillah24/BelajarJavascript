// Fungsi substr adalah memotong sebuah string

function panggilSubstr() {
    
    let kata = "Aku Kamu Dia"

    console.log(kata.substr(0, 9));
    console.log(kata.substr(9));

    // Jika angkanya negatif pemotongan akan dimulai dari belakang
    console.log(kata.substr(-3));
}

panggilSubstr()

// Hasil

// Aku Kamu 
// Dia
// Dia