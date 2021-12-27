// Method Find Index adalah unutk mengembalikan index element pertama
// dalam array yang memenuhi fungsi pengujian yang telah disediakan
// jika tida ia akan mengembalikan nilai -1 untuk menunjukan bahwa tida ada
// element yang lulus dalam tahap pengujian


let thisArray = [5,12,8,130,44]

function panggilFindIndex(element) {
    
    return element < 130
}

console.log(
    thisArray.findIndex(panggilFindIndex)
);

let arrayOne = [1,8,5,10,13,20,22,24,50,10,10]
function panggilFindIndexLagi(elemet) {
    
    return elemet == 10
}


console.log(
    arrayOne.findIndex(panggilFindIndexLagi)
);
