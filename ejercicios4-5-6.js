/* Escriba una funcion JavaScript para eliminar un carácter en la posición especificada de una cadena dada y devolver la nueva cadena Ej ---> removeChar("Hola",2) resultado --> "Hoa"

Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada cambiando la posición del primer y último carácter. La longitud de la cadena debe ser mayor o igual a 1. Ej ----> firstLast("Hola") resultado ---> "aolH"

Escriba un programa JavaScript para cambiar el uso de mayúsculas en todas las letras de una cadena determinada. Ej ---> changeMayus("ComoEstas") resultado ---> "cOMOeSTAS" */

function DelChar(Cadena, posicion) {
    const char = (Cadena.charAt(posicion));
    Cadena = Cadena.replace(char, "");
    return Cadena;
}

console.log(DelChar("Hola", 2))


function firstLast(cadena) {
    if (cadena.length > 0) {
        const primer = (cadena.substring(0, 1))
        const ultimo = (cadena.substring(cadena.length - 1, cadena.length));
        cadena = cadena.replace(ultimo, primer);
        cadena = cadena.replace(primer, ultimo);

        return cadena
    }
}
console.log(firstLast("Que pedal"))


function mayusToMinus(cadena) {

    const reg = /[A-Z]/
    const arreglo = cadena.split("");
    const mape = arreglo.map((caracter) => {
        if (reg.test(caracter)) {
            return caracter.toLowerCase();
        } else {
            return caracter.toUpperCase();
        }
    })
    cadena = mape.join("");
    return cadena;

}

console.log(mayusToMinus("Como Estas"));