// function calculadora(operacion, num1, num2) {
let num1 = 10;
let num2 = 2;
let operacion = "REsTar";
let resultado;

switch (operacion.toLowerCase()) {
    case 'sumar':
        resultado = num1 + num2;
        console.log("El resultado de la suma de",num1 , "y", num2, "es", resultado);
        break;
    case 'restar':
        resultado = num1 - num2;
        console.log("El resultado de la resta entre",num1 , "y", num2, "es", resultado);
        break;
    case 'multiplicar':
        resultado = num1 * num2;
        console.log("El resultado de la multiplicación entre",num1 , "y", num2, "es", resultado);
        break;
    case 'dividir':
        if (num2 !== 0) { // <--- Diferente a 0 
            resultado = num1 / num2;
            console.log("El resultado de la división entre",num1 , "y", num2, "es", resultado);
        } else {
            console.log("No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar-restar-multiplicar-dividir");
        break;
}

// Se puede utilizar function y solo agregar la varable "resultado" de manera local dentro de la funcion pero por fuera del switch
// function calculadora(operacion, num1, num2){......} 
// calculadora(operacion,nume1.nume2)<---- llamado --- Con esto no hace falta declarar las variables de num1-num2-operacion