/*
Elabore um algoritmo que dado peso e altura de um adulto mostre sua condição na tabela abaixo

    - Menor que 18.5 => Abaixo do peso;
    - Entre 18.5 e 25 => Peso normal;
    - Entre 25 e 30 => Acima do peso;
    - Entre 30 e 40 => Obeso;
    - Mais de 40 => Obesidade grave;

    OBS: IMC = peso / altura²
*/


const peso = 115;
const alturaEmMetros = 1.84;

const imc = peso / Math.pow(alturaEmMetros, 2)


if (peso <= 0){
    console.log("Peso inválido!")
} else if (alturaEmMetros <= 0){
    console.log("Altura inválida")
} else if(imc < 18.5){
    console.log("Abaixo do peso");
} else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal");
} else if(imc >= 25 && imc < 30){
    console.log("Acima do peso");
}else if(imc >= 30 && imc < 40){
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}