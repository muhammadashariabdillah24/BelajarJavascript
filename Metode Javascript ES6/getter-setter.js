// Get dan setter adalah sebuah akses property (Access Property) pada sebuah class atau object
// Get akan bekerja ketika class / objcet dibaca
// Set akan bekerja ketika class / objcet sudah ditetapkan


// Class
class Animal {

    constructor(){

        this.name = ''
    }

    get _thisname() {

        return this.name
    }

    set _thisname(n) {
        
        this.name = `${n} adalah nama hewannya`
    }
}

const callName = new Animal()

callName._thisname = 'Koala'

console.log(callName);

console.log('\n=============================\n');

class Vehicle {

    constructor(name){

        this.name = name
    }

    get _getName(){

        return this.name
    }

    set _setName(value){

        this.name = value
    }
}

let callVehicle = new Vehicle("Lexi")

console.log(callVehicle);


console.log('\n=============================\n');

class Laptop {

    constructor(name){

        this.laptopName = name
    }

    get _getLaptop(){

        return this._laptopName
    }

    set _setLaptop(value){

        this._getLaptop = value
    }
}

const callLaptop = new Laptop('Asus')

callLaptop.laptopName
console.log(callLaptop);

console.log('\n=============================\n');

// Function
let myHandphone = {
    name : 'Realme',
    color : 'Green',

    get _printName() {
        return `${this.name} ${this.color}`
    },

    set _printName(value){

        [this.name, this.color] = value.split(' ')
    }
}

myHandphone._printName = "Asus Merah"

console.log(myHandphone.name);
console.log(myHandphone.color);