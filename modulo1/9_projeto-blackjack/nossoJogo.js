// LABENU - CURSO DE PROGRAMAÇÃO FULLSTACK
// TURMA LAMARR - NOTURNO
// ALUNO: Felipe Alencar de Carvalho
// PROJETO DE FIXAÇÃO BLACKJACK
// Exercícios Obrigatórios

/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
 
   const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
 */

//EXERCÍCIO 01

      const boasVindas = "Boas vindas ao jogo de Blackjack. Vamoslá!!!!!"
      console.log(boasVindas)

//EXERCÍCIO 02 e 04

      if(confirm("Você deseja iniciar uma nova rodada?")) {
      
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
       
// EXERCÍCIO 03

      }else {
         console.log("Poxaa. O jogo acabou! Quem sabe em uma próxima!")
      }  
