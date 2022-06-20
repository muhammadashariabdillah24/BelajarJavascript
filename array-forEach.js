// Method ForEach digunakan untuk mengulang sebauh array berdasarkan panjang dari array tersebut


function panggilForEach() {

    let thisArray = ['Buaya','Kijang','Kelinci','Badak']

    thisArray.forEach((item ,value, index) => {

        console.log(`${index} . ${value} \n ${item}`);
    })
}

panggilForEach()


// Buaya,Kijang,Kelinci,Badak . 0 
//  Buaya
// Buaya,Kijang,Kelinci,Badak . 1 
//  Kijang
// Buaya,Kijang,Kelinci,Badak . 2 
//  Kelinci
// Buaya,Kijang,Kelinci,Badak . 3 
//  Badak