const pizzas = require('../pizzaria/database/pizzas')

// const buscaPizza = (str) => {

//     const acheiPizza = (pizza) => {
//         return pizza.nome.includes(str)
//     }

//     return pizzas.find(acheiPizza)
// }

// const buscaPizzaPeloNome = str => pizzas.find(pizza => pizza.nome.includes(str))
// console.log(buscaPizzaPeloNome('e'))


// array.find a primeira busca true ela retorna
// const buscaPizzaMaisBarata = (valor) =>    
//     pizzas.find(pizza => pizza.valor < valor)
     
     
//array.filter percorre todo o array e retorna
// const buscaPizzaMaisBarataQue = (valor) =>    
//     pizzas.filter(pizza => pizza.valor < valor)

// let q = buscaPizzaMaisBarataQue(50)
// let p = buscaPizzaMaisBarata(30)

// console.log(q)



//  exemplo de find
// let p = pizzas.find(
//     (pizza) => {
//         return pizza.nome.includes('Pep')
//     }
// )

// console.log(p)

// const buscaPizzaPeloNome = (str) => {
//         return pizzas.filter(pizza => {
//         let nomeMaiusculo = pizza.nome.toUpperCase()
//         let trechoMaiusculo = str.toUpperCase()
//         return nomeMaiusculo.includes(trechoMaiusculo)
//     })
// }
// console.log(buscaPizzaPeloNome('q'))

// const nomeDasPizzas = () => {
//     return pizzas.map(pizza => pizzas.nome)
// }

// console.log(
//     pizzas.map(
//         (pizza) => {
//             pizza.valor = pizza.valor * 1.1
//             return pizza
//         }
//     )
// )

// exemplo de uso de reduce
// let numeros = [5,10,3,15]

//     let soma = numeros.reduce(
//         (acumulador,atual) => {
//             return acumulador + atual
//         }
//     )
//     console.log(soma)

//     let nomes = ['Alex', 'Felipe', 'Leo', 'Sergio', 'Heloisa', 'Jadir']
//     let lista = nomes.reduce(
//         (acumulador,atual) => {
//             return acumulador +', '+ atual
//         }
//     )

//     console.log(nomes)

    // exemplo de uso da reduce (somando valores das pizzas)
//     let total = pizzas.reduce(
//         (acumulador, atual) => {
//             return acumulador + atual.valor
//         },0
// )
// console.log(total)

// exemplo da foreach
let nomes = ['Alex', 'Felipe', 'Leo', 'Sergio', 'Heloisa', 'Jadir']
nomes.forEach(
    (nome) => {
        console.log(`Olá ${nome}`)
    }
)