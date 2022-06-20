let angka1 = 0;
let angka2 = 1;

for (let index = 0; index < 10; index++) {
  console.log(angka2);
  
  let angka3 = angka1 + angka2;

  angka1 = angka2;
  angka2 = angka3;
}

const angka = [1,2,3,4,5,6,7,8,9,10]

// Reduce adalah sebuah fungsi yang mengadopsi algoritma fibonnaci

const hasil = angka.reduce((acc, curr) => acc + curr)

console.log(hasil);