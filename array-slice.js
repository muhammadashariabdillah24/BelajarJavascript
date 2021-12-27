// Fungsi slice adalah digunakan untuk mengcopy isi array

function panggilSlice() {
    
    let data = ['a','b','c','d','e','f']
    data = data.slice(0, 3)
    return data
}

console.log(
    panggilSlice()
);

function panggilSlice2() {
    
    let data = ['g','h','i','j','k','l','m','n']

    data = data.slice()

    return data
}

console.log(
    panggilSlice2()
);

function panggilSlice3() {
    
    let data = [1,2,3,4,5,6,7,8,9,10]

    data = data.slice(5)

    return data
}

console.log(
    panggilSlice3()
);