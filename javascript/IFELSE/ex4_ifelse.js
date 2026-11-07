// let compra = {
//     valor : 150,
//     desconto : 0,
//     total : this.valor + this.desconto,

//     calculo : function(){
//         switch (this.valor){

//             case this.valor > 100 && this.valor <=300:
//                 console.log(this.total)
//                 this.desconto = 0.1 * this.valor
//                 break
//             case this.valor >300:
//                 console.log(this.total)
//                 this.desconto = 0.15 * this.valor
//                 break
//         }
//     },

//     impressao: function(){
//         console.log(`Valor: ${this.valor}`)
//         console.log(`Desconto: ${this.desconto}`)
//         console.log(`Total: ${this.total}`)
//     }
// }

// compra.calculo()
// compra.impressao()

let compra = {
    valor: 350,
    desconto: 0,
    total: 0,

    calculo: function () {
        if (this.valor <= 100) {
            this.desconto = 0;
        } else if (this.valor <= 300) {
            this.desconto = this.valor * 0.1;
        } else {
            this.desconto = this.valor * 0.15;
        }

        this.total = this.valor - this.desconto;
    },

    impressao: function () {
        console.log(`Valor: ${this.valor}`);
        console.log(`Desconto: ${this.desconto}`);
        console.log(`Total: ${this.total}`);
    }
};

compra.calculo();
compra.impressao();