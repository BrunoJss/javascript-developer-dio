
/*
Objeto => Coleção dinâmica de chave e valor

*/
const bruno = {
    nome: "Bruno J. Cruz",
    idade: 26,
}

console.log(bruno.nome)
console.log(bruno.idade)
console.log(bruno)

bruno.altura = 1.84
console.log(bruno)

delete bruno.nome
console.log(bruno)