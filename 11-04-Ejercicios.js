// Ejercicios asignados a mi Persona.
// Ejercicio 10
const numeroConfirmacion = (num) => num > 0 ? console.log('true') : console.log('false');   

// Ejecución de la funcion - Éxito✅
numeroConfirmacion(6);

// Ejercicio 29
const condicionNumeros = (num1, num2, bandera) => bandera === true ? console.log(Math.pow(num1, num2)) : console.log(Math.sqrt(num1));

// Ejecución de la funcion - Éxito✅
condicionNumeros(3, 3, false);


/*------------------------------------------------------------------------------------------------*/
// Ejercicios Propuestos de toda la Clase 😁🐣

// Ejercicio 1😀
const sumaNumeros = (num1, num2) =>{
    console.log(num1+num2);
}

// Ejecución de la funcion - Éxito✅
SUMA(1,2);

// Ejercicio 2😁
const tamañoCadena = (palabra) =>{
    console.log(palabra.length);
}

// Ejecución de la funcion - Éxito✅
tamañoCadena('Hola Mundo');

// Ejercicio 3
const sumaArreglos = (array) =>{
    let element = 0;
    for (let i = 0; i < array.length; i++) {
        element += array[i];
    }
    console.log(element);
}

//Declaramos el Arreglo
let array = [10,20,30];
// Ejecución de la funcion - Éxito✅
sumaArreglos(array);