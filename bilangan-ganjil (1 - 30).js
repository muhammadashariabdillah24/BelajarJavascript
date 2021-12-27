function panggilBillGanjil() {
    
    let bilGanjil = []

    for (let index = 0; index <= 30; index++) {

        if (index % 2 == 1) {
            
            bilGanjil.push(index)
        }
    }

    return bilGanjil
}

console.log(
    panggilBillGanjil()
);

// [
    // 1,  3,  5,  7,  9, 11,
//    13, 15, 17, 19, 21, 23,
//    25, 27, 29
// ]