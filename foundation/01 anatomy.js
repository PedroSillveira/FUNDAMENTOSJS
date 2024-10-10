// anatomia de uma função

function sayHello() {
    console.log('Olá!')
}
// 'function' cria a função
// 'sayHello()' é como ela foi nomeada
// 'console.log('')' armezena conteúdo a função
sayHello()
// o nome da função 'sayHello() é usado para chamar/invocar a função


function sayHelloTo(name) {
    console.log(`Hello ${name}`);
}
sayHelloTo('Mike')
// a função nao retorna nada, porem ela recebe um parametro/argumento 'name'
// usa-se ${} para interpolar 


function returnHi() {
    return 'Hi!'
}
let greeting = returnHi()
console.log(greeting)
// retorna valor com string literal 
// usa-se 'let' para armazenar valor da string literal em uma variavel, assim podendo usar o valor

function returnHiTo(name) {
    return `Hi, ${name}!`
}
console.log(returnHiTo('Jhon'))