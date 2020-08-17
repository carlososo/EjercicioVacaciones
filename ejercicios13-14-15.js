/* Escriba una función de JavaScript para encontrar la diferencia de dos matrices. Ej difference([1, 2, 3], [100, 2, 1, 10]) Resultado --> ["3", "10", "100"]

Escriba una función de JavaScript para eliminar. Valores 'nulo', '0', '""', 'falso', 'indefinido' y 'NaN' de una matriz. Ej removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]) resultado ----> [15, -22, 47]

Escriba una función de JavaScript para ordenar la siguiente matriz de objetos por valor de título. let ibrary = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

 */

 function vectorDifferences(vectorOne, vectorTwo){
   let vectorRes=[]
   vectorOne.forEach((element) => {
      vectorTwo.forEach(function (elemento){
         console.log(element);
         console.log(elemento)
         if(elemento !=element){
            vectorRes.push(element);
         }
      })
   });
   
return vectorRes;

 }

 console.log(vectorDifferences([1, 2, 3], [100, 2, 1, 10]));