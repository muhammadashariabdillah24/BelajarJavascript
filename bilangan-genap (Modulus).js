function bilGenap() {

    let bilgenap = []

    for (let index = 1; index < 10; index++) {
        if (index % 2 == 0) {

            bilgenap.push(index)
        }
    }

    return bilgenap

}

console.log(
    bilGenap()
);

// [ 2, 4, 6, 8 ]