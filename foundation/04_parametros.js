// pré-definicição de parametros na propria função
function logParametros(a, b, c = 0){
    console.log(a, b, c)
}
// caso nao declare todos os parementros o js irá definir como indefined (ao menos que predefina na função)
// retorna 1, 2, 0          (predefinido)
// retorna 1, 2, undefined  (nao definido)
logParametros(1, 2)

// caso declare mais parametros do que a quantidade existente, o js ira ignorar
// retorna 1, 2, 3
logParametros(1, 2, 3, 4, 5)

