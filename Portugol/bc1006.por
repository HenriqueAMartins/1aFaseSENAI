programa {
  funcao inicio() {
    // Declaração de Variáveis
    real nota1 , nota2 , nota3 , media

    // Entrada de Dados
    escreva("Qual a nota da primeira prova? ")
    leia(nota1)

    escreva("Qual a nota da segunda prova? ")
    leia(nota2)

    escreva("Qual a nota da terceira prova? ")
    leia(nota3)

    // Processamento , Cálculo
    media = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10

    // Saída de Dados
    escreva("A sua média final é de: " , media)

    
  }
}
