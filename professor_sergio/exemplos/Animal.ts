abstract class Animal {

    // esse método vai ser executado
    // toda vez que criarmos um objeto
    // dessa classe


    public numero_patas:number
    public pelos:boolean
    public vertebrado:boolean
    public familia:string

    constructor(nPatas:number, pelos:boolean, vertebrado:boolean, familia:string) {
        this.numero_patas = nPatas
        this.pelos = pelos
        this.vertebrado = vertebrado
        this.familia = familia
        
    }

    andar(nPassos:number){
        console.log(`Andando ${nPassos} passos.`)
    }

    falar(frase:string){
        console.log(`Falando ${frase} !!!!`)
    }

    abstract excretar():void
     
    
}

/**let meuBicho = new Animal(4, true, true, 'Cachorro')
console.log(meuBicho)

meuBicho.andar(10)
meuBicho.falar('au-au-au')
 */ 

 class Cachorro extends Animal{
    
    constructor(){
        super(4,true,true,'Canis')
    }

    

     abanarRabo(){
         console.log('Abanando!!')
     }

     excretar(){
         console.log("Excretando...")
     }
 }

let c = new Cachorro()
c.abanarRabo()
console.log(c)
c.falar('auauau')
c.andar(50)
c.excretar()