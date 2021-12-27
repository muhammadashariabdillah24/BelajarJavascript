// Method find digunakan untuk mengembalikan nilai dari elemen pertama
// dalam sebuah array yang memenuhi fungsi pengujian yang telah disediakan

// function panggilFind() {
    
//     let arrayOne = [5,12,8,120,121,44]

//     let found = arrayOne.find((element) => {

//         return element > 100
//     })

//     console.log(found)
// }

// panggilFind()


// function panggilFindLagi() {
    
//     let arrayTwo = [

//         {
//             name : 'Jojo',
//             age : 20
//         },
//         {
//             name : 'Abdul',
//             age : 22
//         },
//         {
//             name : 'Didi',
//             age : 25
//         },
//         {
//             name : 'Lulu',
//             age : 22
//         }
//     ]

//     let found = arrayTwo.find((element) => {

//         return element.age >= 22
//     })

//     console.log(
//         found
//     );
// }

// panggilFindLagi()

let thisArray = ['a','a','a','b','b']

console.log(
    thisArray.find((element) => element == 'a')
);