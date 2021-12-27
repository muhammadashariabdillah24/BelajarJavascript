function panggilRegexToken2() {
    
    let data = 'qwert123 yuiop456 !@#$%^_'

    // angka
    console.log('angka');
    console.log(data.match(/\d/g));

    // selain angka
    console.log('selain angka');
    console.log(data.match(/\D/g));

    // angka , huruf, dan underscore
    console.log('angka , huruf, dan underscore');
    console.log(data.match(/\w/.g));

    // selain angka, huruf, dan underscore
    console.log('selain angka, huruf, dan underscore');
    console.log(data.match(/\W/g));

    // whitespace
    console.log('whitespace');
    console.log(data.match(/\s/g));

}

panggilRegexToken2()