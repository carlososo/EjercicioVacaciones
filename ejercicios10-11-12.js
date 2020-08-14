/* Escriba una función de JavaScript para contar el número de vocales en una cadena dada.

Escriba una función de Javascript que convierta un numero a formato moneda Ej ---> convertExchange(2000) resultado --> "$2,000.00"

Hay dos matrices con valores individuales, escriba un programa JavaScript para calcular la suma de cada valor de índice individual de las matrices dadas Ej. sumIndex([1,0,2,3,4],[3,5,6,7,8,13]) salida --> [4, 5, 8, 10, 12, 13] */

function vocalCount(cadena) {
    const reg = /[aeiou]/;
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        let vocal = (reg.test(cadena[i]))
        if (vocal === true) {
            contador++
        }
    }
    return `la cadena tiene ${contador} vocales`
}
console.log(vocalCount("Parangaricutirimicuaro"));


function convertExchange(cantidad) {
    const adena = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXP',
        minimumFractionDigits: 0
    })
    return adena.format(cantidad);
}
console.log(convertExchange(100000000000));