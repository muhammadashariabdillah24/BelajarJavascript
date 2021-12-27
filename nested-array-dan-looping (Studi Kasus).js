// Cara 1
function panggilNestedArray(params) {

    for (let index = 0; index < params.length; index++) {

        console.log(`id : ${params[index][0]}`);
        console.log(`name : ${params[index][1]}`);
        console.log(`company : ${params[index][2]}`);
        console.log('\n');
    }
}

let dataArray = [
    [1, "Mark Zuckerberg", "Facebook"],
    [2, "Elon Musk", "Tesla"],
    [3, "Bill Gates", "Microsoft"],
    [4, "Steve Jobs", "Apple"]
]

panggilNestedArray(dataArray)

// Cara 2
function panggilNestedArray2(params) {
    
    return params.map((item) => {

        console.log(`id : ${item[0]}`);
        console.log(`name : ${item[1]}`);
        console.log(`company : ${item[2]}`);
        console.log('\n');
        
    })
}

panggilNestedArray2(dataArray)