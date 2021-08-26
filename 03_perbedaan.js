// Perbedaan var dan let
namaKaryawan='Andi'
{
    namaKaryawan='Ando'
}
console.log('Nama Karyawan ' + namaKaryawan) // Output = Ando

var namaPegawai='Joko'
{
    var namaPegawai='Jaka'
}

console.log('Nama Pegawai ' + namaPegawai) // Output = Jaka

/* Kesimpulan : 
Jika kita membuat variable menggunakan keyword var atau tanpa keyword, maka variable anda
akan bersifat "scope unware" atau tidak paham scope

Artinya, variable yang akan dikenal adalah selalu yang paling bawah, tidak peduli ada scope atau tidak
* Scope = ruang lingkup hidupnya variabel, ditandai dengan kurung kurawal {}
*/

let employeeName='Agus'
{ // Scope start
    let employeeName='Agas'
} // setelah scope end, variabel di dalam scope akan mati alias tidak terdeteksi lagi

console.log('Employee Name ' + employeeName) // Output = Agus

// Sangat disarankan untuk selalu menggunakan let ketika membuat variable di dalam Javascript