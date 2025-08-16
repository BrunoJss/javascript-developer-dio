const numero = 54;

const numeroDivisivelPor5= (numero % 5) === 0; //comparação que inclui o tipo da variavel tambem


if(numero === 0){
    console.log("Número inválido");
} else if(numero === 5){
    console.log("Número inválido")
} else if(numeroDivisivelPor5){
    console.log("Sim");
} else {
    console.log("Não");
}