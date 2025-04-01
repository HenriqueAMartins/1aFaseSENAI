programa {
  funcao inicio() {
    inteiro valor, resto, notas100= 0, notas50= 0, notas20= 0, notas10= 0, notas5= 0, notas2= 0, moedas1= 0
    escreva("Valor: R$")
    leia(valor)
    escreva("teste", valor / 100)
    resto = valor % 100
    valor = valor - resto
    notas100 = valor / 100
    escreva("\nNotas 100: " + notas100)
    valor = resto
    se(valor >= 50){
      notas50 = 1
      valor = valor - 50
    }
    escreva("\nNotas 50: " + notas50)
    notas20 = 0
    se(valor >= 40){
      notas20 = 1
    }senao{
      se(valor >= 20){
        notas20 = 1
      }
    }
      escreva("\nNotas 20: " + notas20)
      valor = valor - notas20*20

      se(valor >= 10){
      notas10 = 1
      
      valor = valor - 10
      }
      escreva("\nNotas 10: " + notas10)

      se(valor >= 5){
      notas5 = 1
      valor = valor - 5
      }
      escreva("\nNotas 5: " + notas5)

      notas2 = 0
      se(valor >= 4){
      notas2 = 2
     }senao{
      se(valor >= 2){
        notas2 = 1
    }
  
        escreva("\nNotas 2: " + notas2)
        valor = valor - notas2*2
      }
      se(valor >= 1){
        moedas1 = 1
        
        valor = valor - moedas1*1
      }
      escreva("\nMoedas 1: " + moedas1)
    
  }
}
