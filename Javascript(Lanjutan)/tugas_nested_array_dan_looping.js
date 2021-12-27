function panggilNestedArray(params) {

    let accNumber = []

    for (let index = 0; index < 3; index++) {

        accNumber += params[index]

        for (let indax = 0; indax < 2; indax++) {

            console.log(`id : ${params[index][index]}`);
            console.log(`name : ${params[index][index]}`);
            console.log(`company : ${params[index][index]}`);
            
        }

    }

    return accNumber
}


var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]


console.log(

    panggilNestedArray(nestedArray)
);