// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
function caixaALTA (novoObjeto){
    // let resultado = {...novoObjeto }
    // resultado.nome = resultado.nome.toUpperCase()
    // resultado.profissao= resultado.profissao.toUpperCase()
    // resultado.username = resultado.username.toUpperCase()
    // resultado.senha = resultado.senha.toUpperCase()

    // return resultado

    return novoObjeto.nome.toUpperCase()+", "+novoObjeto.profissao.toUpperCase()+", "+novoObjeto.username.toUpperCase()+", "+novoObjeto.senha.toUpperCase()
}

console.log("Exercicio 1")
console.log(caixaALTA(objeto))

// 2. A segunda deve retornar os valores do objeto como texto corrido
function textoCorrido (novoObjeto){
    
    return novoObjeto.nome+", "+ novoObjeto.profissao+", "+novoObjeto.username+", "+novoObjeto.senha

}

console.log("\nExercicio 2")
console.log(textoCorrido(objeto))

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
function callBack(novoObjeto, funcao){
    let resultado = funcao(novoObjeto)
    return resultado
}

console.log("\nExercicio 3")
console.log(callBack(objeto,caixaALTA))
console.log(callBack(objeto,caixaALTA))

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2