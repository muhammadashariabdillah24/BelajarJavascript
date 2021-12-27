// Method reduce digunakan untuk mengakumulasikan atau mengurangi nilai
// berdasarkan element di dalam array

const arrayOne = [5,5]
const reducers = (acc, curr) => acc + curr

// Cara perhitungan
// 0 + 1 + 3 + 5 + 10
console.log(
    arrayOne.reduce(reducers)
);

// Cara Perhitungan Dengan Pendefinisian Nilai awal
// 5 + 1 + 3 + 5 + 10


function panggilReducer() {

    let x = arrayOne.reduce((acc, curr) => {
        return acc + curr
    }, 5)

    console.log(x);
}

panggilReducer()