class Mahasiswa {
    // Nama kampus seragam untuk semua object, oleh karena itu deklarasi dilakukan di luar constructor
    namaKampus = 'Universitas Negeri Di Awan'
    
    // Nama dan nim bersifat unik untuk masing-masing object. Oleh karena itu, deklarasi di dalam constructor
    constructor(a, b){
        this.namaMahasiswa = a;
        this.nim=b;
    }

    cetakIdentitas() {
        console.log('Nama Kampus : ' + this.namaKampus);
        console.log('Nama Mahasiswa : ' + this.namaMahasiswa);
        console.log('Nomor Mahasiswa : ' + this.nim);
        console.log("=======================================");
    }
}

let adi = new Mahasiswa('Adi Prasetyo', '11111');
let agung = new Mahasiswa('Agung Sedayu', '22222');

adi.cetakIdentitas();
agung.cetakIdentitas();