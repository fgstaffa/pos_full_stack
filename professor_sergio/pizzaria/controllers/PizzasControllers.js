const pizzas = require('../database/pizzas')
const usuarios = require('../database/ususarios.json')

const PizzasController = {
    index: (req, res) => {
        res.render('index', {
            pizzas: pizzas
        })
    },

    busca: (req, res)=>{

        // Capturar a string digitada
        let trecho = req.query.busca
        
        // Buscar as pizzas que possui a string digitada
        let resultado = pizzas.filter(
            pizza => pizza.nome.toUpperCase().includes(trecho.toUpperCase())
        )
        // Renderizar a view passando as pizzas encontradas
        res.render('index', {pizzas: resultado})

    }
}


module.exports = PizzasController