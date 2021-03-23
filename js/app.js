let unNumero = 5;

if (unNumero > 10) {
    alert("Numero alto");
} else {
    alert("Numero menor a 10")
}

let nombre = prompt("Ingrese su nombre");

if (nombre == "") {
    alert("Che ingresa nombre!");
} else {
    alert("Hola señor " + nombre);
}

/* 
   Quiero ingresar un numero por prompt
   ver si el numero esta entre 18, 30 o es mayor 60
*/
// Ojo si no usan parseInt
let myAge = parseInt(prompt("Ingrese su edad"))


// Ojo si comparan Strings
if (myAge < 18 ){
    alert("Sos menor de edad");
}
else {
    alert("Sos mayor de edad")
}

//fdss