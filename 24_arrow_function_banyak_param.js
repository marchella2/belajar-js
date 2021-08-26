function functionBiasaBanyakParameter(a, b)
{
    console.log('Function biasa dengan parameter '+a+' dan '+b)
}

arrowFunctionBanyakParameter=(a, b)=>{
    console.log('Arrow function dengan parameter '+a+ ' dan ' +b)
}

functionBiasaBanyakParameter('JAKARTA', 'BANDUNG')
arrowFunctionBanyakParameter('BANDUNG', 'SEMARANG')

/* 
KODE DI BAWAH INI AKAN ERROR, KARENA JUMLAH PARAMETER LEBIH DARI 1
JIKA JUMLAH PARAMETER LEBIH DARI 1, WAJIB MENGGUNAKAN TANDA()

arrowFunctionBanyakParameter=a, b=>{
    console.log('Arrow function dengan parameter '+a+ ' dan ' +b)
}
*/