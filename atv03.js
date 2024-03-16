//Remover o último elemento do array
// usamos o método slice
//para criar uma cópia do array excluindo o último elemento

const array = [1, 2, 3];
console.log(array); // [1,2,3]

const newArray = array.slice(0, -1);
console.log(newArray); // [1,2]

//exemplo de teste

const array = [1,2,3]
console.log(array) // [1,2,3]

array.pop()
console.log(array) // [1,2]
