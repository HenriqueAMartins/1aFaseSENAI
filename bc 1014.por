// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida
//  (em Km) e o total de combustível gasto (em litros).
programa {
  funcao inicio() {
    // Declaração de Variáveis
    real distanciaKm , combustivelGasto , consumoMedio

    // Entrada de Dados
    escreva("Digite quantos kilometros você percorreu com o carro: ")
    leia(distanciaKm)

    escreva("Digite quantos litros de combutível foram gastos: ")
    leia(combustivelGasto)

    // Processamento
    consumoMedio = distanciaKm / combustivelGasto

    // Saída de Dados
    escreva(consumoMedio , " km/l")
    
  }
}
