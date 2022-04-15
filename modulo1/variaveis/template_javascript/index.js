/* 
 QUESTÃO 1
 No console virá impressa a seguinte repsosta:
 10
 10 5

 QUESTÃO 2
 No console virá impressa a seguinte repsosta:
 b c a

 QUESTÃO 3
 let jornadaDiaria = prompt ("Quantas horas você trabalha por dia?")
 let valorDiaria = prompt ("Quanto você recebe por dia")
 alert ('Você recebe ${valorDiaria/jornadaDiaria} por hora')
 */

 //QUESTÃO 1
 //TAREFA a), b), c)

 let nome
 let idade

console.log (typeof nome)
console.log (typeof idade)


//TAREFA d)

/* Na tela foi impressa a expressão undefinied uma vez que os valores das variáveis não foram atribuídos. 
O comando typeof serve a esta função.
*/


//TAREFA e)

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log (nome)
console.log (idade)
/* Na primeira tentativa o erro foi reportado na impressão do console. 
Busquei entende ro probelma sem recorrer à dica ou à qualquer outro auxílio.
Percebi que, uma vez que às variáveis "nome" e "idade" não havia sido atribuído nenhum valor
mas já haviam sido declaradas, ao escrever a sintaxe do prompt não era necessário atribuir a sintaxe novamente. 
*/


//TAREFA f)

console.log (typeof nome)
console.log (typeof idade)

//TAREFA g)

console.log ("Olá", nome, "você tem", idade, "anos")

//QUESTÃO 2
//TAREFA a)

let pergunta1 = prompt("Seus sapatos estão desamarrados?")
let pergunta2 = prompt("Você gosta de strogonoff?")
let pergunta3 = prompt("Você tem cachorro?")

//TAREFA b)

console.log (pergunta1)
console.log (pergunta2)
console.log (pergunta3)

//QUESTÃO 2
//TAREFA a)

let a = 15
let b = 35
let c = a
let d = b
a = d
b = c

console.log (a)
console.log (b)

//Exercício finalizado

