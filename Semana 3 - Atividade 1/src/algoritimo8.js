const users = [ // Declara um array de objetos
    {firstName: "john", lastName: "colben", age: 26},
    {firstName: "jimmy", lastName: "fred", age: 75},
    {firstName: "sam", lastName: "boston", age: 50},
    {firstName: "ronald", lastName: "bristh", age: 26},  
  ];
  const output = users.filter((x) => x.age < 30).map((x) => x.firstName); // Utiliza o filter com arrow function para filtrar os users com idade menor que 30 e usa o map para trazer o fisrtName dos users filtrados
  console.log(output);// Exibe os users filtrados com seus respectivos dados