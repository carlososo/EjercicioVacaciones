/* Crear una función que dado un año determine si es un año bisiesto o no. Ej---> isLeap(2016) Resultado ----> true

Crear una función que genere un numero aleatorio entre 1 y 10, esta función recibe un numero como parametro si el numero es igual al numero generado aleatoriamente regresara "Buen Trabajo" de lo contrario regresara "Intenta de nuevo". Ej ---> randomGuess(7) resultado ---> "Buen trabajo" o "Intenta de Nuevo"

Escribe una función que reciba un string como parametro y regrese el string con "Py" al principio, si el string ya tiene "Py" regresar el string original Ej ---> addPy("hola") resultado ---> "Pyhola"

 */

//1.-
function AnioBisisesto(anio) {
    const isLeap = (anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0) ? true : false;
    return isLeap
}
console.log(AnioBisisesto(1998));

//2.-
function randomNumber(number) {
    const isNumber = ((Math.floor(Math.random() * 10) + 1) === number) ? "Buen Trabajo" : "Intenta de Nuevo"
    return isNumber;
}
console.log(randomNumber(9));

//3.-
function pyString(cadena) {
    const reg = /^Py/
    const vof = reg.test(cadena);
    if (vof) {
        return cadena;
    } else {
        return "Py".concat(cadena);
    }
}

console.log(pyString("PyHolaQueTalComoLeva"));