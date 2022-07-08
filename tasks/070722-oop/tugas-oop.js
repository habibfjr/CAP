class Supermarket {
    item=[
        ['Arabica', 20],
        ['Robusta', 15]
    ]
    constructor(namaKopi, jumlahKopi)
    {
        this.namaKopi=namaKopi;
        this.jumlahKopi=jumlahKopi;
    }

    cekStock(){

        for (let i=0;i<this.item.length;i++){

         if(this.item[i][0] === this.namaKopi &&
            (this.item[i][1] < this.jumlahKopi)){
                                
                return `Pesan item sebanyak = ${this.item[i][1] + this.item[i][1]*2}`

            } else if (this.item[i][0] === this.namaKopi &&
                (this.item[i][1] >= this.jumlahKopi)){

                    return `Stok ${this.item[i][0]} tersisa = ${this.item[i][1] - this.jumlahKopi}`

            } else{

                return ("Item tidak tersedia")
                
            }
         }   
}
    }

let cafe = new Supermarket ('Arabica', 20)
console.log(cafe.cekStock())