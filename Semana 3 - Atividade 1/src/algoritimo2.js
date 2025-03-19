const letras = [ //Declara um array de arrays de letras
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
 ];
 
 let resultado = letras.flat().reduce((objeto, numero) => { //Usa o flat para compactar o array, e usa o reduce para contar quantas vezes a letra aparece no array
  if (objeto[numero]) {
    objeto[numero] += 1;
  } else {
    objeto[numero] = 1;
  }
  return objeto;// Retorno da contagem
 }, {});