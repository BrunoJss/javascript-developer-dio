function incrementarJuros(valor, percentual){
    const valorTotal = valor * (1+(percentual/100))
    return valorTotal
}

console.log(incrementarJuros(1000, 230))