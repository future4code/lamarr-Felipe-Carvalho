
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 1

// a) No console serão impressos os valores: 10 e 50, um sobre o outro;

// b) No casod e retirar o comando de impressão console.log, o console reotrnaria um erro uma vez que o comanddo
// exclusivamente com o nome da função não é suficiente para exibir a informação. 

// EXERCÍCIO 2

// a) Esta função tem a propriedade de analisar a entrada do usuário e, a cada inserção de valores (no caso uma frase) ela 
// responde e imprime no console se aquela frase contém a palavra cenoura. A resposta é sempre com true or false. 

// b) true / true / false

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1

// a)

function textoA(texto){
     console.log(texto)  
 }

 textoA("Eu sou Felipe, tenho 42 anos, moro em BH e sou estudante")

// b)

let nomeUser = prompt("Qual seu nome?")
let idadeUser = prompt("Qual sua idade?")
let enderecoUser = prompt("Qual seu endereço?")
let profissaoUser = prompt("Qual sua profissão?")

function textoB(nome, idade, endereco,profissao) {
    console.log("Eu sou "+nome+", tenho "+idade+" anos, moro na rua "+endereco+" e sou "+profissao+".")
}

textoB(nomeUser, idadeUser, enderecoUser, profissaoUser)

// EXERCÍCIO 2

// a)

let numero1 = Number(prompt("Insira um número"))
let numero2 = Number(prompt("Insira um outro número"))

function somaNum(num1, num2) {
    return num1 + num2
}
console.log(somaNum(numero1, numero2))

// b)

function boleana1(num1, num2){
 return num1 > num2
}
console.log(boleana1(30, 20))

// c)

function boleana2(num1){
    let restDiv = num1 % 2
    return restDiv === 0
}
console.log(boleana2(35))

// d)

function mensagem(textoMensagem){
    const tamFrase = textoMensagem.length
    const fraseMaiusc = textoMensagem.toUpperCase()
    console.log(tamFrase, fraseMaiusc)
}
mensagem("Esta é a mensagem")

// EXERCÍCIO 3

// a)

