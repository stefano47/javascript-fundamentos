console.log('-----------Operador AND---------------')
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log('--------------------------------------')
console.log('-----------Operador OR----------------')
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log('--------------------------------------')
console.log('-----------Operador NOT---------------')
console.log(!true)
console.log(!false)
console.log('--------------------------------------')

function compras(trab1, trab2){
    const comprarSoverte = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    // const comprarTv32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSoverte // operador unário

    return { comprarSoverte, comprarTv50, comprarTv32, manterSaudavel } // short syntax
}
console.log(compras(true, true))
console.log('--------------------')
console.log(compras(true, false))
console.log('--------------------')
console.log(compras(false, true))
console.log('--------------------')
console.log(compras(false, false))