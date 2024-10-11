// cria-se variavel do tipo array
const numbers = [1, 2, 3, 4, 5]
// cria-se outra variavel usando .map para retornar um array com a mesma quantidade de elementos multiplicando vezes dois 
const numbersV2 = numbers.map(el => el * 2 )
// imprime os elementos dos dois arrays
console.log(numbers, numbersV2)


const students = [
    {name:'Jake', score: 7.5},
    {name:'Susan', score: 8.5},
    {name:'Ema', score: 9.5},
    {name:'Pedro', score: 9.1},
]

const getScore = el => el.score

const result = students
    .map(getScore) 
    .map(Math.ceil) 
    .map(Math.floor)

    console.log(students, result)

// responsavel por transformar elemntos de array. Seu resultante tem a mesma quantidade de elementos do que o array original, porem tranformado em outro tipo de elemente .