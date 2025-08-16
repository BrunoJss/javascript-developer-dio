/*Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis. Sendo elas:

    1 - Preço da gasolina
    2 - Preço do etanol
    3 - Tipo de combustível do seu carro
    2 - Gasto médio do combustível do carro por KM
    3 - Disância da viagem, em KM

Imprima no console o valor que será gasto em combustível para realizar a viagem*/


const precoGasolina = 4
const precoEtanol = 5
const consumo = 10
const distancia = 100
const combustívelCarro = "gasolina"
let total = 0


if(combustívelCarro === "etanol"){
    const total = (distancia / consumo) * precoEtanol
    console.log(total.toFixed(2))
}else{
    const total = (distancia / consumo) * precoGasolina
    console.log(total.toFixed(2))
}



