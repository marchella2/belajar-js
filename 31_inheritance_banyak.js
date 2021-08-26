class MahlukHidup
{
    bernafas() {
        console.log(this.nama + ' Bernafas ....')
    }
}

class Manusia extends MahlukHidup {
    nama = ''
    makan(){ 
        console.log(this.nama + ' Makan ....')
    }
}

class Programmer extends Manusia {
    memprogram() {
        console.log(this.nama + ' Memprogram ....');
    }
}

class ProgrammerKekinian extends Programmer{
    mainTiktok() {
        console.log(this.nama + ' Main Tik Tok....')
    }

    uji() {
        // Untuk mengakses method parent gunakan super
        super.bernafas();
        super.makan();
        super.memprogram();
        // Untuk mengakses method sendiri gunakan this 
        this.mainTiktok();
    }
}

let agus = new Programmer();
agus.nama = 'Agus Wahyudi'
agus.bernafas()
agus.makan()
agus.memprogram()

let dedi = new ProgrammerKekinian()
dedi.nama = 'Dediiiiiii'
// dedi.bernafas()
// dedi.makan()
// dedi.memprogram()
// dedi.mainTiktok()
dedi.uji();