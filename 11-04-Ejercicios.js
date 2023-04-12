// Ejercicios asignados a mi Persona.
// Ejercicio 10
const numeroConfirmacion = (num) => num > 0 ? console.log(true) : console.log(false);   

// Ejecución de la funcion - Éxito✅
numeroConfirmacion(6);

// Ejercicio 29
const condicionNumeros = (num1, num2, bandera) => bandera === true ? console.log( Math.pow(num1, num2) ) : console.log( Math.sqrt(num1) );

// Ejecución de la funcion - Éxito✅
condicionNumeros(3, 3, false);


/*------------------------------------------------------------------------------------------------*/
// Ejercicios Propuestos de toda la Clase 😁🐣

// Ejercicio 1😀
const sumaNumeros = (num1, num2) => console.log( num1 + num2 ) ;
// Ejecución de la funcion - Éxito✅
sumaNumeros(1,2);

// Ejercicio 2😁
const tamañoCadena = (palabra) => console.log(palabra.length);
// Ejecución de la funcion - Éxito✅
tamañoCadena('Hola Mundo');

// Ejercicio 3 😄
//Declaramos el Arreglo
let array = [ 10 , 20, 30];
const sumaArreglos = (array) =>{
    let total = array.reduce((valorAnterior, valorActual) => valorAnterior + valorActual );
    console.log(total);
}

// Ejecución de la funcion - Éxito✅
sumaArreglos(array);

// Ejercicio 4 😅
const palabraInversa = (palabra) => console.log(palabra.split("").reverse().join(""));

// Ejecución de la funcion - Éxito✅
palabraInversa('roma');

// Ejercicio 5 😆
// Declaramos un arreglo
const ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const devolverPrimero = (array) => console.log(array[0]);

// Ejecución de la funcion - Éxito✅
devolverPrimero(ensalada);

// Ejercicio 6 🤨
const numeroParImpar = (num) => num % 2 === 0 ? console.log(true) : console.log(false);

// Ejecución de la funcion - Éxito✅
numeroParImpar(3);

// Ejercicio 7 😑
const numeroMayor = (num1, num2) => num1 > num2 ? console.log(num1) : console.log(num2);

// Ejecucion de la funcion -Exito✅
numeroMayor(1,2);