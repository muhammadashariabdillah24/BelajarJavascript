const restaurant = {
    name : 'Kikil Bakar',
    city : 'Jogja',
    "favorite drink" : 'Teh Jus',
    "favorite food" : 'Daging Sapi Asap',
    isVegan : true
}

const name = restaurant["name"]
const favoriteDrink = restaurant["favorite drink"]

console.log(name);
console.log(favoriteDrink);

// Sebelum properti city dihapus dari object Restaurant
console.log(restaurant);

// Hapus properti city pada object restaurant
delete restaurant.city

// Sesudah properti city dihapus dari object Restaurant
console.log(restaurant);