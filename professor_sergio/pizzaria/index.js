// const pizzas = [

//     {
//         nome: 'Pepperoni',
//         valor: 55.3,
//         ingredientes: ['mussarela', 'pepperoni', 'manjericao'],
//         destaque: true
//     },
//     {
//         nome: 'Mussarela',
//         valor: 25,
//         ingredientes: ['mussarela'],
//         destaque: false
//     },
//     {
//         nome: 'Quatro Queijos',
//         valor: 40.3,
//         ingredientes: ['mussarela', 'gorgonzola', 'catupiry', 'parmesão'],
//         destaque: true
//     }

// ]

// Imprime todas as pizzas
// console.log(pizzas)

// Imprime o nome da segunda pizza
// console.log(pizzas[1].nome)

// Como descobrir os nome dos atributos de um objeto literal
// console.log(Object.keys(pizzas[0]))

// For: Utilizando o for para imprimir alguns dados de uma pizza
// for(let i=0; i < pizzas.length; i++){
    // console.log(i + ' : ' + pizzas[i].nome)
    // console.log(`${i} : ${pizzas[i].nome} : ${pizzas[i].valor} : ${pizzas[i].destaque}`)
    // console.log(`${pizzas[i].nome} -> Destaque: ${pizzas[i].destaque}`)
// }

/* For of: percorre array de forma simples
 for(let p of pizzas){
     console.log(`${p.nome} -> Não Destaque: ${p.destaque}`)
}

for(let p of pizzas){
    if(!p.destaque){
        console.log(`${p.nome} -> Destaque: ${p.destaque}`)
    }
}
*/

// For in: percorre objetos

// let fracatu = {
//     nome: 'Fracatu',
//     valor: 33,
//     ingredientes: ['mussarela', 'frango', 'catupiry'],
//     destaque: true
// }


// for (let campo in fracatu){
//     console.log(`${campo} : ${fracatu[campo]}`)
// }

// for (let campo in pizzas){
//     console.log(`${pizzas[campo].nome} : ${pizzas[campo].valor}`)
// }




// const cpf = require("@fnando/cpf/commonjs")

// let testeCpf = cpf.isValid('348.961.008.32')
// console.log(testeCpf)

// let novoCpf = cpf.generate()
// console.log(novoCpf)

const path = require('path')
const express = require('express')
const app = express()

// Setup do template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Setup da pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Importar roteadores
const PizzasRouter = require('./routers/PizzasRouters')

// Utilizar roteadores
app.use(PizzasRouter)

app.listen(3001)

// app.get("/",(req,res)=>{
//     res.send(pizzas)
// })

// app.get('/usuarios',(req,res)=>{
//     res.send('Devia retornar uma lista de usuario')
// })

// app.get('/clientes', (req,res)=>{
//     res.send('Lista de clientes...')
// })

