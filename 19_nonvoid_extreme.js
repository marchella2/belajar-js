/* 
Sebuah function bisa menjadi parameter untuk memanggil function lain asalkan function yang akan menjadi parameter tersebut adalah non void (punya return value)
*/
function kali(a, b)
{
    let hasil = a*b;
    return hasil;
}

function eight(){
    return 8;
}

function lima(){
    return 5;
}

// let delapan=eight();
// let five=lima();
// let hasilPerkalian = kali(delapan, five);

// console.log("Hasil Kali antara "+delapan+ ' dengan '+five+ ' adalah ' + hasilPerkalian);

// Cara memanggil dengan non void extreme
let hasilPerkalian = kali(eight(), lima())
console.log("Hasil Kali antara "+eight()+ ' dengan '+lima()+ ' adalah ' + hasilPerkalian);