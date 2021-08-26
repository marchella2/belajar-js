// Cara membuat function 
function contohFunction()
{
    console.log('contohFunction() dipanggil ...')
}

// Cara memanggil function secara langsung
contohFunction();

// Cara memanggil function dengan looping
for (let penghitung = 0; penghitung<10; penghitung++){
    console.log("Pemanggilan ke - " + penghitung);
    contohFunction();
}