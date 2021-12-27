function tugas_25() {
    
    let thisArray = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

    console.log(thisArray);

    thisArray.sort()

    console.log(`Ascending : ${thisArray}`);

    thisArray.reverse()

    console.log(`Descending : ${thisArray}`);

    let filter = thisArray.filter(value => value > 10)

    console.log(`Filter > 10 : ${filter}`);
}

tugas_25()