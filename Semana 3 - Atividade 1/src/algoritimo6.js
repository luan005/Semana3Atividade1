const itens = ["Guarabira", "Belém", "Sapé"];// Declaração do array
const listaHTML = `<ol>${itens.map(item => `<li>${item}</li>`).join('')}</ol>`;// Usa o método map para iterar sobre cada elemento e retorna a string
console.log(listaHTML);