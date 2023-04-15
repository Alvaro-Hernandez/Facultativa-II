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
const array = [ 10 , 20, 30];
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

// Ejecucion de la funcion - Exito✅
console.log(numeroMayor(1,2));

// Ejercicio 8 😶
const esPalindromo = (cadena) => cadena.split('').reverse().join('') === cadena;

// Ejecucion de la funcion - Exito✅
console.log(esPalindromo('1001'));

// Ejercicio 9 🫥
// Declaramos el arreglo 
const foodEmojis = ["🍔", "🍟", "🌭", "🍕", "🌮", "🍣", "🍱", "🥪", "🥞", "🍗"];

const elementoArreglo = (array) => array.length;

// Ejecucion de la funcion - Exito✅
console.log(elementoArreglo(foodEmojis));

// Ejercicio 11 🙄
const unirCadenas = (cadena1, cadena2) => cadena1 + cadena2;

// Ejecucion de la funcion - Exito✅
console.log(unirCadenas("Hola,", " Mundo"));

// Ejercicio 12 😏
// Declaramos un arreglo
const animalEmojis = ["🐶", "🐱", "🐰", "🐻", "🐨", "🐼", "🐯", "🦁", "🐮", "🐷"];

const ultimoElemento = (array) => {
    let posicionFinal = array.length - 1;
    return array[posicionFinal];
}

// Ejecucion de la funcion - Exito✅
console.log(ultimoElemento(animalEmojis)); 

// Ejercicio 13 😣
const buscarA = (cadena) => {
    return cadena.includes('a') || cadena.includes('A')  ? true : false;
}

// Ejecucion de la funcion - Exito✅
console.log(buscarA('Holo')); 
// Retorna false
console.log(buscarA('HAlo')); 
// Retorna true
console.log(buscarA('Halo')); 
// Retorna true

// Ejercicio 14 😥
const anagrama = (cadena1, cadena2) => {
    let cadenaOrdenada1 = cadena1.split('').sort().join('');
    let cadenaOrdenada2 = cadena2.split('').sort().join('');
    return cadenaOrdenada1 === cadenaOrdenada2;
}

// Ejecucion de la funcion - Exito✅
console.log(anagrama('dcba', 'abcd'));

// Ejercicio 15 😮
const arrayNumero = [ 18 , 2, 5];
const sumaArreglos2 = (array) =>{
    let total = array.reduce((valorAnterior, valorActual) => valorAnterior + valorActual );
    return total;
}

// Ejecucion de la funcion - Exito✅
console.log(sumaArreglos2(arrayNumero));
// Retorna 25

// Ejercicio 16 🤐
const numeroMenor = (num1, num2) => num1 < num2 ? num1 : num2;

// Ejecucion de la funcion - Exito✅
console.log(numeroMenor(1,2));
// Retorna 1
console.log(numeroMenor(2,3));
// Retorna 2

// Ejercicio 17 😯
const upperCaseCadena = (cadena) => cadena.toUpperCase();

// Ejecucion de la funcion - Exito✅
console.log(upperCaseCadena('Meylin'));
// Retorna MEYLIN

// Ejercicio 18 😪
const lowerCaseCadena = (cadena) => cadena.toLowerCase();

// Ejecucion de la funcion - Exito✅
console.log(lowerCaseCadena('ALVARO'));
// Retorna alvaro

// Ejercicio 19 😫
const numDivisible = (num) => num % 3 == 0 && num % 5 == 0 ? true : false;

// Ejecucion de la funcion - Exito✅
console.log(numDivisible(15));
// Retorna true
console.log(numDivisible(10));
// Retorna false

// Ejercicio 20🥱
// Creamos un arreglo
const transportEmojis = ["🚗", "🚕", "🚙", "🚌", "🚎", "🚑", "🚒", "🚓", "🚚", "🚛"];

const arregloInvertido = (array) => array.slice().reverse();

// Ejecucion de la funcion - Exito
console.log(arregloInvertido(transportEmojis));
// Retorna la copia del arreglo invertido
console.log(transportEmojis);
// Retorna la verificacion de que el arreglo original no se mutó.

// Ejercicio 21 😴
// Creamos el arreglo
const weatherEmojis = ["☀️", "⛅️", "🌧️", "⛈️", "❄️", "🌪️", "🌈", "🌊", "💨", "☔️"];
const ultimoElemento2 = (array) => {
    let posicionFinal = array.length - 1;
    return array[posicionFinal];
}

// Ejecucion de la funcion - Exito✅
console.log(ultimoElemento2(weatherEmojis)); 

// Ejercicio 22 😌
const numeroExponente = (num) => num < 0 ? Math.pow(num, 3) : Math.pow(num, 2);

// Ejecucion de la funcino - Exito✅
console.log(numeroExponente(-3));
// Retorna -27
console.log(numeroExponente(2));
// Retorna 4

