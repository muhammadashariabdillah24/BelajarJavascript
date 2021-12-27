// Method reduce right digunakan untuk menerapkan fungsi accumulator dan setiap nilai
// dari kanan ke kiri untuk menguranginya menjadi nilai tunggal 

function panggilReduceRight() {
    
    let arrayOne = [[0,3],[2,3],[4,5]].reduceRight((acc, curr) => 

        acc.concat(curr)
    )

    console.log(arrayOne);
}

panggilReduceRight()


function panggilReducerRightLagi() {
    
    let arrayTwo = [2,3,4,5,6,7].reduceRight(
        (acc, curr) => acc + curr
    )

    console.log(
        arrayTwo
    );
}

panggilReducerRightLagi()