/* Escriba un programa JavaScript para encontrar un par de elementos (índices de los dos números) de una matriz dada cuya suma sea igual a un número objetivo específico. Ej findPairs([10,20,10,40,50,60,70],50) resultado --> 2,3 */

function findElements(vector, resultado){
    let vectorRes=[]
    console.log(resultado);
    for (let i =0;i <vector.length-1;i++){
     if(vector[i]+ vector[i+1]=== resultado){
         vectorRes.push(i);
         vectorRes.push(i+1);
     } 
   }
   return vectorRes;  
}
console.log(findElements([10,20,10,40,50,60,70],90))
/* 
Escriba una función de JavaScript que devuelva una cadena pasada con letras en orden alfabético. Ej orderWord("webmaster") resultado ---> "abeemrstw"
 */
function alphabeticalOrder(cadena){
    const arreglo = cadena.split("");
    arreglo.sort();
    cadena = arreglo.join("")
    return cadena;
}
console.log(alphabeticalOrder("webmaster"));
/*Escriba una función de JavaScript que acepte una cadena como parámetro y busque la palabra más larga dentro de la cadena. Ej. largeWord("Web Development Tutorial") resultado ---> 'Development'  */

function LongestWord(String){
    
}