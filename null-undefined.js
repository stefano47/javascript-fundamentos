let valor
console.log(valor)

valor = null
console.log(valor)

console.log(undefined == null)
console.log(undefined === null)

console.log(typeof undefined)
console.log(typeof null)

const prod = {}
console.log(prod.preco)
prod.preco = 3.50
console.log(prod)

prod.preco = undefined
console.log(!!prod.preco)
console.log(prod)

prod.preco = null
console.log(!!prod)
console.log(prod)