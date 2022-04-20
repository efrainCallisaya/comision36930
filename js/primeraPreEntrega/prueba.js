

//////////////////////////////////////////////////////////////////////////////
const listproductos = [
    {nombre: 'GASEOSA', precio:100, cantidad:10},
    {nombre: 'PAPAS', precio:70, cantidad:10},
    {nombre: 'JUGO', precio:50, cantidad:10},
    {nombre: 'ALFAJOR', precio:40, cantidad:10},
]
let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor").toUpperCase()
let cuota =0
const compracarrito = [];


while( producto != "SALIR"){
    const resultado = listproductos.filter((p)=> p.nombre.includes(producto))
    compracarrito.push(resultado)
    console.log(compracarrito)
/* total = total + precio;
   alert("precio en carrito:  " + total)
   */ 
   
   producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor").toUpperCase()
}
const total= compracarrito.reduce((acc, comp) => acc + comp.precio, 0)
console.log(total) 