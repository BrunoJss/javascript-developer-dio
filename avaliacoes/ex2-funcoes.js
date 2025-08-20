const entradas = [
    5,
    30,
    4,
    -11,
    10,
    8
];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor; 
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets, print
};