/*
Faça um programa que receba N (quantidade de numeros) e seus respectivos valores.
Imprima o maior numero par e o menor numero impar

Exemplo:
    Entrada:
    5
    3
    4
    1
    10
    8

    Saida
    Maior numero par: 10
    Menor numero impar: 1

*/

const { gets, print } = require('./ex2-funcoes')

const tamanho_lista = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < tamanho_lista; i++) {
    const numero = gets()
    if (numero % 2 === null || numero > maiorPar) {
            maiorPar = numero
    } else {
        if(menorImpar === null || numero < menorImpar){
            menorImpar = numero;
        }
    }
}

console.log(`Maior par ${maiorPar}`)
console.log(`Menor impar ${menorImpar}`)