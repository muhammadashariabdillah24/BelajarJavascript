function panggilBilKelipatan() {

    let bilKelipatan = []

    for (let index = 1; index <= 50; index++) {

        if (index % 5 === 0) {

            bilKelipatan.push(index)
        }
    }

    return bilKelipatan

    // [
    //     5, 10, 15, 20, 25,
    //     30, 35, 40, 45, 50
    // ]

}

console.log(
    panggilBilKelipatan()
);