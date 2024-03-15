//Juntar dois ou mais arrays

const array = [1, 2, 3]
const newArray = array.concat([4, 5])

//retorna um novo array

console.log(array) // [1,2,3]
console.log(newArray) // [1,2,3,4,5] 

//Aqui, estamos declarando uma constante chamada array e inicializando-a com um array 

const array = [1, 2, 3];
// Esta linha cria uma nova array e usamos  (...) para espalhar os elementos do array original
//adicionamos os números 4 e 5 ao final da nova array  
const newArray = [...array, 4, 5];

console.log(array); // [1,2,3]
console.log(newArray); // [1,2,3,4,5]