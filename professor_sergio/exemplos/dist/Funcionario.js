var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nota = 10;
    }
    Funcionario.prototype.avaliar = function (nota, coisa) {
        coisa.setNota(nota);
    };
    Funcionario.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return Funcionario;
}());
var Equipe = /** @class */ (function () {
    function Equipe(nome) {
        this.nome = nome;
    }
    Equipe.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return Equipe;
}());
