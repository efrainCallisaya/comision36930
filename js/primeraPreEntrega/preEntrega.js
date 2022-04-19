

 
function card (typeCard, total) {
    if(typeCard === "CREDITO"){
        cuota = prompt("Usted puede pagar en 1,2,3,6,9,12 (CUOTAS)")
        let TotalCuota = total/cuota
        return TotalCuota;
       
    }else{
        return total;
    }
}

function produto () {
    switch(producto) {
        case "GASEOSA":
           precio = 100
           break
        case "PAPAS":
           precio = 70
           break
        case "JUGO":
           precio = 50
           break
        case "ALFAJOR": 
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

let usuario = prompt('ingrese el usuario')
let contrasenia = prompt('ingrese la contraseña')
let usseradmin = 'admin'
let passwordadmin ='123456'
let arraycarrito=[]
if(usuario ==usseradmin && contrasenia == passwordadmin){
    class Producto {
        constructor(nombre, precio, cantidad) {
    
            this.nombre = nombre.toUpperCase();
            this.precio = parseFloat(precio);
            this.cantidad = cantidad;
        }
        addIva(){
            this.precio = this.precio * 1.21;
        }
    }
    const listproductos = [
        {nombre: 'GASEOSA', precio:100, cantidad:10},
        {nombre: 'PAPAS', precio:70, cantidad:10},
        {nombre: 'JUGO', precio:50, cantidad:10},
        {nombre: 'ALFAJOR', precio:40, cantidad:10},
    ]
    const addproductatlist = [];
    const addIVA =0;
    while(true) {
        let Nnombre = prompt("Ingrese Un Nuevo Producto");
        let Pprecio = prompt("Ingrese El precio del producto");
        let Ccantidad = prompt("Ingrese la cantidad");
        addproductatlist.push ( new Producto(Nnombre, Pprecio, Ccantidad));
        if(prompt('Desea Agregar un nuevo PRODUCTO?, Ingrese NO para finalizar').toUpperCase() == 'NO') {
            break
        };
    }
    if (prompt('Desea Agregar iva a los productos ingresados?').toUpperCase() == "SI"){
        for (const addIVA of addproductatlist) {
            addIVA.addIva();   
        }
        console.log(addproductatlist);
        
    }else{
        console.log(addproductatlist); 
    }
    const actualitylist = listproductos.concat(addproductatlist);
    console.log(actualitylist);
    
}else{
    let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor").toUpperCase()
let total =0
let cuota =0


while( producto != "SALIR"){
    const resultado = listproductos.filter((p)=> p.nombre.includes(producto))
    console.log(resultado);
   total = total + precio;
   alert("precio en carrito:  " + total)
   producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
 }

let typeCard = prompt("Ingrese tipo de tarjeta(DEBITO o CREDITO)");
const totalCuota = card (typeCard, total)
mensaje(totalCuota, cuota);
}