// Curso Labenu Fullstack
// Felipe Alencar de Carvalho
// ENTREGA DIA 05.05.2022
// EXERCÍCIOS DE FUNÇÕES DE ARRAY

// -----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //
// -----------------------------------------------

// EXERCÍCIO 01

// No console teremops a impressão do mesmo Array, com as mesmas informações de nome e apelido, na mesma ordem, 
// com a adição apenas do número referente ao index dos valores dentro do Array.

// {nome: 'Amanda Rangel', apelido: 'Mandi'} 0 
// {nome: 'Laís Petra', apelido: 'Laura'} 1 
// {nome: 'Letícia Chijo', apelido: 'Chijo'} 2 

// EXERCÍCIO 02

// O comando item.nome retorna apenas o valor "nome" do array.

// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// EXERCÍCIO 03

// Esta função retorna o valor do index dos nomes Laís Petra e Amanda rangel

// {nome: 'Amanda Rangel', apelido: 'Mandi'}
// {nome: 'Laís Petra', apelido: 'Laura'}

// -----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO //
// -----------------------------------------------

// EXERCÍCIO 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)
 const soNomes =  pets.map((item, index, array) => 
 {return item.nome})
 console.log(soNomes)

// b)
 const soSalsicha = pets.filter(cachorro => cachorro.raca === 'Salsicha');
 console.log(soSalsicha)

// c)
const cao1 = pets.filter(caoPoodle1 => caoPoodle1.raca === "Poodle")
console.log ("Você ganhou um cupomde desconto de 10% para tosar a" ${cao1})

