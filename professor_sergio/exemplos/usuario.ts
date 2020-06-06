class Usuario{
    
    // atributos da classe Usuario
    private email:string
    public nome:string
    private senha:string
    private logado:boolean

    
    constructor(email:string , nome:string , senha: string){
        this.email = email
        this.nome = nome
        this.senha = senha
        this.logado = false
    }

     public login(email:string, senha:string):boolean{
        if(email == 'fgstaffa@hotmail.com' && senha =='123'){
            this.logado = true
            return true
        }

        return false
    }
}


function imprimeUsuario(u:Usuario){
    console.log(u)
}

// let u = new Usuario('fgstaffa@hotmail.com', 'Felipe', '123')
// console.log(u.nome)
// u.login('fgstaffa@hotmail.com', '123')
// imprimeUsuario(u)

let u:Usuario = new Usuario('fgstaffa@gmail.com', 'Jessica', 'jessica123')
console.log(u)