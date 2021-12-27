// Method eval digunakan untuk mengevaluasi ekspresi
// atau pernayataan didalam javascript
// dan method ini bisa dianalogikan sebagai parser
// Dan juga bisa menambahkan angka yang ada didalam string


function panggilEval() {
    
    let x = [1,2,3,4,5,6,7,8,9]

    let total = 0

    for (let index = 0; index < x.length; index++) {
        
        total += x[index]
    }

    console.log(total);
}

panggilEval()

function panggilEvalLagi() {
    
    console.log('Tanpa Method Eval '+'10 + 10');

    console.log('Dengan Method Eval ' + eval('10 + 10'));
}

panggilEvalLagi()



function panggilEval2() {
    
    // Versi Number
    console.log(20*20/2);

    // Versi String
    console.log(eval('20*20/2'));

}

panggilEval2();