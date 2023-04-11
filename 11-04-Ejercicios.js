
// Ejercicio 10
const numConfirmacion= (num) => {
    /*Tammbien puedo enviar la respuesta atraves de un return, que me retorne
    lo establecido en el ejercicio*/ 
    if(num >= 0){
        //return true;
        console.log('true');
    }
    else{
        //return false;
        console.log('false');
    }
}

// Ejecución de la funcion - Éxito✅
numConfirmacion(2);

// Ejercicio 29
const condicionNum = (num1, num2, bandera) => {
    if(bandera==true){
        console.log(Math.pow(num1, num2));
    }
    else{
        console.log(Math.sqrt(num1));
    }
}

// Ejecución de la funcion - Éxito✅
condicionNum(20, 3, false);

