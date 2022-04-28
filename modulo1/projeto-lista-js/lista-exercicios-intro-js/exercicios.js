// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
   const altRet = prompt("Qual a altura do triangulo")
   const largRet = prompt("Qual a largura do triangulo")

   console.log(altRet * largRet)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual o ano atual")
  const anoDeNascimento = prompt("Qual o seu ano de nascimento")

  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(pesoCorporal, estatura) {
  // implemente sua lógica aqui

  return pesoCorporal / (estatura * estatura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade")
  const email = prompt("Qual o seu endereço de e-mail")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
   const corFavorita1 = prompt("Qual a sua cor favorita")
   const corFavorita2 = prompt("Qual a sua segunda cor favorita")
   const corFavorita3 = prompt("Qual a sua terceira cor favorita")

   console.log([corFavorita1, corFavorita2, corFavorita3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return [array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

 // DÚVIDA

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual o ano atual")
  const anoDeNascimento = prompt("Qual o seu ano de nascimento")
  const anoDeEmissao = prompt("Qual o ano de emissão do seu documento")

  const idade = anoAtual - anoDeNascimento
  const tempoDeCarteira = anoAtual - anoDeEmissao

  const renovacao1 = idade <= 20 && tempoDeCarteira >= 5
  const renovacao2 = idade > 20 && idade <= 50 && tempoDeCarteira >= 10
  const renovacao3 = idade > 50 && tempoDeCarteira >= 15

  console.log(cond1 || cond2 || cond3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

// DÚVIDA

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  //DÚVIDA

}