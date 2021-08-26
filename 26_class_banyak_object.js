class Manusia{
    nama = ''
    mata = 2
    kaki = 1
    tangan = 2

    makan(){
        console.log(this.nama+' sedang makan')
    }

    tidur(){
        console.log(this.nama+' sedang tidur')
    }

    cetakSemuaField() {
        console.log('Nama : '+this.nama );
        console.log('Jumlah mata : ' + this.mata);
        console.log('Jumlah tangan : '+this.tangan );
        console.log('Jumlah kaki : ' + this.kaki);
    }
}

let amir = new Manusia();
let budi = new Manusia()
let charlie = new Manusia()

amir.nama = 'Amir Mahmud'
budi.nama = 'Budi Setiawan'
charlie.nama = 'Charlie Caplin'

amir.makan()
amir.tidur()
budi.makan()=
budi.tidur()
charlie.makan()
charlie.tidur()

// Quiz
amir.mata = 2;
amir.tangan = 2;
amir.kaki = 2;

amir.cetakSemuaField()