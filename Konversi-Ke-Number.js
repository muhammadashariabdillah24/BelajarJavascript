
// Pakai Number
function changeToNumber() {
    
    let a = '9'
    let b = 9

    hasil = a + b

    console.log(hasil);

    hasil2 = Number(a) + b

    console.log(hasil2);
}

changeToNumber()

// Pakai ParseInt
function changeToNumber2() {
    
    let a = "13.20"
    let b = "10 kura kura"
    let c = "100.00 meter"

    hasil = parseInt(a)
    console.log(hasil);
    // 13

    hasil2 = parseInt(b)
    console.log(hasil2);
    // 10

    hasil3 = parseInt(c)
    console.log(hasil3);
    // 100
}

changeToNumber2()


// Pakai ParseFloat
function changeToNumber3() {
    
    let a = '13.22'
    let b = '15.90'

    hasil = parseFloat(a)
    console.log(hasil);
    // 13.22

    hasil2 = parseFloat(b)
    console.log(hasil2);
    // 15.9
    // angka 0 dihilangkan jika pakai parsefloat
}

changeToNumber3()