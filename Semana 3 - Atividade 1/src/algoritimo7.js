let estudantes = [ // Declara um array de objetos
    {nome: "João", idade: 15},
    {nome: "Maria", idade: 20},
    {nome: "Felipe", idade: 22},
    {nome: "Pedro", idade: 12},
    {nome: "Joana", idade: 18},
   ];
   const details = estudantes.filter((x) => x.idade >= 18); // Utiliza o filter com um arrow function para filtrar estudantes com idade maior ou igual a 18
   console.log(details.length); // Exibe os alunos com mais de 18