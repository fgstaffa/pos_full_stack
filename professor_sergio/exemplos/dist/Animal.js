var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nPatas, pelos, vertebrado, familia) {
        this.numero_patas = nPatas;
        this.pelos = pelos;
        this.vertebrado = vertebrado;
        this.familia = familia;
    }
    Animal.prototype.andar = function (nPassos) {
        console.log("Andando " + nPassos + " passos.");
    };
    Animal.prototype.falar = function (frase) {
        console.log("Falando " + frase + " !!!!");
    };
    return Animal;
}());
/**let meuBicho = new Animal(4, true, true, 'Cachorro')
console.log(meuBicho)

meuBicho.andar(10)
meuBicho.falar('au-au-au')
 */
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super.call(this, 4, true, true, 'Canis') || this;
    }
    Cachorro.prototype.abanarRabo = function () {
        console.log('Abanando!!');
    };
    Cachorro.prototype.excretar = function () {
        console.log("Excretando...");
    };
    return Cachorro;
}(Animal));
var c = new Cachorro();
c.abanarRabo();
console.log(c);
c.falar('auauau');
c.andar(50);
c.excretar();
