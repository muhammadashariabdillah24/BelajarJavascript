// Class adalah template untuk membuat object. Satu class mempunyai satu atau lebih properti atau fungsi.
// Satu class dapat menghasilkan banyak object. 
// Semua object mempunyai properti dan fungsi yang sama

class Handphone {

    constructor() {

        this.name = "Realme"
        this.color = "Green"
        this.ram = 4

    }

    callHandphone() {

        console.log(
            `Nama HandPhone : ${this.name} \n`,
            `Warna HandPhone : ${this.color} \n`,
            `Besar RAM : ${this.ram}`
        );
    }
}

const hp = new Handphone()

hp.callHandphone()

// Nama HandPhone: Realme
// Warna HandPhone: Green
// Besar RAM: 4