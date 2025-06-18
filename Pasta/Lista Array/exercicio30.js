// 30. "Achatamento": transforme um array com subarrays em um único array plano
// (um nível só).

let arrayDeArray = [34, 434, [342, 3, 656, 4], [2, [45, 34, [344, 343]]]]
let arrays = arrayDeArray.flat(3)
console.log(arrays)