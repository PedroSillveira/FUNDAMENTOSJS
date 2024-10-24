const numbers = [1,2,3,4,5,6]
// cria o array com 06 elementos
const soma = (total, el) => total + el
// cria variavel que retorna uma arrow function reduce para fazer a soma dos elementos
// sempre tem valor inicial 0
const resultado = numbers.reduce(soma)
// cria variavel que invoca uma função com ação reduce em cima do array numbers
console.log(resultado)

const media = (acc, el, i, array) => {
    if (i === array.length -1){
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const resultadoMedia = numbers.reduce(media)
console.log(resultadoMedia)
