'use strict'

/* Escriba una función de JavaScript para redondear un número a una cantidad específica de dígitos. Ej ---> roundNumber(2.3453467335,2) resultado -> 2.34

Escriba una función de de JavaScript para crear una nueva cadena a partir de una cadena dada con el primer carácter de la cadena dada agregado al principio y al final. Ej --> addFisrt("Hola") resultado ---> "HHolaH"

Escriba una función deJavaScript para verificar si dos valores enteros dados están en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango. Ej --> inRange(55,47) resultado ---> true

 */

function roundUp(numero, redondeador) {
    numero = numero + "";
    let cadena = numero.split(".");
    cadena[1] = cadena[1].substring(0, redondeador)
    numero = cadena.join('.');
    return parseFloat(numero);

}

console.log(roundUp(25.234234, 4));

function newString(cadena) {
    const charInicial = cadena.substring(0, 1);
    cadena = charInicial.concat(cadena).concat(charInicial);
    return cadena
}

console.log(newString("Feliz"));


function range(valueOne, valueTwo) {
    const compare = (valueOne > 49 && valueOne < 100 || valueTwo > 49 && valueTwo < 100) ? true : false;
    return compare;


}
console.log(range(50, 49));