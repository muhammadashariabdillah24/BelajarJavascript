function tugas_22() {

    let thisArray = []
    let thisString = "Saya ingin belajar bersama"

    thisArray = thisString.split(' ')

    thisArray.forEach((item, index) => {

        console.log(`Item : ${item} Index ke ${index}`);
    })

    // Item: Saya Index ke 0
    // Item: ingin Index ke 1
    // Item: belajar Index ke 2
    // Item: bersama Index ke 3
}

tugas_22()