let jumlahPutaran = 10;
let penghitung = 100;

// Perbedaan : For dan while jika kondisi awal sudah salah maka loop tidak akan pernah berputar
for(; penghitung<jumlahPutaran;penghitung++){
    console.log('For loop putaran ke - ' + penghitung);
}

while(penghitung < jumlahPutaran){
    console.log('While loop putaran ke - ' + penghitung);
}

// Perbedaan : Apapun kondisinya, do while akan mengeluarkan output minimal 1x berputar
do{
    console.log('Do While loop putaran ke - ' + penghitung);
    penghitung++
} while(penghitung < jumlahPutaran)
