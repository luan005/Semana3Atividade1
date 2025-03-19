const tamanho = prompt('Digite o tamanho da lista de números'); //Solicita o tamanho da lista
const lista = new Array(tamanho).fill(null);// Cria um array com o tamanho baseado no solicitado
lista
//Ajuestes do arrow function adicionados
 .map((item, index) => index + 1 ) // Utiliza o map para preencher o array de 1 até "tamanho", que foi solicitado e informado
 .reduce((acumulador, item) => acumulador * item);// Utiliza o reduce para multiplicar todos os elemtos do array


new Array(tamanho)//Cria um novo array, preenche o array de 1 até "tamanaho" e usa o reduce para somar todos os elementos
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);