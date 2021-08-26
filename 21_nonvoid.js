function cetak(x, y, z){
    console.log('x : ' +x+ ' y : ' + y + ' z : ' + z);
}

function namaku(){
    let nama = 'John Wick';
    return nama;
}

function keterangan(){
    return 'umur'
}

function ten(){
    return 10;
}

// contoh memanggil function dengan parameter function lain yang nonvoid
cetak(namaku(), keterangan(), ten());

// contoh memanggil function dengan parameter konstanta/literal/value
cetak('aaa', 'bbb', 'ccc');

let varSatu = 100
let varDua = 'Jakarta'
let varTiga = false

// Contoh memanggil function dengan parameter berupa variable
cetak(varSatu, varDua, varTiga);

// Contoh memanggil function dengan parameter campuran
cetak(namaku(), 'Surabaya', varSatu)