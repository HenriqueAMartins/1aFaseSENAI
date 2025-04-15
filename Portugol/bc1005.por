programa {
  funcao inicio() {
    // Declaração de Variáveis
    real nota1 , nota2 , soma , media , valorFinal

    // Entrada de Dados
    escreva("Qual a nota da primeira prova? ")
    leia(nota1)

    escreva("Qual a nota da segunda prova? ")
    leia(nota2)

    // Processamento , Cálculo
    media = nota1 * 3.5 + nota2 * 7.5
    valorFinal = media / 11

    // Saída de Dados
    escreva("A sua média é: " , valorFinal )
    
    
  }
}
