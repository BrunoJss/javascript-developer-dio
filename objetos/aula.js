
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

bruno['nome'] = 'Bruno Cruz'


class Pessoa {
    nome;
    idade;

    descrever() {
        return (`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)

    }
}

const bruno2 = new Pessoa()

bruno2.nome = 'Bruno J Cruz'
bruno2.idade = 26

console.log(bruno2.descrever())