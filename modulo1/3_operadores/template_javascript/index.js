/*
 EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

 QUESTÃO 1
 Impressão 1
 a. false

 Impressão 2
 b. false

 Impressão 3
 c. true

 Impressão 4
 d. bolean

 QUESTÃO 2
 Sim, consigo perceber um problema. 
 Uma vez que ele declara  as variáveis "primeiroNumero" e "segundoNumero" com let no momento de codar as 
 perguntas para o usuário, e let permite que o usuário altere os valores posteriormente, a sintaxe para a variável "soma" não 
 pode ser declarada como const pois os valores de const não poderão ser alterados futuramente.

 QUESTÃO 2
 A solução seria declarar a variável "soma" com let também.
 */

 //EXERCÍCIOS DE ESCRITA DE CÓDIGO

 //EXERCÍCIO 1
 //Questão a)
 let idadeUsuario = prompt("Qual o sua idade?")

 //Questão b)
 let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

 //Questão c)
 const comparacaoIdades = idadeUsuario > idadeMelhorAmigo
 console.log ("sua idade é maior do que a do seu amigo?", comparacaoIdades)

 //Questão d)
const diferencaIdades = idadeUsuario - idadeMelhorAmigo
console.log("Diferença de idade entre amigos", diferencaIdades)

//EXERCÍCIO 2
//Questão a)
const numeroPar = prompt("Por favor, insira um número par, abaixo?")

//Questão b)
const restoDivisao = numeroPar % 2
console.log("O resto da vivisão por 2 do númeroinserido é:", restoDivisao)

//Questão c)
//O resto da divisão de todo numero par, por 2, será sempre 0.

//Questão d)
//No caso da inserçãod e um número impar, teremos impresso na tela o valor do resto da divisão.

//EXERCÍCIO 3

const idadeEmAnos = prompt("Qual a sua idade?(responda em anos)")
console.log("A idade do usuário em anos é:", idadeEmAnos, "anos")

//Questão a)
const idadeEmMeses = idadeEmAnos * 12
console.log("A idade do usuário em meses é:", idadeEmMeses, "meses")

//Questão b)
const idadeEmDias = (idadeEmAnos * 12) * 366
console.log("A idade do usuário em dias é:", idadeEmDias, "dias")

//Questão c)
const idadeEmHoras = (idadeEmAnos * 12) * (idadeEmDias * 24)
console.log("A idade do usuário em horas é:", idadeEmHoras, "horas")

//EXERCÍCIO 4

const numero1 = prompt("Preencha o campo abaixo com um número aleatório:")
const numero2 = prompt("Preencha o campo abaixo com outro número aleatório")















