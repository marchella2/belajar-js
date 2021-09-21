let dataKaryawan = {
    nip: '123', 
    nama: 'Wawan Setiawan',
    perusahaan: 'PT. Fiktif Systems',
    alamat: {
        jalan: 'Jl Pelan-pelan tapi pasti No.7',
        kota: 'Jakarta Selatan',
        propinsi: 'DKI Jakarta'
    },
    // Membuat array di JSON 
    tanggungan:[
        {nama: 'Nurhayati', status: 'Istri'},
        {nama: 'Agung', status: 'Anak'},
        {nama: 'Setyo', status: 'Anak'}
    ]
}

console.log('NIP                 : ' + dataKaryawan.nip)
console.log('Nama                : ' + dataKaryawan.nama)
console.log('Perusahaan          : ' + dataKaryawan.perusahaan)
console.log('Jalan               : ' + dataKaryawan.alamat.jalan)
console.log('Kota                : ' + dataKaryawan.alamat.kota)
console.log('Propinsi            : ' + dataKaryawan.alamat.propinsi)
console.log('Nama Tanggungan 1   : ' + dataKaryawan.tanggungan[0].nama)
console.log('Status Tanggungan 1 : ' + dataKaryawan.tanggungan[0].status)
console.log('Nama Tanggungan 2   : ' + dataKaryawan.tanggungan[1].nama)
console.log('Status Tanggungan 2 : ' + dataKaryawan.tanggungan[1].status)
console.log('Nama Tanggungan 3   : ' + dataKaryawan.tanggungan[2].nama)
console.log('Status Tanggungan 3 : ' + dataKaryawan.tanggungan[2].status)
