function tugas_26() {
    
    const thisArray = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

    for (let index = 0; index < thisArray.length; index++) {
        
        let check = isFinite(thisArray[index])

        if (check === true) {
            
            console.log(
                `Angka ${thisArray[index]} NOT Infinity`
            );
        } else if (check === false) {
            
            console.log(
                `Angka ${thisArray[index]} Infinity`
            );
        }
        
    }
}

tugas_26()