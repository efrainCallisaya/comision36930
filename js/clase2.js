//<
//<

let anio = prompt("ingresa tu año");
const anioActual = 2022;
let edad = anioActual-anio;
let edadrestante=0;
if(edad >= 18){
    alert("usted pasa");
}else{
    edadrestante = 18 - edad;
    alert("te falta " + edadrestante)
}


