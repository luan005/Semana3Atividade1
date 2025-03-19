// Declara de arrays
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
const soma = a.map((item, index) => item + b[index]);// Usa o método 'map' no array 'a' para criar um novo array, somando os elementos de 'a' e 'b' na mesma posição
console.log(soma); //Exibe o resultado no console