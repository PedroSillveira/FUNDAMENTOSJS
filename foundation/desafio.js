// declando função com 03 parametros
function oneToFive(a, b, s){
    //declarando array vazio
    const nums = []
    // laço de icrementação
    for (let i = 1; i <= a; i++){
        // adiciona o valor o indice (i) dentro do array
        nums.push(i)
    }
    return nums
    //retorna arrey
}
console.log(oneToFive(5))