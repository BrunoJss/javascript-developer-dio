/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno calcule e imprima sua média e a sua classificação conforme a tabela abaixo:

Classificação:
    - Menor que 5, reprovação;
    - Entre 5 e 7, recuperação;
    - Maior que 7, aprovado
*/

const nota1 = 7
const nota2 = 7
const nota3 = 7

const soma = nota1 + nota2 + nota3
const media = soma / 3

if(media < 5 ){
    console.log(`Sua média é: ${media.toFixed(2)}. Você reprovou!`)
} else if(media >= 5 && media <= 7){
    console.log(`Sua média é: ${media.toFixed(2)}. Você está de recuperação!`)
} else {
    console.log(`Sua média é: ${media.toFixed(2)}. Aprovado!`)
}