//Remover todos os elementos de um array

const array = [1, 2, 3, 4, 5];
array.splice(0, array.length); // Remove todos os elementos do array
console.log(array); // Output: []

//Inserir elementos no início de um array

const array = [3, 4, 5];
array.splice(0, 0, 1, 2); // Adiciona os números 1 e 2 ao início do array
console.log(array); // Output: [1, 2, 3, 4, 5]

