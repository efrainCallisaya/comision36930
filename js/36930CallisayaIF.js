//<
//<


let lado1 = prompt("Ingrese el primer lado del triangulo")
let lado2 = prompt("Ingrese el segundo lado del triangulo")
let lado3 = prompt("Ingrese el tercer lado del triangulo")




if(lado1==lado2 && lado2 == lado3){
    alert("El Triangulo es equilatero") 
}else if (lado1==lado2 && lado2!=lado3 ||lado1==lado3 && lado1!=lado2 ||lado3==lado2 && lado3!=lado1 ){
    alert("el triangulo es isosceles")
}else{
    alert("el traingulo es Escaleno")
}

