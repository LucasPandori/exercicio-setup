let idade = 18
let nome = "Lucas"
let lista = ["maçã", "leite", "sucrilhos", "chocolate"]



function maiorIdade(idade) {
    if (idade >= 18) {
        return ("Maior de idade!")
    }
    else {
        return ("Menor de idade")
    }
}

function compras(lista, novoitem) {
    lista.push(novoitem)
    return lista
}



console.log("O nome cadastrado foi:", nome)
console.log("A idade cadastrada foi: ", idade)
console.log("Você é: ", maiorIdade(idade))


console.log("Sua antiga lista: ", lista)
console.log("Aguarde a modificação...")
lista = compras(lista, "macarrão")
console.log("Sua lista atual é: ", lista)
