
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
