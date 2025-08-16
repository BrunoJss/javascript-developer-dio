function escrevaMeuNome(nome){
    return("Meu nome é: " + nome)
}

escrevaMeuNome("Bruno")

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome("Bruno") + " e sou Maior")
    }else{
        console.log(escrevaMeuNome("Bruno") + " e sou Menor")
    }
}

verificarIdade(19)