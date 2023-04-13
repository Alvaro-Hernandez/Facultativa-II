// Ejercicios asignados a mi Persona.
// Ejercicio 10😶‍🌫️
const numeroConfirmacion = (num) => num >= 0 ? true : false;   

// Ejecución de la funcion - Éxito✅
console.log(numeroConfirmacion(6)); 

// Ejercicio 29
const condicionNumeros = (num1, num2, bandera) => bandera === true ? Math.pow(num1, num2) : Math.sqrt(num1);

// Ejecución de la funcion - Éxito✅
console.log(condicionNumeros(3, 3, false)); 


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

// Ejercicio 8 😶
const esPalindromo = (cadena) => console.log(cadena.split('').reverse().join('') === cadena);

// Ejecucion de la funcion -Exito✅
esPalindromo('1001');

// Ejercicio 9 🫥
// Declaramos el arreglo 
const foodEmojis = ["🍔", "🍟", "🌭", "🍕", "🌮", "🍣", "🍱", "🥪", "🥞", "🍗"];

const elementoArreglo = (array) => console.log(array.length);

// Ejecucion de la funcion -Exito✅
elementoArreglo(foodEmojis);

// Ejercicio 11 🙄
const unirCadenas = (cadena1, cadena2) => console.log(cadena1+cadena2);

// Ejecucion de la funcion -Exito✅
unirCadenas("Hola,", " Mundo");

// Ejercicio 12 😏
// Declaramos un arreglo
const animalEmojis = ["🐶", "🐱", "🐰", "🐻", "🐨", "🐼", "🐯", "🦁", "🐮", "🐷"];

const ultimoElemento = (array) => {
    let posicionAuxi = array.length - 1;
    console.log(array[posicionAuxi]);
}
// Ejecucion de la funcion -Exito✅
ultimoElemento(animalEmojis);

// Ejercicio 13 😣
const buscarA = (cadena) => {
    cadena.includes('a') || cadena.includes('A')  ? console.log(true) : console.log(false);
}

// Ejecucion de la funcion -Exito✅
ruddy('Holo');
// Retorna false
ruddy('HAlo');
// Retorna true
ruddy('Halo');
// Retorna true