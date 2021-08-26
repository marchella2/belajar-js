let nilai='c'

switch(nilai.toLowerCase()){ // toLowerCase digunakan agar huruf besar dan huruf kecil kedeteksi
    case 'a':
        console.log('Nilai Anda : ' + nilai + ', predikat : ISTIMEWA')
        break;
    case 'b':
        console.log('Nilai Anda : ' + nilai + ', predikat : BAIK')
        break;
    case 'c' :
        console.log('Nilai Anda : ' + nilai + ', predikat : CUKUP')
        break;
    case 'd' :
        console.log('Nilai Anda : ' + nilai + ', predikat : KURANG')
        break;
    case 'e':
        console.log('Nilai Anda : ' + nilai + ', predikat : GAGAL')
        break;
    default:
        console.log('Nilai Anda : ' + nilai + ', predikat : SALAH NILAI / TIDAK VALID')
        break;
}