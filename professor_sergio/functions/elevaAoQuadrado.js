/**
*   Deve receber um numero como parametro
e retorna o quadrado desse numero 
*/

// function elevaAoQuadrado(numero){
//     return numero * numero
// }

// arrow function
const elevaAoQuadrado = (x) => x * x

// forma mais utilizada
// let numero = elevaAoQuadrado(9)
// console.log(`Quadrado do número é: ${numero}`)

// forma mais curta 
console.log(`Quadrado do número é: ` + elevaAoQuadrado(9))