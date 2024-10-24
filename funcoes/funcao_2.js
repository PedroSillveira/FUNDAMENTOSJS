function somar(a) {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
// const somarAB()
const valores = somar(1)(5)
console.log(valores(8))
console.log(somar(1)(2)(3))