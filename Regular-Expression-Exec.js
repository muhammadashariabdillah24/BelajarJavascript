// Method regex exec digunakan untuk mengembalikan string
// yang memiliki kecocokan jika tidak maka akan mengembalikan nilai boolean


function panggilExec() {
    
    let data = 'Belajar satu tahun bersama niomic'

    let str = new RegExp('niomic')

    console.log(str.exec(data));

}

panggilExec()
