function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salario=2000
let comissaoCemReais=qtdeCarrosVendidos * 100
let comissaoPorcentagem=valorTotalVendas * 0,05
let comissaoTotal=comissaoCemReais+comissaoPorcentagem
let salarioTotal=salario+comissaoTotal
return salarioTotal