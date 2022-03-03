function myFunction(a) {

    if (Number(a) === a && a % 1 === 0) {
        
        console.log(true);
    } else if (Number(a) === a && a % 1 !== 0) {
        
        console.log(false);
    }

}

myFunction(14.6);