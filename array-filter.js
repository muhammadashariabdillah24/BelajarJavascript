// Method Filter digunakan untuk filtering pada sebuah data
// method ini sama seperti forEach dan Map , tetapi method filter
// akan bernilai boolean setiap iterasinya

// function panggilFilter() {

//     let peoples = [

//         {
//             name: 'Abdull',
//             gender: 'Man'
//         },
//         {
//             name: 'Andi',
//             gender: 'Woman'
//         },
//         {
//             name: 'Dodi',
//             gender: 'Man'
//         },
//         {
//             name: 'Deni',
//             gender: 'Man'
//         },
//         {
//             name: 'Fia',
//             gender: 'Woman'
//         }

//     ];

//     let female = peoples.filter(value => {

//         return !value.name.endsWith('i')
//     })

//     console.log(female);

//     // [ { name: 'Abdull', gender: 'Man' }, { name: 'Fia', gender: 'Woman' } ]


// }

// panggilFilter()

let thisArray = ['a','a','a','a','b','b','b']

let selection = thisArray.filter(value => {

    return value == 'a'
    
})

const result = selection.length - 1

console.log(result);

// let x = result.length - 1

// console.log(x);
// console.log(x);