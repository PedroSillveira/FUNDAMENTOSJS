// do mesmo jeito que se pode atribuir um valor a uma variavel ou constante, pode-se atribuir uma função ;)

// do mesmo jeito que:
const x = 1
// atribui-se uma função como valor de uma variavel
const soma = function(a, b){
    return a + b
}
const result = soma(7,3)
// declara constante de nome 'result' com o resultado da função 'soma'
console.log(result)
// imprime '10'