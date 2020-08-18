/* Escriba una función de JavaScript para encontrar la diferencia de dos matrices. Ej difference([1, 2, 3], [100, 2, 1, 10]) Resultado --> ["3", "10", "100"]

Escriba una función de JavaScript para eliminar. Valores 'nulo', '0', '""', 'falso', 'indefinido' y 'NaN' de una matriz. Ej removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]) resultado ----> [15, -22, 47]

Escriba una función de JavaScript para ordenar la siguiente matriz de objetos por valor de título. let ibrary = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

 */
 function vectorDifferences(vectorOne, vectorTwo){

   let difference = vectorOne
   .filter(number => !vectorTwo.includes(number))
   .concat(vectorTwo.filter(numberTwo => !vectorOne.includes(numberTwo)));

   return difference;
}

console.log("los numeros diferentes entre los areglos son",vectorDifferences([1, 2, 3], [100, 2, 1, 10]));

function removeFalsies(vector){
   let vectorRes = vector
   .filter(element =>{
    
   !element ==NaN || !element==0 || !element ==false || !element ==null || !element=="";
      return element;
   })
   return vectorRes
}

console.log(" el arreglo sin falsies es:",removeFalsies([NaN, 0, 15, false, -22, '',undefined, 47, null]))

let library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

function ordenarTitulo(libros){
   libros.sort((a,b)=>{
      return b.title - a.title;
   })
   return libros
}

console.log(ordenarTitulo(library));

