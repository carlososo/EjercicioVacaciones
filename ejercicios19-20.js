/* Escribe una función de JavaScript para convertir una cantidad en monedas. Ej amountTocoins(46, [10, 5, 2, 1]) Resultado --> 10,10,10,10,5,1 */
function coinConverter(amount, coins){
    let suma=0;
    coins = coins.sort((a,b)=>{
        return a-b;
    })

    let monedas =coins.pop();
console.log(coins)
 
    return monedas
}

console.log(coinConverter(46, [10,2,5,1]))
/*
Escriba una función de JavaScript para generar una matriz entre dos enteros de 1 paso de longitud. Ej. rangeBetwee(4, 7) resultado --> [4, 5, 6, 7] rangeBetwee(-4, 7) resultado --> [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7] */

function rangeBetween(valueOne, valueTwo){
    const res =[];
    if (valueOne <valueTwo){
    
    for (let i=valueOne; i<=valueTwo; i++ ){
        res.push(i);
    }
}else{
    for (let i=valueOne; i>=valueTwo; i-- ){
        res.push(i);
    }
}
    return res;
}

console.log(rangeBetween(7,-10));