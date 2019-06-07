// par nome/valor

const saudacao = 'Opa' // contexto léxico 1 - o local que a váriavel foi definida fisicamente

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}
console.log(exec())

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Alegre',
        numero: 123
    }
}
console.log(cliente)