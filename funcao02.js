// Armazenando uma função em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em um variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const sub = (a, b) => a - b
console.log(sub(5, 2))