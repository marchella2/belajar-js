let jumlahPutaran = 20;

let penghitung = 0;

while(penghitung < jumlahPutaran){
    penghitung++
    if ((penghitung % 2) == 0){
        // Jika penghitung adalah genap, loop silahkan terus berputar tanpa mencetak
        continue;
    } else {
        // Jika penghitung adalah ganjil, silahkan dicetak
        console.log("Angka = " + penghitung);
    }
}