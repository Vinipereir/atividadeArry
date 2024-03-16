//Retorna um novo objeto Array Iterator que contém as chaves para cada índice no array

const array = ['a', 'b', 'c'];
const iterator = array.keys();
for (const key of iterator) {
  console.log(key); // Saída: 0, 1, 2
}

exemplo 02
//colors contendo três cores. Em seguida, chamamos o método keys

const colors = ['red', 'green', 'blue'];
const iterator = colors.keys();
//A cada iteração, o valor index representará o índice do elemento no array, que será impresso no console.
for (const index of iterator) {
  console.log(index); // Saída: 0, 1, 2
}

