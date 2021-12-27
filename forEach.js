// Perintah ForEach digunakan untuk melakukan perulangan
// perintah ini sama seperti perintah for
// tetapi perintah forEach ini membutuhkan sebuah array yang akan digunakan untuk melakukan perulangan itu

function panggilForEach() {
    
    let data = ['q','w','e','r','t','y']

    data.forEach((item, index, array) => {

        console.log(item);
        console.log(index);
        console.log(array);
    })

}

panggilForEach()

// q
// 0
// [ 'q', 'w', 'e', 'r', 't', 'y' ]
// w
// 1
// [ 'q', 'w', 'e', 'r', 't', 'y' ]
// e
// 2
// [ 'q', 'w', 'e', 'r', 't', 'y' ]
// r
// 3
// [ 'q', 'w', 'e', 'r', 't', 'y' ]
// t
// 4
// [ 'q', 'w', 'e', 'r', 't', 'y' ]
// y
// 5
// [ 'q', 'w', 'e', 'r', 't', 'y' ]