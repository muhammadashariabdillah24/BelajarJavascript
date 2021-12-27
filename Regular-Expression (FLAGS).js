function panggilRegexWithFlags() {
    
    let data = 'abcdefghijklmnopqrstuvwxyz'

    console.log(data.search(/K/));
    console.log(data.search(/K/i));
    console.log(data.search(/k/));
}

panggilRegexWithFlags()