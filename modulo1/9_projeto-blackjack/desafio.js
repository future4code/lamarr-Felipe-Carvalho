// LABENU - CURSO DE PROGRAMAÇÃO FULLSTACK
// TURMA LAMARR - NOTURNO
// ALUNO: Felipe Alencar de Carvalho
// PROJETO DE FIXAÇÃO BLACKJACK
// Exercícios de Desafio

/*
   EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
   const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

 */

 const boasVindas = "Boas vindas ao jogo de Blackjack. Vamoslá!!!!!"
      console.log(boasVindas)


      if(confirm("Você deseja iniciar o jogo?")) {

      const cartaUsuario1 = comprarCarta(); 
      const cartaUsuario2 = comprarCarta(); 
      const cartaComputador1 = comprarCarta(); 
      const cartaComputador2 = comprarCarta(); 
         
      const somaCartasUsuario = (cartaUsuario1.valor+cartaUsuario2.valor)
      const somaCartasComputador = (cartaComputador1.valor+cartaComputador2.valor)

      console.log("Cartas do Usuário - ", cartaUsuario1.texto, cartaUsuario2.texto," - pontuação",
      somaCartasUsuario) 
       console.log("Cartas do Computador - ", cartaComputador1.texto, cartaComputador2.texto," - pontuação", 
      somaCartasComputador)

      if (somaCartasUsuario===somaCartasComputador){
      console.log("OMG deu empate, continuem jogando")} 
      else if (somaCartasUsuario>somaCartasComputador){
      console.log("O Usuário ganhou!!!Parabénsss")} 
      else if (somaCartasUsuario<somaCartasComputador){
      console.log("O Computador ganhou!!!Parabénsss")}

// EXERCÍCIO 08

      function regraReiniciaJogo (CU1,CU2,CC1,CC2){
         const azesDoJogo = ["A"]
         if (CU1===azesDoJogo && CU2===azesDoJogo){
         console.log(confirm("Você deseja iniciar o jogo novamente?"))
         }
         else if (CC1===azesDoJogo && CC2===azesDoJogo){
         console.log(confirm("Você deseja iniciar o jogo novamente?"))
         }}

         (regraReiniciaJogo(cartaUsuario1,cartaUsuario2,cartaComputador1,cartaComputador2))
         
      } else {console.log("Poxaa. O jogo acabou! Quem sabe em uma próxima!")

      }  

