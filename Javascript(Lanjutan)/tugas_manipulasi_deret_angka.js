// Cara 1
function deretAngka(params) {

    for (let index = 1; index <= params; index++) {

        if (index % 3 == 0) {

            console.log('NIO');
        } else if (index % 5 == 0) {

            console.log('MIC');
        } else {

            console.log(index);
        }
    }
}

deretAngka(10)
deretAngka2(20)
deretAngka2(30)


// Cara 2
function deretAngka2(num) {

    let thisArray = []

    for (let index = 1; index <= num; index++) {

        thisArray.push(index)

    }

    for (let index = 1; index <= thisArray.length; index++) {

        if (index % 3 == 0) {

            console.log('NIO');
        } else if (index % 5 == 0) {

            console.log('MIC');
        } else {

            console.log(index);
        }
    }
}

deretAngka2(10)
deretAngka2(20)
deretAngka2(30)


function deretAngka3(params) {

    let numOfArray = []

    for (let index = 1; index <= params; index++) {

        numOfArray += index
    }

    for (const key in numOfArray) {

        if (key % 3 == 0) {
            
            console.log('NIO');
        } else if (key % 5 == 0) {
            
            console.log('MIC');
        } else {

            console.log(key);
        }
    }


}

deretAngka3(10)
deretAngka3(20)
deretAngka3(30)