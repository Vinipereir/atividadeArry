//Verifica se pelo menos um dos elementos do array passa por um teste especificado pela função fornecida

//true se pelo menos um elemento passar no teste, caso contrário, retorna false.

const array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some(element => element % 2 === 0);
console.log(hasEvenNumber); // true

//exemplo 2

const numbers = [1, 2, 3, 4, 5];

// Verifica se pelo menos um número é par
const hasEvenNumber = numbers.some(element => element % 2 === 0);

if (hasEvenNumber) {
    console.log("O array contém pelo menos um número par.");
} else {
    console.log("O array não contém nenhum número par.");
}
