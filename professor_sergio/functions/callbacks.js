const dobro = x => x * 2
const quadrado = x => x * x
const somaUm = x => x + 1

function opereumNumero(x, operacao){
    return operacao(x)
}

console.log(opereumNumero(3, dobro))

console.log(opereumNumero(3, quadrado))

console.log(opereumNumero(3, somaUm))