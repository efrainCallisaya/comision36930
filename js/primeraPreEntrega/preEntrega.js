
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
    const listproductos = [
        {nombre: 'GASEOSA', precio:100, cantidad:10},
        {nombre: 'PAPAS', precio:70, cantidad:10},
        {nombre: 'JUGO', precio:50, cantidad:10},
        {nombre: 'ALFAJOR', precio:40, cantidad:10},
    ]
    let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor").toUpperCase()
    let cuota = 0
    const compracarrito = [];
    
    
    while( producto != "SALIR"){
        const resultado = listproductos.find((p)=> p.nombre == producto)
        compracarrito.push(resultado)
        
    /* total = total + precio;
       alert("precio en carrito:  " + total)
       */ 
       
       producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor").toUpperCase()
    }
    console.log(compracarrito)
    const total = compracarrito.reduce((acc, comp) => acc + comp.precio, 0)
    alert( "El total de su compra es : " + "$"+total)
}