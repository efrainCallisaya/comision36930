let cuota= 0

 
function card (typeCard, total) {
    if(typeCard === "CREDITO"){
        cuota = prompt("Usted puede pagar en 1,2,3,6,9,12 (CUOTAS)")
        let TotalCuota = total/cuota
        return TotalCuota;
       
    }else{
        alert("No puede pagar en cuotas");
        return total;
    }
}

function produto (produto) {
    switch(producto) {
        case "gaseosa":
           precio = 2
           break
        case "papas":
           precio = 4
           break
        case "jugo":
           precio = 1
           break
        case "alfajor": 
           precio = 4
           break
        default:
           alert ("no existe el producto");
           precio = 0
        break
    }
    return precio
}


//////////////////////////////////////////////////////////////////////////////

let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
let total =0


while( producto != "SALIR"){
    let precio = produto (produto);
   total = total + precio;
   alert("precio encarrito " + total)
   producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
 }

let typeCard = prompt("Ingrese tipo de tarjeta(DEBITO o CREDITO)");
const totalCuota = card (typeCard, total)
alert("Usted debera pagar: " + totalCuota + "La cantidad de CUOTAS SELECCIONADAS " + cuota + "MESES")

