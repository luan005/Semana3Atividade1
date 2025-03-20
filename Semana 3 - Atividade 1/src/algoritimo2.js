const numbers = [1,2,3,4,5]; //Declara um array de numeros
const output = numbers.map((x) => { //Usa o map com um arrow function para dobrar os elementos do array
  return x * 2;  
});
console.log(output); //Exibe o array com os valores dobrados