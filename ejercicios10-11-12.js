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


function MatrixAdd(matrixOne, matrixTwo){
    let matrixRes=[];
    if(matrixOne.length >matrixTwo.length){

        for(let i =0; i<matrixOne.length;i++){
        
        
            for (let j=0; j<matrixTwo.length;j++){
                if(i === j ){
                matrixOne[i] = matrixOne[i]+matrixTwo[j]
                
            }
        }
    }
    return matrixOne;
}else if( matrixTwo.length >matrixOne.length){
    for(let i =0; i<matrixTwo.length;i++){
        
        
        for (let j=0; j<matrixOne.length;j++){
            if(i === j ){
            matrixTwo[i] = matrixOne[i]+matrixTwo[j]
            
        }
    }
}
return matrixTwo;
}else if(matrixOne.length== matrixTwo.length){
   
    for(let i=0; i<matrixOne.length;i++){
        for(let j=0;j<matrixTwo.length;j++){
            if(i === j ){
                let add = matrixOne[i]+matrixTwo[j]
                matrixRes.push(add);
            }
        }
    }
    return matrixRes;
}


}

console.log(MatrixAdd([1,0,2,3,4,13],[3,5,6,7,8,13]))