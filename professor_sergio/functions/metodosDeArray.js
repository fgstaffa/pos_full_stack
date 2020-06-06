const pizzas = require('../pizzaria/database/pizzas')

const buscaPizza = (str) => {

    const acheiPizza = (pizza) => {
        return pizza.nome.includes(str)
    }

    return pizzas.find(acheiPizza)
}

// array.find a primeira busca true ela retorna
const buscaPizzaMaisBarata = (valor) =>    
    pizzas.find(pizza => pizza.valor < valor)
     
     
//array.filter percorre todo o array e retorna
const buscaPizzaMaisBarataQue = (valor) =>    
    pizzas.filter(pizza => pizza.valor < valor)

let q = buscaPizzaMaisBarataQue(50)
let p = buscaPizzaMaisBarata(30)

console.log(q)



//  exemplo de find
// let p = pizzas.find(
//     (pizza) => {
//         return pizza.nome.includes('Pep')
//     }
// )

// console.log(p)