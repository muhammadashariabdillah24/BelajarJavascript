const arrNull = [];

function callConcat() {
    return arrNull.concat([[1]], [2, [3]]);
}

console.log(
    callConcat()
);

