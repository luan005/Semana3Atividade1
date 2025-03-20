const input = prompt(); // Armazena a entrada solicitada
const value = parseInt(input); // Converte a entrada para um numero inteiro 
const array = new Array(value).fill(null); // Criação de um array com valores null
let values = new Array(value) // Cria um novo array com valores de 1 até a entrada solicitada e convertida
  .fill(null)
  .map((currentValue, index) => index + 1);