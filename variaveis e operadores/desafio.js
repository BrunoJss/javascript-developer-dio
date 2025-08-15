/*Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:

    1 - Preço do combustível
    2 - Gasto médio do combustível do carro por KM
    3 - Disância da viagem, em KM

Imprima no console o valor que será gasto em combustível para realizar a viagem*/


const preco = 6.59
const consumo = 10
const distancia = 100

const total = (distancia / consumo) * preco

console.log(total.toFixed(2)) //método que retorna uma string a partir de um número, realizando o arrendondamento do mesmo

