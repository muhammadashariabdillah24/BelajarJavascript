// function balikKata(str) {

//     let newStr = ""

//     for (let index = str.length - 1; index >= 0; index--) {

//         // newStr = newStr + str[index]
//         console.log(index);
//     }

//     return newStr

// }

// console.log(
//     balikKata('Hallo')
// );

function balikKata2(params) {

    let newStr = ""
    let resultSplit = params.split('')

    for (let index = resultSplit.length - 1; index >= 0; index--) {

        newStr += resultSplit[index]
    }

    return newStr;

}

console.log(
    balikKata2('Hallo')
);