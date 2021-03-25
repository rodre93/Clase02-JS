let name = prompt("Ingrese nombre");
let surname = prompt("Ingrese apellido");

// Operador AND que chequea que ambas condiciones sean verdaderas
if ( (name != "") &&  (surname !="") ) {
    alert("Hola señor: " + name + " " + surname);
} else {
    alert("Por favor ingrese los datos");
}

let nombreIngresado = prompt("Ingrese nombre solamente");
let edad = parseInt(prompt("Ingrese edad"));

if( (edad > 18) && ((nombreIngresado =="ALE") || (nombreIngresado =="ale")) ){
    alert("Hola Ale")
}
