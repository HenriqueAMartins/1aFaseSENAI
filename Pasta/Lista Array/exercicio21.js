// 21. Remova valores duplicados de um array.

let valores = ['Alex' , 'Alex' , 'João' ,'João', 'Claudia' , 'Maria']
let removerDuplicados = new Set([...valores])
let novoArray = [...removerDuplicados]
console.log(novoArray)