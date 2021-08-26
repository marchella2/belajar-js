class Manusia {
    nama = ''
    makan(){ 
        console.log(this.nama + ' Makan ....')
    }
}

class Programmer extends Manusia {
    memprogram() {
        console.log(this.nama + ' Memprogram ....');
    }
}

let agus = new Programmer();
agus.nama = 'Agus Wahyudi'
agus.makan()
agus.memprogram()