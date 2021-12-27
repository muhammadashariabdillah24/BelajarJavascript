// Method isNaN nilai true jika terdapat data yang bernilai Not A Number (NaN)
// Jika tidak maka akan bernilai false

function panggilIsNaN() {
    
    let a = isNaN(1,2,3,4,5)
    let b = isNaN(123)
    let c = isNaN('100f')
    let d = isNaN(NaN)

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

panggilIsNaN()