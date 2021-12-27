// let namaDepan = ''
// let namaTengah = 'Ashari'
// let namaBelakang = ''

// const thisData = () => {

//     return new Promise((accept, reject) => {

//         if (namaDepan !== '' && namaDepan == 'Muhammad') {

//             accept(`Nama Depan = ${namaDepan}`);
//         } else if (namaTengah !== '' && namaTengah == 'Ashari') {

//             accept(`Nama Tengah = ${namaTengah}`);
//         } else if (namaBelakang !== '' && namaBelakang == 'Abdillah') {

//             accept(`Nama Belakang = ${namaBelakang}`);
//         } else {

//             reject(`Semua Data Tidak Sesuai, Tolong Coba Lagi`)
//         }
//     })
// }


// const check = async () => {

//     try {

//         const check = await thisData()

//         console.log(check);
//     } catch (error) {

//         console.log(`Terdapat Error Pada : ${error}`);
//     }
// }

// check()

// const coba = new Promise(resolve => {

//     setTimeout(() => {

//         resolve('Selesai');

//     }, 3000)
// })

// // console.log(coba);
// coba.then(() => console.log(coba))


const timer = () => {

    return new Promise((resolve, reject) => {

        let timer = 5000

        if (timer > 3000) {

            // setTimeout(() => {

                resolve('Selesai')
            // }, timer)
        } else {
            reject('Tidak Selesai')
        }
    })
}


// Jika Ingin Menggunakan Varibale Untuk Menentukan Sebuah Promise Resolve Atau Reject
// Makan Sebaiknya Menggunakan ThenCatch

const checkTimer = timer();

    checkTimer
        .then(() => console.log(checkTimer))
        .catch(() => console.error(checkTimer))
        .finally(() => {
            console.log('Oke Program telah selesai');
        })


// Jika Ingin Pakai Async/Awai Harus Menggunkan Function
// Dan Untuk Menentukan Resolve atau Reject Dari Sebuah Promise
// Harus Menggunakan TryCatch Bukan ThenCatch

// const checkTimer = async () => {

//     try {

//         let checkNow = await timer();

//         console.log(`Promise : ${checkNow}`);
//     } catch (error) {

//         console.error(error);
//     }
// }

// checkTimer()

