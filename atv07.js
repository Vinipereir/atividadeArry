//Retorna um novo objeto Array Iterator que contém pares de chave
//para cada índice no array

const array = ['a', 'b', 'c'];
// Estamos chamando o método de entries
// Este objeto irá gerar pares de chave/valor para cada índice no array
const iterator = array.entries();
for (const [index, value] of iterator) {
// Dentro do loop, estamos imprimindo o index e o value de cada par
  console.log(index, value); // Saída: 0 'a', 1 'b', 2 'c'
}

//segundo exemplo

// Criamos um array fruits contendo nomes de frutas.

const fruits = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva'];
const iterator = fruits.entries();
for (const [index, fruit] of iterator) {
//nome da variável $
  console.log(`A fruta "${fruit}" está no índice ${index}.`);
}
