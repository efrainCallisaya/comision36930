

 
function card (typeCard, total) {
    if(typeCard === "CREDITO"){
        cuota = prompt("Usted puede pagar en 1,2,3,6,9,12 (CUOTAS)")
        let TotalCuota = total/cuota
        return TotalCuota;
       
    }else{
        return total;
    }
}

function mensaje (totalCuota, cuota) {

    if (cuota === 0 ) {
        alert(" No puede pagar en cuotas, debe abonar la totalidad ");
    }else{
        alert("Usted debera pagar: " + totalCuota + " en " + cuota + " MESES")
    }
    

}

//////////////////////////////////////////////////////////////////////////////
const listproductos = [
    {nombre: 'GASEOSA', precio:100, cantidad:10},
    {nombre: 'PAPAS', precio:70, cantidad:10},
    {nombre: 'JUGO', precio:50, cantidad:10},
    {nombre: 'ALFAJOR', precio:40, cantidad:10},
]
let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor").toUpperCase()
let total =0
let cuota =0


while( producto != "SALIR"){
    const resultado = listproductos.filter((p)=> p.nombre.includes(producto))
    console.log(resultado);
    const compracarrito = [];
    compracarrito.push(resultado)
    console.log(compracarrito)
/* total = total + precio;
   alert("precio en carrito:  " + total)
   */ 
   producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")

}
