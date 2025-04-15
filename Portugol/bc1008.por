// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, 
// o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número
//  e o salário do funcionário, com duas casas decimais.
programa {
  funcao inicio() {
    // Declaração de Variáveis
    inteiro id , horasTrabalhadas 
    real valorHora , salario

    // Entrada de Dados
    escreva("Qual o seu número? ")
    leia(id)

    escreva("Digite quantas horas você trabalha por mês: ")
    leia(horasTrabalhadas)

    escreva("Digite quanto você ganha por hora: ")
    leia(valorHora)

    // Processamento ,Cálculo
    salario = horasTrabalhadas * valorHora

    // Saída de Dados
    escreva("Number = " , id , 
    "\nSalary = U$" , salario)

    
  }
}
