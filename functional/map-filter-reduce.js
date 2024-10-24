const students = [
    {name:'Jake', score: 7.5},
    {name:'Susan', score: 8.5},
    {name:'Ema', score: 9.4},
    {name:'Pedro', score: 9.1},
]

const greatStudent = student => student.score >= 9
// pega apenas estudedantes que tem valor score maior ou igual a 9
const getScore = el => el.score
// pega apenas o atributo score do estudante
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.legth
    } else {
        return acc + el
    }
} 

console.log (
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)       
)