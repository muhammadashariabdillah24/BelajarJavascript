function panggilModulus() {

    let bilGanjil = []

    let i = 1;
    
    while (i < 10) {

        if (i % 2 !== 0) {
            
            bilGanjil.push(i)
        }

        i++
    }
    return bilGanjil;

    // [ 1, 3, 5, 7, 9 ]
}

console.log(
    panggilModulus()
);