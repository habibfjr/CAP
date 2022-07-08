const anggora={
    warna:'putih',
    bulu:'lebat',
    ekor:'panjang'
}
console.log(anggora);

class Cat{
    _dna='unknown';
    #namaKakek='samsul';
    constructor(nama,warna,ekor,umur,bulu)
    {
        this.nama=nama;
        this.warna=warna;
        this.ekor=ekor;
        this.umur=umur;
        this.bulu=bulu;
    }
    ubahWarna(){
        this.warna = 'red'
        return ('color has changed to red')
    }

    takeABath(){
        return ('cat is clean')
    }
}

let angora = new Cat('a','blk','long','5','pendek');
console.log(angora.ubahWarna())



// public ; protected use _ ; private use #
// 

class PersianCat extends Cat{
    constructor(nama,warna,ekor,umur,bulu){
        super(nama,warna,ekor,umur,bulu)
    }

    takeABath(){
        return ('cat is clean')
    }
}
let test = new PersianCat('b','wht','sht','2','lebat')
console.log(test.takeABath())
