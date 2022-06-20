// <<============== MATH ABS ==============>>

const date = new Date();

// This today
const today = date.getDay();
const tommorow = date.getDay() - 1;

console.log(`Hasil : ${Math.abs(today - tommorow)}`);

const birthYear = 2001;
const currentYear = 2022;

console.log(`Rentan tahun : ${Math.abs(birthYear - currentYear)}`);

// <<============== MATH Array Concat ==============>>

const accomodate = []
const desaJunu = ['Doko','Kuti', 'Lolo'];
const desaJolu = ['Jhu', 'Loki', 'Poli'];

console.log(`Hasil Concat : ${accomodate.concat(desaJunu,desaJolu).reverse()}`);