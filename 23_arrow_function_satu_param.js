function functionBiasaSatuParameter(nama){
    console.log('NAMA : ' + nama);
}

arrowFunctionSatuParameter=(nama)=>{
    console.log('NAMA : ' + nama)
}

// Bisa tidak menggunakan kurung apabila hanya ada 1 parameter
arrowFunctionSatuParameterLagi=nama=>{
    console.log('NAMA : ' + nama)
}

functionBiasaSatuParameter('Function Biasa')
arrowFunctionSatuParameter('Arrow Function')
arrowFunctionSatuParameterLagi('Arrow Function Satu Parameter tanpa ()')