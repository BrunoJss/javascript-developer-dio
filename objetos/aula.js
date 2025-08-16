
/*
Objeto => Coleção dinâmica de chave e valor

*/
const bruno = {
    nome: "Bruno J. Cruz",
    idade: 26,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}

console.log(bruno.nome)
console.log(bruno.idade)
console.log(bruno)

bruno.descrever();


