let erro = 2

// if(erro == 0){
//     console.log('Upload OK')
// }else if(erro == 1){
//     console.log('Tamanho de arquivo excede permitido!')
// }else if(erro == 2){
//     console.log('Arquivo corrompido no upload')
// }else if(erro == 3){
//     console.log('Conexão interrompida durante upload')
// }else{
//     console.log('Nenhum arquivo localizado.')
// }

// switch(erro){
//     case 0: 
//         console.log('Upload OK')
//         break
//     case 1: 
//         console.log('Tamanho de arquivo excede permitido!')
//         break
//     case 2: 
//         console.log('Arquivo corrompido no upload')
//         break
//     case 3: 
//         console.log('Conexão interrompida durante upload')
//         break
//     default:
//         console.log('Nenhum arquivo localizado.')
//         break
// }

const erros = [
    'Upload OK',
    'Tamanho de arquivo excede permitido!',
    'Arquivo corrompido no upload',
    'Conexão interrompida durante upload',
    'Nenhum arquivo localizado.'
]
if(erro < 0 || erro >= erros.length){
    console.log('Erro desconhecido')
}else{
    console.log(erros[erro])
}

