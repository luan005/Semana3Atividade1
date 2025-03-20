const numeros = [1,2,3,4,5]; //Declara um array de números
function calcularDobro(numero) { //Função que receberá um numero e retornará o dobro do numero
  return numero * 2;  
}
const numerosDobro = numeros.map(calcularDobro); // Aplica a função no array
console.log(numerosDobro);// Exibe o array dps de aplicado a função