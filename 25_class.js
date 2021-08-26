class Manusia{
    // Variable/fields di dalam class TIDAK PERLU menggunakan keyword "var" atau "let"
    nama = ''
    mata = 2
    kaki = 1
    tangan = 2

    // Function / method di dalam class TIDAK PERLU menggunakan keyword "function"
    makan(){
        console.log(this.nama+' sedang makan')
    }

    tidur(){
        console.log(this.nama+' sedang tidur')
    }
}

// Contoh cara membuat object dari sebuah class yang bernama manusia
let amir = new Manusia();

// contoh mengakses field bernama "nama" dari object
amir.nama = 'Amir Mahmud'

// Contoh memanggil method yang dimiliki oleh sebuah object
amir.makan()
amir.tidur()