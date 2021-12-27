function tugas_28() {
    
    let str = 'abcdefghijklmnopqrstuvwxyz'

    str = str.search(/s/)

    return `Urut Ke : ${str}`
}

console.log(
    tugas_28()
);

function panggilRegexp(value) {
    
    let str = value
    let checkOne;
    let checkTwo;

    checkOne = /javascript/.test(str)
    checkTwo = /php/.test(str)

    if (checkOne) {
        
        console.log(str.replace(/javascript/i,''));

    } else if (checkTwo) {
        
        console.log(str.replace(/php/i,''));
    } else {

        console.log(str);
    }

}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");