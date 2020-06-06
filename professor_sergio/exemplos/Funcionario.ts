interface Avaliavel{
    setNota(nota:number):void
}

class Funcionario implements Avaliavel{
    nome:string
    idade:number
    private nota:number

    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
        this.nota = 10
    }

    avaliar(nota:number, coisa:Avaliavel){
        coisa.setNota(nota)
    }
    setNota(nota:number){
        this.nota = nota
    }
}

class Equipe implements Avaliavel{
    membros: Funcionario[]
    nome: string
    private nota: number

    constructor(nome:string){
        this.nome = nome
    }

    setNota(nota:number){
        this.nota = nota
    }
}