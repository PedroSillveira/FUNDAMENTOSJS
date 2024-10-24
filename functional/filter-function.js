// cria array com 06 elementos
const numbers = [0,1,2,3,4,5]
// crai função que filra numeros menores que zero
const maiorQueZero = el => el > 0
// invoca a variavel 'numbers' usando a função 'maiorQueZero' para filtrar os elementos
console.log(numbers.filter(maiorQueZero))
// invocação primitiva
console.log(numbers.filter(el => el > 0))


const alunos = [
    {name: 'Pedro', score: 9.1},
    {name: 'João', score: 8.1},
    {name: 'Gabriel', score: 7.4},
    {name: 'Flávia', score: 9.5},
]

const aprovados = alunos => alunos.score >= 8
console.log(alunos.filter(aprovados))