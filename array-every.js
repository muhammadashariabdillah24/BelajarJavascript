// Method Every Digunakan untuk menentukan data pada sebuah array
// apakah memiliki kriteria tertentu

function panggilEvery() {
    
    let produk = [
        
        {
            name : 'Realme',
            type : 'Handphone'
        }
    ]


    console.log(
        produk.every(value => value.type === 'Handphone')
    );
    
}

panggilEvery();

function panggilEvery2() {
    
    let barang = [

        {
            nama : 'Laptop',
            merk : 'ASUS',
            type : 'Vivobook'
        },
        {
            nama : 'Handphone',
            merk : 'ASUS',
            type : 'A5i'
        },
        {
            nama : 'Komputer',
            merk : 'ASUS',
            type : 'ROG'
        }

    ]

    let hasil = barang.every(value => value.merk === 'ASUS')

    if (hasil) {
        
        console.log('Benar');

    }

}

panggilEvery2();

























































// function panggilEvery1() {
    
//     let dataKota = [
//         {
//             nama : 'Bekasi',
//             provinsi : 'Jawa Barat'
//         },
//         {
//             nama : 'Banten',
//             provinsi : 'Jawa Barat'
//         },
//         {
//             nama : 'Jogja',
//             provinsi : 'Jawa Tengah'
//         },
//         {
//             nama : 'Solo',
//             provinsi : 'Jawa Tengah'
//         }
//     ]

//     let print = dataKota.every(value => value.nama == 'Solo')

//     console.log(print);
// }

// panggilEvery1()