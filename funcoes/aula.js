function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        return ("Peso normal");
    } else if (imc >= 25 && imc < 30) {
        return ("Acima do peso");
    } else if (imc >= 30 && imc < 40) {
        return ("Obeso");
    } else {
        return ("Obesidade grave");
    }
}

function isValoresValidos(peso, altura) {
    if (peso <= 0) {
        return false
    } else if (altura <= 0) {
        return false
    } else {
        return true
    }
}

/*
Função auto-invocável, quando não é necessário chamar a função manualmente ou dar um nome a ela (função anonima). Ex:

function myFunction(){
    code
}
myFuncion()

poderia ser reescrita da forma abaixo e ser executada automaticamente

(function myFunction(){
    code
})() << englobar função com parenteses e utilizar parenteses no final "como se tivesse invocando ela"

*/
(function main() {

if(!isValoresValidos){
    console.log("Verifique os valores de entrada")
    return 
}

const peso = 60;
const alturaEmMetros = 1.54;
const imc = calcularImc(peso, alturaEmMetros)

console.log(classificarImc(imc))

})()

// main()

