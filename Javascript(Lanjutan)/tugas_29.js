function tugas_29() {
    
    let data = 'Belajar menimba ilmu programming bersama Niomic'

    let str = new RegExp(/bersama/g)

    console.log(str.exec(data));
}

tugas_29()