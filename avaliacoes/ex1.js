/*
Faça um programa que receba a media de um aluno e com base no valor informado imprima:
"Reprovado" caso a média seja < 5
"Recuperação" caso a média seja >= 5 e < 7
"Aprovado" caso a média seja >= 7

Exemplo:
    Entrada: 5.5
    Saída: Recuperação 

*/

const { gets, print } = require('./ex1-funcoes')

const media = gets()

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}