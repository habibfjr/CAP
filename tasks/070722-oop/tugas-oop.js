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
         if(this.item[i][0] === this.namaKopi){
            console.log(this.item[i][0])
            if(this.item[i][1] < this.jumlahKopi){
                console.log(this.item[i][1]) 
                
                return `jumlah barang = ${this.item[i][1]}` 
            }
         }   
}
    }

    kurangiStock(){
        for(let i=0;i<this.item.length;i++){
            if(this.item){
            let x = this.item[i][1]-this.jumlahKopi;
        }
        }
        return `sisa barang =${x}`
    }

    stockEmpty(){
        
    }
}

let cafe = new Supermarket ('Arabica', 30)
console.log(cafe.cekStock())