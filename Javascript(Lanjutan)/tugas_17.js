function lowerUpper() {
    
    let kataPertama = "Saya beLajar bahaSa peMrograman deNgan khUsuk"

    console.log(kataPertama.toLowerCase());
    console.log(kataPertama.toUpperCase());

    let kataKedua = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual"

    console.log(kataKedua.toLowerCase());
    console.log(kataKedua.toUpperCase());
}

lowerUpper()


function panggilCCA() {
    
    let kata = "Lorem Ipsum"

    for (let index = 0; index < kata.length; index++) {

        console.log(
            kata.charCodeAt(index)
        );
    }
}

panggilCCA()