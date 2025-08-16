/*
Elabore um algoritmo que calcule quanto deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize a tabela abaixo para realizar os cálculos

    - À vista, débito, 10% de desconto;
    - À vista, dinheiro ou pix, 15% de desconto;
    - 2x, crédito, preço normal;
    - + de 2x, crédito, acréscimo de 10%
*/

const precoEtiqueta = 100;
/*
1 - pix ou dinheiro
2 - débito
3 - crédito
*/
const formaDePagamento = 3
const parcelasCredito = 3

function aplicarDesconto(valor, porcentagem) {
    return valor * (1 - (porcentagem / 100))
}

function aplicarAumento(valor, porcentagem) {
    return valor * (1 + (porcentagem / 100))
}

if (formaDePagamento === 1) {
    // const total = precoEtiqueta * (1 - 0.15)
    const total = aplicarDesconto(precoEtiqueta, 15)
    console.log(`Valor atualizado: ${total.toFixed(2)}`)
} else if (formaDePagamento === 2) {
    // const total = precoEtiqueta * (1 - 0.1)
    const total = aplicarDesconto(precoEtiqueta, 10)
    console.log(`Valor atualizado: ${total.toFixed(2)}`)
} else if (formaDePagamento === 3) {
    if (parcelasCredito === 2) {
        const total = precoEtiqueta
        console.log(`Valor atualizado: ${total.toFixed(2)}`)
    } else {
        // const total = precoEtiqueta * (1 + 0.1)
        const total = aplicarAumento(precoEtiqueta, 10)
        console.log(`Valor atualizado: ${total.toFixed(2)}`)
    }
} else {
    console.log("Forma de pagamento não identificada.")
}