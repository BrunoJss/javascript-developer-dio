/*
2) Crie um programa que seja capaz de percorrer uma lista de número e imprima cada numero par encontrado
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 14, 17]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(`${numeros[i]} é par`)
    }
}