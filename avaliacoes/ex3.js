
/*
Faça um programa que calcule e imprima o salario a ser transferido para 
um funcionário.aPara realizare o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

        valor bruto do salario - percentual do importo + adicional dos benefícios 

    De 0 a 1100 = 5%
    De 1100.1 a 2500 = 10%
    Maior que 2500 = 15%

    Ex:
    Entrada
        2000
        250

    Saida
        2050.0
*/


const { gets, print } = require('./ex3-funcoes');

const salario = gets()
const beneficios = gets()

function calcularDesconto(salario, porcentagem) {
    return salario * (1 - (porcentagem / 100))
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario < 1100) {
        return 5
    } else if (salario >= 1100 && salario < 2500) {
        return 10
    } else {
        return 15
    }
}

const saldoReceber = beneficios + calcularDesconto(salario, pegarAliquota(salario))


console.log(saldoReceber)
