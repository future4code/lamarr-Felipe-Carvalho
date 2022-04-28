
//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
    
    // Ex 1:
    //a. 
    //No console será impressa a seguinte informação:
    //a. undefined
    
    //b. 
    //No console será impressa a seguinte informação:
    //b. null
    
    //c. 
    //No console será impressa a seguinte informação:
    //c. 11
    
    //d. 
    //No console será impressa a seguinte informação:
    //d. 3
    
    //e. 
    //No console será impressa a seguinte informação:
    //e. [3,19,5,6,7,8,9,10,11,12,13]
    
    //f. 
    //No console será impressa a seguinte informação:
    //f. 9

    // Ex 2:
    //a. SUBI NUM ONIBUS EM MIRROCOS 27


//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

    // Ex 1:

    let nomeDoUsuario = prompt("Qual o seu nome?")
    let emailDoUsuario = prompt("Qual o seu e-mail?")
    const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o) ${nomeDoUsuario}`
    console.log(frase)

    // Ex 2:
    //a.
     let comidasFavoritasFelipe = ["strogonoff" , "batata frita" , "hamburguer", "todas as massas"]
    console.log(comidasFavoritasFelipe)

    //b.
    const frase2 = `Essas são minhas comidas preferidas:${comidasFavoritasFelipe}`
    console.log(frase2) 

    //c. 
    let comidaPrediletausuario = prompt("Qual a sua comida predileta?")
    const novaFrase = frase2.replaceAll("batata frita",comidaPrediletausuario)
    console.log(novaFrase)

    // Ex 3:
    //a.
    let listaDeTarefas = []

    //b.
    let tarefa1 = prompt("Me fale a tarefa 1 do seu dia?")
    let tarefa2 = prompt("Me fale a tarefa 2 do seu dia?")
    let tarefa3 = prompt("Me fale a tarefa 3 do seu dia?")

    //c.
    listaDeTarefas = [tarefa1 , tarefa2 , tarefa3]
    console.log(listaDeTarefas)

    //d. 
    let tarefaJaRealizada = prompt("Me fale qual tarefa você já realizou utilizando os números 0,1 ou2")

    //e
    listaDeTarefas.splice(tarefaJaRealizada, -1)
    console.log(listaDeTarefas.splice)
