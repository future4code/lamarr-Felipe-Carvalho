// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()



const meuArray = [18, 8, 3, 1, 34, 47, 22] 

// EXERCÍCIO 01
/*
ESQUEMA: array dado >>> contagem de valores >>> novo array >>> retorno
*/
function retornaTamanhoArray(array) {
   const quantElementArray = array.length
   return quantElementArray
}
retornaTamanhoArray(meuArray)


// EXERCÍCIO 02
/*
ESQUEMA: array dado >>> inversão da ordem dos valores >>> novo array > retorno
*/
function retornaArrayInvertido(array) {
  const arrayInvertido = array.reverse()
  return arrayInvertido
}
retornaArrayInvertido(meuArray)

// EXERCÍCIO 03
/*
ESQUEMA: array dado >>> variavel p função comando sorte >>> função que organiza como number e não com string > 
retorno da variável e fora da função oa rray dado
*/

function retornaArrayOrdenado(array) {
  const arrayCrescente = array.sort(function(a,b){
    return a-b
  })
  return arrayCrescente
}
retornaArrayOrdenado(meuArray)

// EXERCÍCIO 04
/*
ESQUEMA: array dado >>> declarar função para encontrar os números pares do array >>> filtrar os números pares 
encontrados >>> retornar estes números pares no novo array
*/

function retornaNumerosPares(array) {
 function numerosPares (array){
   return array % 2 ===0}
  let arrayPares = array.filter(numerosPares)
   return arrayPares
  }
retornaNumerosPares(meuArray)

// EXERCÍCIO 05
/*
ESQUEMA: Array dado >>> criar novo array >>> laço para verificar cada um dos arrays >>> condição se é par eleva, se não for não altera 
>>> array pra receber a alteração >>> retorno deste 
novo array
*/

function retornaNumerosParesElevadosADois(array) {
  let arrayElevadoQuadrado = []
  for(let num of array) {
    if(array.length >=0){ if(num % 2 === 0)
      arrayElevadoQuadrado.push(num**2)}}
  return arrayElevadoQuadrado
   }


// EXERCÍCIO 06
/*
ESQUEMA: função dada > uma função pra ordenar >>> gerar novo array ordenado >>> retonar a última posição com o comando 
array.lastIndexOf()
*/

function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
/*
ESQUEMA: operação para selecionar o maior número (coloca os números em crescente e escolhe o último 
  ou como são apenas dois números escolhe direto) >>> operação para gerar o boleano. chama o valor 
  'maiorNumero'e o divide pelo menor perguntando o resto da divisão que deve ser igual a zero >>> 
  operação que subtraio os valores 'maiorNumero' do menor. se o valor for menor que 0 soma o dobro 
  para ficar positivo, caso não, não faz nada >>> operação para gerar o objeto com estes 3 valores 
  (acho que esta operação pode vir em cima)
*/

function retornaObjetoEntreDoisNumeros(num1, num2) {
 
}

// EXERCÍCIO 08
/*
ESQUEMA: Dúvida sobre o enunciado. Tenho que retornar todos os pares entre 0 e N?
*/

function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
/*
ESQUEMA: if para ladoA ==== ladoB ==== ladoC return "equilátero" >>> if else para ladoA !== ladoB !== ladoC 
return "escaleno" >>> else return "isósceles" >>> atribuir valores a função.
*/


// EXERCÍCIO 10
/*
ENUNCIADO: Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores 
(NESTA ORDEM): o segundo maior e o segundo menor número do array original
*/
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
/*
ENUNCIADO: Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. 
Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
*/
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
/*
ENUNCIADO: Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e 
retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome. 
*/
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
/*
ENUNCIADO: Imagine que você trabalhe num parque de diversões, como pessoa desenvolvedora. As suas tarefas 
são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das 
atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as 
pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. As regras 
para entrar na montanha russa do terror são: 

- Ter, no mínimo, 1.5m de altura;
- Ser mais velho do que 14 anos e
- Ser mais novo do que 60 anos.

Dados esses requisitos, escreva:

A) uma função que receba um array e devolva outro contendo as pessoas que tem permissão para 
entrar no brinquedo
*/
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
/*
ENUNCIADO: B) uma função que receba um array e devolva outro contendo as pessoas que não tem permissão 
para entrar no brinquedo
*/
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
/*
ENUNCIADO: Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de 
explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. 
Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as 
compras realizadas pelo cliente. Exemplo:

A sua tarefa é: faça uma função que receba um array com os objetos do tipo acima como parâmetro 
e atualize o saldo total individual de cada um, sem criar um novo array. Retorne o array original. 
*/


// EXERCÍCIO 15A
/*
ENUNCIADO: Você foi contratado por um escritório médico para organizar a agenda de consultas.
A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um 
array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)
*/
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let arrayOrdenado = consultas.sort(function(a,b){
    if (a.nome > b.nome) {return 1} if (a.nome < b.nome){return-1}
  })
  return arrayOrdenado
}

// EXERCÍCIO 15B
/*
ENUNCIADO: A sua segunda tarefa é criar uma função que receba o array acima como parâmetro e retorne 
um array de consultas ordenado pelas datas das consultas(da menor para a maior)
*/
function retornaArrayOrdenadoPorData(consultas) {
   
}