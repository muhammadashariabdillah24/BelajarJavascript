// Method Some akan mereturn nilai true jika salah satu data sudah memiliki kriteria tersebut

function panggilSome() {
    
    let product = [

        {
            nama : "Apel",
            jenis : "Buah"
        },
        {
            nama : "Asus",
            jenis : "Laptop"
        },
        {
            nama : "Realme",
            jenis : "Handphone"
        }
    ]

    console.log(
        product.some(product => product.jenis === "Handphone")
    );
}

panggilSome()

