



let producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
let total =0


while( producto != "SALIR"){
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
  
  total = total + precio;
  alert("precio encarrito " + total)
  producto = prompt("Ingrese un producto 'gaseosa, papas, jugo, alfajor")
}

if(precio==0){
   alert("dale pa Comprate algo con un refresh a la pagina ")
}else {
   alert("precio Final de compra " + total)
}



