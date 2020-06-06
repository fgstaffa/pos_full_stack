/**
*Uma função que recebe um objeto Pizza  e um percentual
e retorna o objeto alterando o seu valor
a partir de um desconto 
*/


let pizza = {
    nome: 'Pepperoni',
    valor: 55.3,
    ingredientes: ['mussarela', 'pepperoni', 'manjericao'],
    destaque: true
}

// function darDesconto(pizza, percentualDesconto){
//     return pizza.valor * percentualDesconto
// }

// function darDescontoEmPizza(pizza, percentualDesconto){
    
//     let valorDescontado = darDesconto(pizza, percentualDesconto)
//     pizza.valor = pizza.valor - valorDescontado
//     return pizza
    
// }


const darDescontoEmPizza = (pizza, percentualDesconto) => {
    
    
    pizza.valor = pizza.valor - pizza.valor * percentualDesconto
    return pizza       
}
    

console.log(pizza)
pizza = darDescontoEmPizza(pizza, 0.10)
console.log(pizza)