let gaji = 100
// gaji bisa diubah

// Pengujian kondisi 
if (gaji < 200){ 
    // Scope yang akan dijalankan jika hasil pengujian kondisi adalah benar / true
    console.log('Gaji anda saat ini : ' + gaji)
    console.log('Layak mendapatkan kenaikan sebesar 10%')
    console.log('Gaji anda setelah dinaikkan : ' + (gaji + (0.1 * gaji)))
} else {
    // Scope yang akan dijalankan jika hasil pengujian kondisi adalah salah / false
    console.log('Gaji anda saat ini : ' + gaji)
    console.log('Tidak Layak mendapatkan kenaikan sebesar 10%')
    console.log('Maka Gaji Anda Tetap : ' + gaji)
}