// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1,
//  o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2
//  e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores,
//  respectivamente dois inteiros e um valor com 2 casas decimais.
programa {
  funcao inicio() {
    // Declaração de Variáveis
    inteiro cdg1 , cdg2 , qntdPeca1 , qntdPeca2
    real precoPeca1 , precoPeca2 , valorPagar1 , valorPagar2 , valorTotal

    // Entrada de Dados
    escreva("Digite a seguir o código da primeira peça, " , "quantidade de peças, " , "valor da peça: ")
    leia(cdg1) leia(qntdPeca1) leia(precoPeca1)

    escreva("Digite a seguir o código da segunda peça, " , "quantidade de peças, " , "valor da peça: ")
    leia(cdg2) leia(qntdPeca2) leia(precoPeca2)
    
    // Processamento
    valorPagar1 = precoPeca1 * qntdPeca1
    valorPagar2 = precoPeca2 * qntdPeca2
    valorTotal = valorPagar1 + valorPagar2

    // Saída de Dados
    escreva("VALOR A PAGAR: R$" , valorTotal)

  }
}
