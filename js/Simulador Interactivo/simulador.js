

 
function card (typeCard, total) {
    if(typeCard === "CREDITO"){
        cuota = prompt("Usted puede pagar en 1,2,3,6,9,12 (CUOTAS)")
        let TotalCuota = total/cuota
        return TotalCuota;
       
    }else{
        return total;
    }
}

function produto (produto) {
    switch(producto) {
        case "gaseosa":
           precio = 100
           break
        case "papas":
           precio = 70
           break
        case "jugo":
           precio = 50
           break
        case "alfajor": 
           precio = 40
           break
        default:
           alert ("no existe el producto");
           precio = 0
        break
    }
    return precio
}
function mensaje (totalCuota, cuota) {

    if (cuota === 0 ) {
        alert(" No puede pagar en cuotas, debe abonar la totalidad ");
    }else{
        alert("Usted debera pagar: " + totalCuota + " en " + cuota + " MESES")
    }
    

}



//////////////////////////////////////////////////////////////////////////////

let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
let total =0
let cuota =0

while( producto != "SALIR"){
    let precio = produto (produto);
   total = total + precio;
   alert("precio en carrito:  " + total)
   producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
 }

let typeCard = prompt("Ingrese tipo de tarjeta(DEBITO o CREDITO)");
const totalCuota = card (typeCard, total)
mensaje(totalCuota, cuota);
