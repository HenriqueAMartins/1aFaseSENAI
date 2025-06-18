// 28. Verifique se todos os elementos são números com .every().

let elementos = [3, 4, 5, 6, 7, 8]
let saoNumeros = elementos.every(elemento => typeof elemento === "number")
console.log(saoNumeros)