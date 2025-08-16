
/*
Objeto => Coleção dinâmica de chave e valor

*/

class Pessoa {
    //atributos
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)

    }
}

const bruno = new Pessoa("Bruno J Cruz", 26)
console.log(bruno)
bruno.descrever()
