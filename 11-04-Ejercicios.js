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
const sumaNumeros = (num1, num2) => num1 + num2 ;
// Ejecución de la funcion - Éxito✅
console.log(sumaNumeros(1,2)); 

// Ejercicio 2😁
const tamañoCadena = (palabra) => palabra.length ;
// Ejecución de la funcion - Éxito✅
console.log(tamañoCadena('Hola Mundo')); 

// Ejercicio 3 😄
//Declaramos el Arreglo
let array = [ 10 , 20, 30];
const sumaArreglos = (array) =>{
    let total = array.reduce((valorAnterior, valorActual) => valorAnterior + valorActual );
    return total;
}

// Ejecución de la funcion - Éxito✅
console.log(sumaArreglos(array));

// Ejercicio 4 😅
const palabraInversa = (palabra) => palabra.split("").reverse().join("");

// Ejecución de la funcion - Éxito✅
console.log(palabraInversa('roma'));

// Ejercicio 5 😆
// Declaramos un arreglo
const ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const devolverPrimero = (array) => array[0];

// Ejecución de la funcion - Éxito✅
console.log(devolverPrimero(ensalada));

// Ejercicio 6 🤨
const numeroParImpar = (num) => num % 2 === 0 ? true : false;

// Ejecución de la funcion - Éxito✅
console.log(numeroParImpar(3));

// Ejercicio 7 😑
const numeroMayor = (num1, num2) => num1 > num2 ? num1 : num2;

// Ejecucion de la funcion -Exito✅
console.log(numeroMayor(1,2));

// Ejercicio 8 😶
const esPalindromo = (cadena) => cadena.split('').reverse().join('') === cadena;

// Ejecucion de la funcion -Exito✅
console.log(esPalindromo('1001'));

// Ejercicio 9 🫥
// Declaramos el arreglo 
const foodEmojis = ["🍔", "🍟", "🌭", "🍕", "🌮", "🍣", "🍱", "🥪", "🥞", "🍗"];

const elementoArreglo = (array) => array.length;

// Ejecucion de la funcion -Exito✅
console.log(elementoArreglo(foodEmojis));

// Ejercicio 11 🙄
const unirCadenas = (cadena1, cadena2) => cadena1 + cadena2;

// Ejecucion de la funcion -Exito✅
console.log(unirCadenas("Hola,", " Mundo"));

// Ejercicio 12 😏
// Declaramos un arreglo
const animalEmojis = ["🐶", "🐱", "🐰", "🐻", "🐨", "🐼", "🐯", "🦁", "🐮", "🐷"];

const ultimoElemento = (array) => {
    let posicionAuxi = array.length - 1;
    return array[posicionAuxi];
}
// Ejecucion de la funcion -Exito✅
console.log(ultimoElemento(animalEmojis)); 

// Ejercicio 13 😣
const buscarA = (cadena) => {
     return cadena.includes('a') || cadena.includes('A')  ? true : false;
}

// Ejecucion de la funcion -Exito✅
console.log(buscarA('Holo')); 
// Retorna false
console.log(buscarA('HAlo')); 
// Retorna true
console.log(buscarA('Halo')); 
// Retorna true