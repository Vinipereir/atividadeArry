//Comando Sort
// Ordena os elementos de um array in-place e retorna o array ordenado

const array = [3, 1, 2, 4, 5];
array.sort();
//Ele ordena os elementos de um array
console.log(array); // Saída: [1, 2, 3, 4, 5]

//exemplo 02
//Aqui ele esta organizando em Ordem alfabetica 

const fruits = ['Maçã', 'Banana', 'Laranja', 'Pera', 'Uva'];
const sortedFruits = [...fruits].sort();
//ordem alfabetica
console.log(sortedFruits); // Saída: ['Banana', 'Laranja', 'Maçã', 'Pera', 'Uva']
