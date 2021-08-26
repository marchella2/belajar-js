class Manusia{
    /* Bisa di hapus
    mata = 0
    tangan = 0
    kaki = 0
    */

    constructor (a, b, c){
        this.mata = a;
        this.tangan = b;
        this.kaki = c;
    }
}

let amir = new Manusia(3, 4, 5)
console.log('Mata Amir : ' + amir.mata);
console.log('Tangan Amir : ' + amir.tangan);
console.log('Kaki Amir : ' + amir.kaki);

let budi = new Manusia(6, 7, 8);
console.log('Mata Budi : ' + budi.mata);
console.log('Tangan Budi : ' + budi.tangan);
console.log('Kaki Budi : ' + budi.kaki);