//const funcoes = require('./funcoes-auxiliares')

const { gets, print } = require('./funcoes-auxiliares') //Convertido usando destructuring



const pessoa = {
    nome: 'Bruno'
}

/*
Conceito de destructuring 
*/
const { nome } = pessoa; // Semelhante a 'const nome = pessoa.nome'


/*
Uma sala contem 5 aliunos e para aluno foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 números sorteados e mostre o maior número.


Dados de entrada:
5,
50,
10,
98,
23

Saída:
98
*/


let maiorEncontrado = 0

for (let i = 0; i < 5; i++){
    numeroSorteado = gets();
    if(numeroSorteado > maiorEncontrado){
        maiorEncontrado = numeroSorteado
    }
}

console.log(maiorEncontrado)