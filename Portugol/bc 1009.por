// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas 
// efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre 
// suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
// ENTRADA O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão
//  (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das
//  vendas efetuadas por este vendedor, respectivamente.
programa {
  funcao inicio() {
    // Declaração de Variáveis
    cadeia nomeVendedor 
    real salarioFixo , comissao , totalReceber
    inteiro totalVendas

    // Entrada de Dados
    escreva("Digite seu nome: ")
    leia(nomeVendedor)

    escreva("Digite qual o seu salário fixo: ")
    leia(salarioFixo)

    escreva("Digite quantas você fez no mês: ")
    leia(totalVendas)

    // Processamento
    comissao = salarioFixo * 0.15
    totalReceber = comissao + salarioFixo

    // Saída de Dados
    escreva(nomeVendedor , ", o valor da sua comissão é de: R$", comissao , 
    "\nE o seu salário total, contando com a sua comissão de vendas é de: R$" , totalReceber)

    
  }
}
