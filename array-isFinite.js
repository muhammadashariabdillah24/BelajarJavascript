// Method isFinite untuk mereturn nilai true jika terdapat data negatif isFinite (tidak terbatas), positif isFinite (tidak terbatas)
//  atau not number (NaN) dan akan bernilai false jika memiliki data
// yang finite (terbatas)

function panggilIsFinite() {
    
    let a = isFinite([1,2,3,4,5])
    let b = isFinite(["jakarta","lampung","depok"])
    let c = isFinite([1,2,3,"Hello","Niomic"])
    let d = isFinite(-99999)

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

panggilIsFinite()