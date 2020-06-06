var Usuario = /** @class */ (function () {
    function Usuario(email, nome, senha) {
        this.email = email;
        this.nome = nome;
        this.senha = senha;
        this.logado = false;
    }
    Usuario.prototype.login = function (email, senha) {
        if (email == 'fgstaffa@hotmail.com' && senha == '123') {
            this.logado = true;
            return true;
        }
        return false;
    };
    return Usuario;
}());
function imprimeUsuario(u) {
    console.log(u);
}
// let u = new Usuario('fgstaffa@hotmail.com', 'Felipe', '123')
// console.log(u.nome)
// u.login('fgstaffa@hotmail.com', '123')
// imprimeUsuario(u)
var u = new Usuario('fgstaffa@gmail.com', 'Jessica', 'jessica123');
console.log(u);
