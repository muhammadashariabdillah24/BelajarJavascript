const minimal = function (a, b) {
    
    if (a < b) {
        return a
    } else if (b < a) {
        return b
    } else if (b == a) {
        return a
    }
}

console.log(minimal(3, 3));

const power = function (a, b) {
    
    let x = 1

    for (let index = 1; index <= b; index++) {

        x*=a
    }

    return x

}


console.log(power(7, 3));